import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function ServicesSection() {
  const previewServices = siteData.services.slice(0, 3);

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4" /> Notre Expertise
            </h2>
            <h3 className="heading-classic text-4xl md:text-5xl font-bold text-foreground mb-6">
              Des résultats visibles, <br/><span className="text-primary italic">une détente absolue.</span>
            </h3>
            <p className="text-foreground/70 text-lg">
              Ne choisissez plus entre l&apos;efficacité d&apos;un soin technique et le bonheur d&apos;un massage relaxant. Nos protocoles fusionnent les deux.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 150} className="h-full">
              <div className="group h-full flex flex-col cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-border/60 card-hover">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 z-10">
                      <Sparkles className="h-3 w-3 text-secondary" /> Le plus demandé
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <h4 className="absolute bottom-6 left-6 right-6 heading-classic text-2xl font-bold text-white z-10">
                    {service.title}
                  </h4>
                </div>
                
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <p className="text-foreground/70 mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm font-medium text-foreground/60">
                    <div className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" /> 60 min
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex flex-col">
                      <span className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1">À partir de</span>
                      <span className="font-bold text-xl text-foreground">{service.price.replace("À partir de ", "")}</span>
                    </div>
                    <Button asChild variant="ghost" className="rounded-full h-12 w-12 p-0 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Link href="/contact" aria-label={`Réserver ${service.title}`}>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 btn-premium bg-white border-border shadow-sm text-foreground hover:text-primary">
              <Link href="/services">Voir la carte complète des soins</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}