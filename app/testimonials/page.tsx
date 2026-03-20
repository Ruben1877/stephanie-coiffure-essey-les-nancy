import { siteData } from "@/lib/site-data";
import { Star, CheckCircle } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "Avis & Témoignages Clients",
  description: "Découvrez les avis de nos clientes sur nos soins du visage, massages et épilations à Marseille.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-accent/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Vos <span className="text-primary italic">retours</span>
          </h1>
          <p className="text-lg text-foreground/80 font-medium">
            La satisfaction de nos clientes est notre plus belle récompense. Lisez leurs expériences au sein de notre institut.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/60 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#FFB800]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <CheckCircle className="h-3 w-3" /> Vérifié
                  </div>
                </div>
                <p className="text-foreground/80 mb-8 font-medium leading-relaxed flex-grow">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary heading-classic">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}