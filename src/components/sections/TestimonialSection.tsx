"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: true,
      skipSnaps: false,
      slidesToScroll: 1,
      watchResize: true,
      watchSlides: true,
    },
    [Autoplay({ delay: 5000 })],
  );
  // Removed automatic rating generation
  // const ratings = TESTIMONIALS.map((_, i) => (i % 4 === 1 ? 4 : 5));

  return (
    <section id="testimonials" className="bg-slate-soft py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">
            Testimoni
          </h2>
        </Reveal>
        <Reveal className="mt-8 overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden px-[10%]">
            <div className="flex">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] pr-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] py-2"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                          [
                            "bg-amber-500",
                            "bg-teal-500",
                            "bg-sky-500",
                            "bg-rose-500",
                            "bg-emerald-500",
                          ][i % 5]
                        }`}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{t.name}</p>
                        <p className="text-xs text-slate-500">
                          {t.city} · {t.pkg}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-3 grow text-sm leading-relaxed text-slate-600">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-slate-400">
          Testimoni dari peserta trip sebelumnya.
        </p>
      </div>
    </section>
  );
}
