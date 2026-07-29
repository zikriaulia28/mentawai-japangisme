"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BRAND, HERO } from "@/lib/data";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {HERO.slides.map((src) => (
            <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl font-extrabold drop-shadow-lg sm:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base drop-shadow sm:text-xl">
              {HERO.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/90 sm:text-sm">
          {HERO.trust.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/15 px-3 py-1 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BRAND.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-8 py-6 text-base font-semibold",
            )}
          >
            Pesan via WhatsApp
          </a>
          <a
            href="#pricing"
            className="rounded-full border-2 border-white px-8 py-2.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
          >
            Lihat Paket
          </a>
        </div>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO.slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === selected ? "w-6 bg-gold" : "w-2 bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}
