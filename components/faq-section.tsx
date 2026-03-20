import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteData } from "@/lib/site-data";

export function FaqSection() {
  // Show only first 4 FAQs on homepage preview
  const previewFaqs = siteData.faq.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Questions Fréquentes</h2>
          <h3 className="heading-classic text-4xl font-bold text-foreground">
            Tout ce que vous devez savoir
          </h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {previewFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50 py-2">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}