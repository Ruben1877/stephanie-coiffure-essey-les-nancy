import { siteData } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "À propos",
  description: "Découvrez l'histoire de notre institut de beauté à Marseille, nos valeurs et notre passion pour votre bien-être depuis 8 ans.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero About */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
              Notre <span className="text-primary italic">histoire</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Plus qu&apos;un institut, un véritable lieu de vie dédié à la révélation de votre beauté naturelle.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Origines</h2>
              <h3 className="heading-classic text-3xl md:text-4xl font-bold mb-6">
                Une passion née il y a {siteData.experience}
              </h3>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                L&apos;aventure a commencé avec une conviction simple : la beauté véritable naît de l&apos;harmonie entre le corps et l&apos;esprit. Après plusieurs années d&apos;expérience dans des spas de prestige, nous avons voulu créer un lieu qui nous ressemble à {siteData.city}.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Un lieu où le temps s&apos;arrête, où chaque cliente est écoutée, comprise et choyée. Aujourd&apos;hui, notre institut est fier d&apos;accompagner au quotidien des femmes et des hommes vers un mieux-être durable, en utilisant les trésors que la nature nous offre.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                  alt="L'intérieur de l'institut"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Atmosphere */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" alt="Détente" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" alt="Soin" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600" alt="Produits" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" alt="Visage" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">L&apos;Atmosphère</h2>
              <h3 className="heading-classic text-3xl md:text-4xl font-bold mb-6">
                Un cocon chaleureux
              </h3>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                Dès que vous franchissez le seuil de notre porte, les bruits de la ville s&apos;effacent. Lumières tamisées, senteurs délicates d&apos;huiles essentielles, musique douce... Tout a été pensé pour favoriser votre déconnexion totale.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Nos cabines de soins spacieuses et climatisées vous offrent tout le confort nécessaire pour profiter pleinement de votre moment d&apos;évasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-classic text-4xl font-bold text-foreground">Nos Valeurs Fondamentales</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "L'Écoute", desc: "Prendre le temps de vous comprendre est la première étape de tout soin réussi. Votre satisfaction est notre priorité." },
              { title: "L'Exigence", desc: "Nous nous formons continuellement aux nouvelles techniques pour vous offrir des prestations à la pointe de l'innovation." },
              { title: "L'Éthique", desc: "Le choix de partenaires engagés et de produits respectueux de votre santé et de notre environnement." }
            ].map((val, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border/50 text-center shadow-sm">
                <div className="h-12 w-12 mx-auto bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                  {i + 1}
                </div>
                <h4 className="font-bold text-xl mb-4">{val.title}</h4>
                <p className="text-foreground/70">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats/Experience */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-classic text-3xl font-bold mb-12">L&apos;institut en quelques chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">8</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Années d&apos;expérience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Cabines de soin</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Protocoles exclusifs</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Passion & Dévouement</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaSection />
    </>
  );
}