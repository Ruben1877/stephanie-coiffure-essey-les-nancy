import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <Reveal>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
            <HeartHandshake className="h-4 w-4" />
            Satisfaction 100% garantie
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="heading-classic text-4xl md:text-6xl font-bold mb-6">
            Prête à révéler votre éclat ?
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
            Accordez-vous une parenthèse de bien-être absolu. Nos expertes vous attendent pour un diagnostic personnalisé et un moment hors du temps.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base btn-shine hover-lift shadow-xl w-full sm:w-auto">
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift transition-all w-full sm:w-auto">
              <Link href="/services">Explorer nos soins</Link>
            </Button>
          </div>
        </Reveal>
        
        <Reveal delay={400}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-80">
            <ShieldCheck className="h-4 w-4" />
            <span>Paiement sécurisé sur place • Annulation gratuite jusqu&apos;à 24h</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}