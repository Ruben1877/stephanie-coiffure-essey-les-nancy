import { siteData } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "Nos Prestations & Soins",
  description: "Découvrez notre carte de soins : soins du visage, massages relaxants, épilation laser. Des prestations haut de gamme à Marseille.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero Services */}
      <section className="relative pt-32 pb-20 bg-accent/30 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Notre carte des <span className="text-primary italic">soins</span>
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Une sélection de protocoles exclusifs alliant l&apos;efficacité des actifs naturels à l&apos;expertise de nos gestuelles.
          </p>
        </div>
      </section>

      {/* 2. Intro / Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-medium text-foreground mb-6">
            &quot;Chaque peau est unique, chaque soin doit l&apos;être aussi.&quot;
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            Tous nos soins débutent par un diagnostic précis de votre peau. Nous adaptons nos gestuelles, l&apos;intensité de nos massages et le choix de nos produits bio pour répondre exactement à vos besoins du moment. Laissez-vous porter par notre expertise.
          </p>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {siteData.services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm w-max">
                    {service.price}
                  </div>
                  <h3 className="heading-classic text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>Diagnostic personnalisé inclus</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>Produits 100% d&apos;origine naturelle</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>Conseils routine beauté</span>
                    </li>
                  </ul>
                  <Button asChild className="w-max rounded-full">
                    <Link href="/contact">Réserver ce soin</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Highlight Box */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 text-center">
            <h2 className="heading-classic text-3xl font-bold mb-4">Envie d&apos;offrir un moment de détente ?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Découvrez nos cartes cadeaux personnalisables. Valables 6 mois sur l&apos;ensemble de nos prestations et produits en boutique.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/contact">Commander une carte cadeau <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Products Used */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Nos Engagements</h2>
          <h3 className="heading-classic text-4xl font-bold text-foreground mb-12">
            La nature au service de votre beauté
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Image src="https://api.iconify.design/lucide:leaf.svg?color=%23DDA6B2" alt="Bio" width={32} height={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">Cosmétiques Bio</h4>
              <p className="text-foreground/70">Nous utilisons exclusivement des marques certifiées biologiques, sans parabens ni silicones.</p>
            </div>
            <div className="p-6">
              <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Image src="https://api.iconify.design/lucide:shield-check.svg?color=%23DDA6B2" alt="Qualité" width={32} height={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">Efficacité Prouvée</h4>
              <p className="text-foreground/70">Des actifs naturels hautement concentrés pour des résultats visibles dès la première séance.</p>
            </div>
            <div className="p-6">
              <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Image src="https://api.iconify.design/lucide:heart.svg?color=%23DDA6B2" alt="Respect" width={32} height={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">Respect Animal</h4>
              <p className="text-foreground/70">L&apos;intégralité de nos produits partenaires sont cruelty-free et non testés sur les animaux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaSection />
    </>
  );
}