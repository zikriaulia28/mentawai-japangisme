"use client";

import { useState } from "react";
import { Anchor, UtensilsCrossed, Ship, Camera, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ITINERARY, type ItineraryPackage } from "@/lib/data";
import type { PackageKey } from "@/lib/pricing";

const ICONS = [Anchor, UtensilsCrossed, Ship, Camera, Sun];

function Tab({
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
        "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-ocean text-white"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200",
      )}
    >
      {children}
    </button>
  );
}

export function ItinerarySection() {
  const [pkg, setPkg] = useState<PackageKey>("3H2M");
  const [dayIdx, setDayIdx] = useState(0);

  const data: ItineraryPackage = ITINERARY.find((p) => p.pkg === pkg)!;

  const selectPkg = (p: PackageKey) => {
    setPkg(p);
    setDayIdx(0);
  };

  return (
    <section id="itinerary" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">
            Itinerary
          </h2>
        </Reveal>
        <Reveal className="mt-8 flex justify-center gap-3">
          <Tab active={pkg === "3H2M"} onClick={() => selectPkg("3H2M")}>
            3H2M
          </Tab>
          <Tab active={pkg === "2H1M"} onClick={() => selectPkg("2H1M")}>
            2H1M
          </Tab>
        </Reveal>

        <Reveal className="mt-4 flex justify-center gap-2">
          {data.days.map((d, i) => (
            <Tab key={d.day} active={dayIdx === i} onClick={() => setDayIdx(i)}>
              {d.day}
            </Tab>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <ol className="relative border-l-2 border-ocean/30 pl-6">
            {data.days[dayIdx].items.map((it, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <li key={it.time} className="relative mb-6 last:mb-0">
                  <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-ocean text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 font-mono text-sm font-bold text-ocean">
                      <Icon className="h-4 w-4" /> {it.time}
                    </span>
                    <span className="text-sm text-slate-700">
                      {it.activity}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
