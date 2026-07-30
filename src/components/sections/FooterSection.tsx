import Image from "next/image";
import { Music2 } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="bg-ocean text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Image
            src={BRAND.logo}
            alt="Japangisme"
            height={56}
            width={56}
            className="h-14 w-auto rounded-full"
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
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@japangisme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <title>tiktok</title>
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
              </svg>
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
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        />
      </svg>
    </a>
  );
}
