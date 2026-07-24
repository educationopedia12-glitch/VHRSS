import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppDialog from "@/components/WhatsappDialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    "https://vishvahindurashtrasevasangathan.in"
  ),

  title: {
    default: "Vishwa Hindu Rashtra Seva Sangathan",
    template: "%s | Vishwa Hindu Rashtra Seva Sangathan",
  },

  description:
    "Vishwa Hindu Rashtra Seva Sangathan is dedicated to preserving Sanatan Dharma, promoting national unity, cultural heritage, and social service.",

  keywords: [
    "Sanatan Dharma",
    "Hindu Organization",
    "Hindu Rashtra",
    "Seva",
    "Social Service",
    "Bharat",
  ],

  authors: [
    {
      name: "Vishwa Hindu Rashtra Seva Sangathan",
    },
  ],

  creator: "Vishwa Hindu Rashtra Seva Sangathan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vishwa Hindu Rashtra Seva Sangathan",

    description:
      "Dedicated to preserving Sanatan Dharma and serving the nation.",

    url: "https://vishvahindurashtrasevasangathan.in",

    siteName: "Vishwa Hindu Rashtra Seva Sangathan",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vishwa Hindu Rashtra Seva Sangathan",

    description:
      "Dedicated to preserving Sanatan Dharma.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppDialog />
      </body>
    </html>
  );
}
