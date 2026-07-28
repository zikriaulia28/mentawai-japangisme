import { Music2, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="bg-ocean text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logo}
            alt="Japangisme"
            className="h-14 w-auto bg-white/90 p-1"
          />
          <p className="mt-3 text-sm text-white/80">
            Open trip Mentawai full-service dari Tuapejat.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Navigasi</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={BRAND.waUrl} className="hover:text-gold">
                WA {BRAND.phone}
              </a>
            </li>
            <li>IG @{BRAND.ig}</li>
            <li>TikTok {BRAND.tiktok}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Sosial Media</h4>
          <div className="mt-3 flex gap-3">
            <a
              href={`https://instagram.com/${BRAND.ig}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.95c-3.13 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17C2.52 9.5 2.51 9.87 2.51 13c0 3.13.01 3.5.07 4.74.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.61.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.61.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.7 3.7 0 0 0-.88-1.35 3.7 3.7 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.13 15.13 4.11 12 4.11zm0 3.34a4.55 4.55 0 1 1 0 9.1 4.55 4.55 0 0 1 0-9.1zm0 1.95a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm4.83-2.02a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@japangisme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <Music2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © 2026 Japangisme Mentawai Tour Guide
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return (
    <a
      href={BRAND.waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8 animate-pulse" />
    </a>
  );
}
