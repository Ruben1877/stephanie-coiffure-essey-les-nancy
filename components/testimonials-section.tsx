import { Star, CheckCircle } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-accent/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center gap-1 text-[#FFB800] mb-4">
              <Star className="h-6 w-6 fill-current" /><Star className="h-6 w-6 fill-current" /><Star className="h-6 w-6 fill-current" /><Star className="h-6 w-6 fill-current" /><Star className="h-6 w-6 fill-current" />
            </div>
            <h2 className="heading-classic text-4xl font-bold text-foreground mb-4">
              Elles nous font confiance
            </h2>
            <p className="text-foreground/70 text-lg">
              Rejoignez plus de 1500 clientes qui ont fait de notre institut leur secret de beauté à {siteData.city}.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 150} direction="up">
              <div className="bg-white p-8 rounded-[2rem] shadow-md border border-border/40 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}