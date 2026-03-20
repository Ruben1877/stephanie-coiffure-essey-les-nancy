import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GallerySection } from "@/components/gallery-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { siteData } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": siteData.name,
    "image": siteData.gallery[0].url,
    "@id": "https://stephanie-beaute.fr",
    "url": "https://stephanie-beaute.fr",
    "telephone": siteData.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 avenue du Prado",
      "addressLocality": "Marseille",
      "postalCode": "13006",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2841,
      "longitude": 5.3857
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <StatsSection />

      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <Reveal direction="right">
                <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl hover-lift image-zoom-container">
                  <Image
                    src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800"
                    alt="Produits de beauté naturels"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover image-zoom"
                  />
                </div>
              </Reveal>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full -z-10 blur-3xl animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full -z-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="lg:w-1/2">
              <Reveal>
                <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">L&apos;Institut</h2>
                <h3 className="heading-classic text-4xl font-bold text-foreground mb-6">
                  Une approche holistique de la beauté
                </h3>
              </Reveal>
              
              <Reveal delay={100}>
                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                  Depuis plus de {siteData.experience}, notre institut vous accueille dans une bulle de douceur au cœur de {siteData.city}. Nous croyons fermement que la beauté extérieure est le reflet d&apos;un bien-être intérieur profond.
                </p>
                <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                  C&apos;est pourquoi nous avons sélectionné pour vous des produits naturels, bio et respectueux de votre peau, associés à des protocoles de soins exclusifs.
                </p>
              </Reveal>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Diagnostic de peau personnalisé",
                  "Produits 100% naturels et certifiés bio",
                  "Cadre intime, chaleureux et apaisant",
                  "Expertise reconnue en soins anti-âge"
                ].map((item, i) => (
                  <Reveal key={i} delay={200 + (i * 100)}>
                    <li className="flex items-center gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={600}>
                <Button asChild size="lg" className="rounded-full hover-lift btn-shine">
                  <Link href="/about">Découvrir notre histoire</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="py-24 bg-accent/30 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Notre Méthode</h2>
              <h3 className="heading-classic text-4xl font-bold text-foreground">
                Votre parcours beauté
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border z-0">
              <div className="h-full bg-primary/30 w-full animate-pulse"></div>
            </div>
            
            {[
              { step: "01", title: "Consultation", desc: "Un échange privilégié pour comprendre vos besoins et analyser votre type de peau." },
              { step: "02", title: "Soin sur-mesure", desc: "Application de notre protocole exclusif avec des produits adaptés à votre profil." },
              { step: "03", title: "Suivi & Conseils", desc: "Recommandations personnalisées pour prolonger les bienfaits du soin à la maison." }
            ].map((item, index) => (
              <Reveal key={index} delay={index * 200} direction="up">
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="h-24 w-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <span className="heading-classic text-3xl font-bold text-primary group-hover:text-white transition-colors">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}