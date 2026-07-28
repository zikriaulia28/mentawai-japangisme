import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TERMS } from "@/lib/data";

export function TermsSection() {
  return (
    <section id="terms" className="bg-slate-soft py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">Syarat & Ketentuan</h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion multiple className="space-y-2">
            {TERMS.map((t, i) => (
              <AccordionItem
                key={i}
                value={`t-${i}`}
                className="rounded-xl border border-slate-200 bg-white px-4"
              >
                <AccordionTrigger className="text-left text-sm font-medium">
                  {i + 1}. {t.split(":")[0]}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">{t}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
