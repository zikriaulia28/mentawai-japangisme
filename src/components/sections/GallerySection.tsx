"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { GALLERY, GALLERY_SPOTS } from "@/lib/data";

export function GallerySection() {
  const [filter, setFilter] = useState("Semua");
  const [index, setIndex] = useState(-1);

  const images = useMemo(
    () => (filter === "Semua" ? GALLERY : GALLERY.filter((g) => g.spot === filter)),
    [filter]
  );
  const slides = images.map((g) => ({ src: g.src }));

  return (
    <section id="gallery" className="bg-slate-soft py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">Galeri</h2>
        </Reveal>
        <Reveal className="mt-6 flex flex-wrap justify-center gap-2">
          {GALLERY_SPOTS.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                filter === s ? "bg-gold text-gold-foreground" : "bg-white text-slate-600 hover:bg-slate-200"
              )}
            >
              {s}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 flex gap-3 overflow-x-auto px-4 pb-3 -mx-4 snap-x snap-mandatory md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((g, i) => (
            <motion.button
              key={g.src}
              layout
              onClick={() => setIndex(i)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative block aspect-[4/3] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.spot} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10 text-left text-xs font-medium text-white">
                {g.spot}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 hidden gap-4 md:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid md:block">
          {images.map((g, i) => (
            <motion.button
              key={g.src}
              layout
              onClick={() => setIndex(i)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.spot} loading={i < 4 ? "eager" : "lazy"} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {g.spot}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index >= 0 && (
          <Lightbox
            index={index}
            slides={slides}
            open={index >= 0}
            close={() => setIndex(-1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
