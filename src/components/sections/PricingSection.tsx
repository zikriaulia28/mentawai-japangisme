"use client";

import { useMemo, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { calcPricing, buildWaUrl, formatIDR, type Category, type PackageKey, type StartPoint } from "@/lib/pricing";

const PAX_OPTIONS = [2, 3, 5, 7] as const;
const PAX_LABEL: Record<number, string> = { 2: "2", 3: "3-4", 5: "5-6", 7: "7-10" };
const TIER_LABEL: Record<number, string> = { 2: "2 pax", 3: "3-4 pax", 5: "5-6 pax", 7: "7-10 pax (open trip)" };

const TIERS: { pkg: PackageKey; pax: 2 | 3 | 5 | 7 }[] = [
  { pkg: "2H1M", pax: 2 },
  { pkg: "2H1M", pax: 3 },
  { pkg: "2H1M", pax: 5 },
  { pkg: "2H1M", pax: 7 },
  { pkg: "3H2M", pax: 2 },
  { pkg: "3H2M", pax: 3 },
  { pkg: "3H2M", pax: 5 },
  { pkg: "3H2M", pax: 7 },
];

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
        active ? "bg-gold text-gold-foreground" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      )}
    >
      {children}
    </button>
  );
}

export function PricingSection() {
  const [pkg, setPkg] = useState<PackageKey>("2H1M");
  const [category, setCategory] = useState<Category>("WNI");
  const [pax, setPax] = useState<number>(2);
  const [start, setStart] = useState<StartPoint>("Tuapejat");
  const [drone, setDrone] = useState(false);

  const result = useMemo(
    () => calcPricing({ pkg, category, pax, start, drone }),
    [pkg, category, pax, start, drone]
  );
  const waUrl = useMemo(() => buildWaUrl({ pkg, category, pax, start, drone }), [pkg, category, pax, start, drone]);

  return (
    <section id="pricing" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">Paket & Harga</h2>
          <p className="mt-2 text-center text-slate-500">Transparan, hitung sendiri, langsung chat WA.</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex gap-2">
            <Pill active={pkg === "2H1M"} onClick={() => setPkg("2H1M")}>2H1M</Pill>
            <Pill active={pkg === "3H2M"} onClick={() => setPkg("3H2M")}>3H2M</Pill>
          </div>
          <div className="flex gap-2">
            <Pill active={category === "WNI"} onClick={() => setCategory("WNI")}>WNI</Pill>
            <Pill active={category === "WNA"} onClick={() => setCategory("WNA")}>WNA</Pill>
          </div>
        </Reveal>

        <Reveal className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-slate-500">Jumlah pax:</span>
          {PAX_OPTIONS.map((p) => (
            <Pill key={p} active={pax === p} onClick={() => setPax(p)}>
              {PAX_LABEL[p]}
            </Pill>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-soft p-6 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">
                  {pkg} · {category} · {TIER_LABEL[pax]}
                </p>
                <p className="mt-1 font-heading text-4xl font-extrabold text-ocean">
                  {formatIDR(result.perPax)}
                  <span className="text-base font-medium text-slate-500"> /pax</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Total estimasi ({pax} pax)</p>
                <p className="font-heading text-3xl font-bold text-gold">{formatIDR(result.total)}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Start point</p>
                <div className="flex flex-wrap gap-2">
                  {(["Tuapejat", "Padang", "Pekanbaru"] as StartPoint[]).map((s) => (
                    <Pill key={s} active={start === s} onClick={() => setStart(s)}>
                      {s === "Tuapejat" ? "Tuapejat (Gratis)" : s}
                    </Pill>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Add-on</p>
                <button
                  onClick={() => setDrone(!drone)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    drone ? "bg-gold text-gold-foreground" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  <Check className={cn("h-4 w-4", drone ? "opacity-100" : "opacity-0")} />
                  Drone {category === "WNI" ? "+1jt" : "+1.5jt"}/pax
                </button>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-6 w-full rounded-full")}
            >
              <MessageCircle className="mr-2" /> Pesan via WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tier</th>
                  <th className="px-4 py-3 font-semibold">WNI /pax</th>
                  <th className="px-4 py-3 font-semibold">WNA /pax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TIERS.filter((t) => t.pkg === pkg).map((t) => (
                  <tr key={t.pax} className={cn(t.pax === result.tier && "bg-gold/10")}>
                    <td className="px-4 py-3">{TIER_LABEL[t.pax]}</td>
                    <td className="px-4 py-3">{formatIDR(calcPricing({ pkg, category: "WNI", pax: t.pax, start: "Tuapejat", drone: false }).perPax)}</td>
                    <td className="px-4 py-3">{formatIDR(calcPricing({ pkg, category: "WNA", pax: t.pax, start: "Tuapejat", drone: false }).perPax)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-400">*Harga per pax belum include add-on start point & drone.</p>
        </Reveal>
      </div>
    </section>
  );
}
