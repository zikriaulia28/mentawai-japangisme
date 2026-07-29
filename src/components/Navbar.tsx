"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BRAND.logo}
            alt="Japangisme"
            className="h-14 w-auto object-contain rounded-full"
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
        <a
          href="#pricing"
          className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
        >
          Lihat Paket
        </a>
      </nav>
    </header>
  );
}
