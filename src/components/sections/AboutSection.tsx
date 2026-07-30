// src/components/sections/AboutSection.tsx
"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BRAND, CREW } from "@/lib/data";



export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">
            Tentang Kami
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            {BRAND.name} adalah penyedia jasa wisata lokal Mentawai yang berkomitmen
            menghadirkan pengalaman wisata yang aman, nyaman, dan berkesan. Kami
            dikelola oleh tim lokal Mentawai yang memahami destinasi wisata, budaya,
            dan kondisi alam setempat, 100% local Mentawai tim.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREW.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="128px"
                    priority={index === 0}
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-slate-800">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500">{member.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}