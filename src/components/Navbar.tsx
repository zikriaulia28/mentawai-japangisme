"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid || isOpen
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-10 md:h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logo}
            alt="Japangisme"
            className="h-8 md:h-10 w-auto object-contain rounded-full"
          />
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-slate-700 hover:text-gold"
                  : "text-white hover:text-gold",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden sm:inline-flex rounded-full",
            )}
          >
            Lihat Paket
          </a>
          <button
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            className={cn(
              "inline-flex items-center justify-center size-10 rounded-md md:hidden transition-colors",
              solid || isOpen ? "text-slate-700" : "text-white",
            )}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur">
          <nav className="flex flex-col gap-2 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-2 text-base font-medium text-slate-700 hover:text-gold"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-2 w-full rounded-full text-center",
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#pricing");
              }}
            >
              Lihat Paket
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
