export default function sitemap() {
  const base =
    "https://vishvahindurashtrasevasangathan.in";

  return [
    {
      url: base,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}