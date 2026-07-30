"use client";

import { useMemo, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  calcPricing,
  buildWaUrl,
  formatIDR,
  type Category,
  type PackageKey,
  type StartPoint,
} from "@/lib/pricing";

const ORG_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const;

const TIERS: { pkg: PackageKey; org: number }[] = [
  { pkg: "2H1M", org: 2 },
  { pkg: "2H1M", org: 3 },
  { pkg: "2H1M", org: 4 },
  { pkg: "2H1M", org: 5 },
  { pkg: "2H1M", org: 6 },
  { pkg: "2H1M", org: 7 },
  { pkg: "2H1M", org: 8 },
  { pkg: "2H1M", org: 9 },
  { pkg: "2H1M", org: 10 },
  { pkg: "3H2M", org: 2 },
  { pkg: "3H2M", org: 3 },
  { pkg: "3H2M", org: 4 },
  { pkg: "3H2M", org: 5 },
  { pkg: "3H2M", org: 6 },
  { pkg: "3H2M", org: 7 },
  { pkg: "3H2M", org: 8 },
  { pkg: "3H2M", org: 9 },
  { pkg: "3H2M", org: 10 },
  { pkg: "3H2M", org: 11 },
  { pkg: "3H2M", org: 12 },
  { pkg: "3H2M", org: 13 },
  { pkg: "3H2M", org: 14 },
  { pkg: "3H2M", org: 15 },
];

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-gold text-gold-foreground"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200",
      )}
    >
      {children}
    </button>
  );
}

export function PricingSection() {
  const [pkg, setPkg] = useState<PackageKey>("3H2M");
  const [category, setCategory] = useState<Category>("WNI");
  const [org, setOrg] = useState<number>(2);
  const [start, setStart] = useState<StartPoint>("Tuapejat");
  const [drone, setDrone] = useState(false);

  const result = useMemo(
    () => calcPricing({ pkg, category, org, start, drone }),
    [pkg, category, org, start, drone],
  );
  const waUrl = useMemo(
    () => buildWaUrl({ pkg, category, org, start, drone }),
    [pkg, category, org, start, drone],
  );

  return (
    <section id="pricing" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">
            Paket & Harga
          </h2>
          <p className="mt-2 text-center text-slate-500">
            Transparan, hitung sendiri, langsung chat WA.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex gap-2">
            <Pill active={pkg === "3H2M"} onClick={() => setPkg("3H2M")}>
              3H2M
            </Pill>

            <Pill active={pkg === "2H1M"} onClick={() => setPkg("2H1M")}>
              2H1M
            </Pill>
          </div>
          <div className="flex gap-2">
            <Pill
              active={category === "WNI"}
              onClick={() => setCategory("WNI")}
            >
              WNI
            </Pill>
            <Pill
              active={category === "WNA"}
              onClick={() => setCategory("WNA")}
            >
              WNA
            </Pill>
          </div>
        </Reveal>

        <Reveal className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-slate-500">Jumlah org:</span>
          {ORG_OPTIONS.map((o) => (
            <Pill key={o} active={org === o} onClick={() => setOrg(o)}>
              {o}
            </Pill>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-soft p-6 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">
                  {pkg} · {category} · {org} org
                  {org >= 7 ? " (open trip)" : ""}
                </p>
                <p className="mt-1 font-heading text-4xl font-extrabold text-ocean">
                  {formatIDR(result.perorg)}
                  <span className="text-base font-medium text-slate-500">
                    {" "}
                    /org
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">
                  Total estimasi ({org} org)
                </p>
                <p className="font-heading text-3xl font-bold text-gold">
                  {formatIDR(result.total)}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Start point
                </p>
                <div className="flex flex-wrap gap-2">
                  {(["Tuapejat", "Padang", "Pekanbaru"] as StartPoint[]).map(
                    (s) => (
                      <Pill
                        key={s}
                        active={start === s}
                        onClick={() => setStart(s)}
                      >
                        {s === "Tuapejat" ? "Tuapejat (Gratis)" : s}
                      </Pill>
                    ),
                  )}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Add-on
                </p>
                <button
                  onClick={() => setDrone(!drone)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    drone
                      ? "bg-gold text-gold-foreground"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                  )}
                >
                  <Check
                    className={cn(
                      "h-4 w-4",
                      drone ? "opacity-100" : "opacity-0",
                    )}
                  />
                  Drone {category === "WNI" ? "+1jt" : "+1.5jt"}/battery
                </button>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 w-full rounded-full",
              )}
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
                  <th className="px-4 py-3 font-semibold">Org</th>
                  <th className="px-4 py-3 font-semibold">WNI /org</th>
                  <th className="px-4 py-3 font-semibold">WNA /org</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TIERS.filter((t) => t.pkg === pkg).map((t) => (
                  <tr key={t.org} className={cn(t.org === org && "bg-gold/10")}>
                    <td className="px-4 py-3">
                      {t.org} org{t.org >= 7 ? " (open trip)" : ""}
                    </td>
                    <td className="px-4 py-3">
                      {formatIDR(
                        calcPricing({
                          pkg,
                          category: "WNI",
                          org: t.org,
                          start: "Tuapejat",
                          drone: false,
                        }).perorg,
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {formatIDR(
                        calcPricing({
                          pkg,
                          category: "WNA",
                          org: t.org,
                          start: "Tuapejat",
                          drone: false,
                        }).perorg,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            *Harga per org belum include add-on start point & drone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
