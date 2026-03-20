import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Calendar } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section className="py-24 bg-background relative" id="contact">
      <div className="container mx-auto px-4">
        
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-classic text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prête à prendre du temps <span className="text-primary italic">pour vous ?</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Réservez votre moment en ligne 24/7 ou appelez-nous directement. Nous nous adaptons à votre emploi du temps.
            </p>
          </div>
        </Reveal>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 flex flex-col lg:flex-row max-w-6xl mx-auto">
          
          {/* Action Side (Left) */}
          <div className="p-8 md:p-12 lg:w-[55%] flex flex-col justify-center bg-accent/20">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Des créneaux sont disponibles cette semaine
              </div>
            </Reveal>

            <div className="space-y-6 mb-10">
              <Reveal delay={200}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 card-hover">
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" /> Réservation Rapide
                  </h4>
                  <p className="text-foreground/70 mb-4 text-sm">Accédez à notre agenda en temps réel et choisissez le créneau qui vous convient le mieux.</p>
                  <Button asChild size="lg" className="w-full rounded-full btn-premium">
                    <Link href="/contact">Voir l&apos;agenda en ligne</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 card-hover">
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" /> Besoin d&apos;un conseil ?
                  </h4>
                  <p className="text-foreground/70 mb-4 text-sm">Nous sommes là pour vous guider vers le soin le plus adapté à vos besoins.</p>
                  <Button asChild variant="outline" size="lg" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <a href={`tel:${siteData.phone.replace(/\s/g, "")}`}>
                      Appeler le {siteData.phone}
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 text-sm font-medium text-foreground/60 bg-white/50 p-4 rounded-xl">
                <ShieldCheck className="h-8 w-8 text-secondary shrink-0" />
                <p>Paiement sécurisé sur place. Annulation gratuite jusqu&apos;à 24h avant votre rendez-vous.</p>
              </div>
            </Reveal>
          </div>

          {/* Info Side (Right) */}
          <div className="p-8 md:p-12 lg:w-[45%] bg-foreground text-background flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <Reveal delay={300} direction="left">
              <h3 className="heading-classic text-3xl font-bold mb-10">Informations Pratiques</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Adresse</h4>
                    <p className="text-background/80 leading-relaxed">{siteData.address}</p>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteData.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-bold hover:underline mt-2 inline-block"
                    >
                      Itinéraire Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horaires d&apos;ouverture</h4>
                    <p className="text-background/80 leading-relaxed whitespace-pre-line">{siteData.hours.replace(", ", "\n")}</p>
                    <p className="text-secondary text-sm font-bold mt-2">{siteData.emergency}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="font-bold text-lg mb-4">Pourquoi nous choisir ?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-background/80 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{siteData.experience} d&apos;expertise reconnue à {siteData.city}</span>
                    </li>
                    <li className="flex items-center gap-3 text-background/80 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Cadre intimiste, calme et climatisé</span>
                    </li>
                    <li className="flex items-center gap-3 text-background/80 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Parking public à 3 min à pied</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}