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

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((g, i) => (
            <motion.button
              key={g.src}
              layout
              onClick={() => setIndex(i)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative block w-full overflow-hidden rounded-xl shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.spot} loading="lazy" className="w-full transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-black/50 px-3 py-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
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
