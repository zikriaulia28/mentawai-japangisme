import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://japangisme-mentawai.vercel.app";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#tentang`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#galeri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#harga`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#kontak`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
