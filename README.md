# Japangisme Mentawai Tour Guide

Landing page promosi **Open Trip & Private Trip Mentawai** — paket 2H1M / 3H2M, dikelola oleh **Bung Japang**.

## Stack

- **Next.js 16** App Router
- **TypeScript**
- **Tailwind CSS v4** + shadcn/ui (base-nova)
- **Framer Motion** (animasi scroll reveal)
- **Embla Carousel** (hero slider + testimoni carousel)
- **Yet Another React Lightbox** (galeri lightbox)
- **Lucide** (ikon)

## Struktur Halaman

10 section dalam satu halaman landing:

| Section | File |
|---------|------|
| Hero | `HeroSection.tsx` (carousel + CTA) |
| Highlights | `HighlightsSection.tsx` (fasilitas) |
| Pricing | `PricingSection.tsx` (2 paket + drone add-on) |
| Itinerary | `ItinerarySection.tsx` (2H1M / 3H2M) |
| Facilities | `FacilitiesSection.tsx` (include/exclude) |
| Gallery | `GallerySection.tsx` (mobile: horizontal scroll; desktop: masonry 4 kolom) |
| Testimonials | `TestimonialSection.tsx` (carousel) |
| Terms | `TermsSection.tsx` (syarat & ketentuan) |
| FAQ | `FaqSection.tsx` (accordion) |
| Footer | `FooterSection.tsx` (contact, WA, IG, TikTok) |

## Memulai

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Konten

Semua konten hard-coded di `src/lib/data.ts`:
- Brand, nav, hero (BRAND, NAV_LINKS, HERO)
- Highlights (HIGHLIGHTS)
- Include/exclude (INCLUDED, EXCLUDED)
- Testimoni (TESTIMONIALS)
- FAQ (FAQS)
- Gallery (GALLERY — path `/gallery/*`, spot filter di `GALLERY_SPOTS`)
- Terms (TERMS)

## Aset

Gambar galeri di `public/gallery/<spot>/`, hero di `public/hero/`, logo di `public/logo.jpg`.

Sumber aset mentah di `assets/` (gitignored).

## Deploy

Vercel — import dari GitHub repo, environment variables:

```
GA_ID=              # optional
META_PIXEL_ID=      # optional
```

Domain sementara: `.vercel.app` (custom domain menyusul dari client).
