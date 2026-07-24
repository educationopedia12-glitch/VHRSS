import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { resend } from "@/lib/resend";

export async function POST(request) {
    try {

        const origin = request.headers.get("origin");

        const allowedOrigins = [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "https://vishvahindurashtrasevasangathan.in",
            "https://www.vishvahindurashtrasevasangathan.in",
        ];

        if (origin && !allowedOrigins.includes(origin)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized request.",
                },
                { status: 403 }
            );
        }

        const body = await request.json();

        const { name, phone, email, message } = body;

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid 10-digit mobile number.",
                },
                { status: 400 }
            );
        }

        // Basic validation
        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required." },
                { status: 400 }
            );
        }

        // Check for submissions from the same email or phone
        // in the last 10 minutes
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

        // Check email
        const emailSnapshot = await db
            .collection("contact_submissions")
            .where("email", "==", email)
            .where("createdAt", ">=", tenMinutesAgo)
            .limit(1)
            .get();

        if (!emailSnapshot.empty) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "You have recently submitted a request. Please wait 10 minutes before sending another.",
                },
                { status: 429 }
            );
        }

        // Check phone
        const phoneSnapshot = await db
            .collection("contact_submissions")
            .where("phone", "==", phone)
            .where("createdAt", ">=", tenMinutesAgo)
            .limit(1)
            .get();

        if (!phoneSnapshot.empty) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "You have recently submitted a request. Please wait 10 minutes before sending another.",
                },
                { status: 429 }
            );
        }

        // Save to database
        await db.collection("contact_submissions").add({
            name,
            phone,
            email,
            message,
            createdAt: new Date(),
        });

        await resend.emails.send({
            from: "Vishwa Hindu Rashtra <onboarding@resend.dev>",
            to: "vhrss2026@gmail.com",
            subject: "New Contact Form Submission",
            html: `
    <div style="font-family:Arial,sans-serif;padding:20px">
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <div style="background:#f5f5f5;padding:15px;border-radius:8px">
        ${message.replace(/\n/g, "<br/>")}
      </div>
    </div>
  `,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}