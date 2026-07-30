import { CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { INCLUDED, EXCLUDED, DRONE_CALLOUT } from "@/lib/data";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">Fasilitas</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-emerald-700">
              <CheckCircle2 className="h-6 w-6" /> Termasuk
            </h3>
            <ul className="mt-4 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-red-700">
              <XCircle className="h-6 w-6" /> Tidak Termasuk
            </h3>
            <ul className="mt-4 space-y-3">
              {EXCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-6">
          <div className="rounded-xl border border-gold/40 bg-gold/10 p-5 text-center text-sm font-medium text-amber-900">
            {DRONE_CALLOUT}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
