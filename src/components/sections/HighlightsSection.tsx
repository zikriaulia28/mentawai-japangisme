import {
  Snowflake,
  Ship,
  Glasses,
  Waves,
  Camera,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { HIGHLIGHTS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Snowflake,
  Ship,
  Glasses,
  Waves,
  Camera,
  Plane,
  Users,
};

export function HighlightsSection() {
  return (
    <section id="highlights" className="bg-slate-soft py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">
            Kenapa Pilih Trip Mentawai Japangisme?
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-7">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = ICONS[h.icon];
            return (
              <Reveal key={h.label} delay={i * 0.05}>
                <div className="group flex h-full flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <Icon className="h-9 w-9 text-jade transition-colors group-hover:text-ocean" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    {h.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{h.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
