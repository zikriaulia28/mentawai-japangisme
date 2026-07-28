"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_BG = ["bg-jade", "bg-ocean", "bg-gold"];

export function TestimonialSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000 })]);

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">Testimoni</h2>
        </Reveal>
        <Reveal className="mt-8 overflow-hidden">
          <div ref={emblaRef}>
            <div className="flex gap-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_33%]">
                  <div className="h-full rounded-2xl border border-slate-100 bg-slate-soft p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white ${AVATAR_BG[i % 3]}`}>
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.city} · {t.pkg}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-slate-600">&ldquo;{t.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-slate-400">Testimoni dari peserta trip sebelumnya.</p>
      </div>
    </section>
  );
}
