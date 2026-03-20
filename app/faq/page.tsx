import { siteData } from "@/lib/site-data";
import { CtaSection } from "@/components/cta-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Foire Aux Questions (FAQ)",
  description: "Toutes les réponses à vos questions concernant nos soins, nos produits bio et la prise de rendez-vous.",
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Questions <span className="text-primary italic">Fréquentes</span>
          </h1>
          <p className="text-lg text-foreground/80 font-medium">
            Vous avez une question avant de réserver votre soin ? Trouvez toutes les informations pratiques ci-dessous.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {siteData.faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border/60 rounded-2xl px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}