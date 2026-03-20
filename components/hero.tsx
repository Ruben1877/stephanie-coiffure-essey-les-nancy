import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Star, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Background with premium overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920"
          alt="Ambiance relaxante de l'institut de beauté"
          fill
          className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 max-w-2xl pt-10 md:pt-0">
          
          <Reveal delay={100}>
            {/* Trust badge tailored for the anxious user */}
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full glass-panel text-sm font-semibold border-primary/20 shadow-lg">
              <div className="flex items-center gap-1 text-[#FFB800]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-foreground">5.0/5 sur Google</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span className="text-primary flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponibilités cette semaine
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="heading-classic text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Lâchez prise. <br/>
              <span className="text-primary italic">On s&apos;occupe de vous.</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl font-medium">
              Fatiguée ? Teint terne ? Accordez-vous la parenthèse que vous méritez. Soins du visage sur-mesure et massages profonds au cœur de {siteData.city}.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full text-base h-16 px-8 btn-premium shadow-xl w-full sm:w-auto">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Voir les disponibilités
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base h-16 px-8 bg-white/50 hover:bg-white backdrop-blur-md border-border/60 hover:border-primary/50 transition-all w-full sm:w-auto">
                <Link href="/services">Découvrir la carte</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="grid grid-cols-2 gap-4 text-sm text-foreground/80 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Diagnostic peau offert</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <span>Cosmétiques 100% Bio</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        <div className="flex-1 hidden md:flex justify-end">
          <Reveal delay={600} direction="left" className="w-full max-w-md relative">
            {/* Floating review card */}
            <div className="absolute -left-12 top-20 z-20 glass-panel p-4 rounded-2xl animate-float shadow-2xl max-w-[250px]">
              <div className="flex gap-1 text-[#FFB800] mb-2">
                <Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" />
              </div>
              <p className="text-xs font-medium italic text-foreground/90">&quot;Un moment magique. Ma peau revit complètement après le soin !&quot;</p>
              <p className="text-[10px] text-foreground/60 mt-2 font-bold">— Sophie, il y a 2 jours</p>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border-[10px] border-white/40 shadow-2xl backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
                alt="Soin du visage relaxant"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-110"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}