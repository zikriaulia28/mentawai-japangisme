import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-slate-800">FAQ</h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion multiple className="space-y-2">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`f-${i}`}
                className="rounded-xl border border-slate-200 bg-slate-soft px-4"
              >
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
