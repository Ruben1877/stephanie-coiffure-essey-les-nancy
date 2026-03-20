import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";
import { FaqSection } from "@/components/faq-section";

export const metadata = {
  title: "Contact & Accès",
  description: "Prenez rendez-vous dans notre institut de beauté à Marseille. Horaires, adresse et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero Contact */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contactez-<span className="text-primary italic">nous</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Une question ? Un conseil ? Envie de prendre rendez-vous ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* 2. Info Cards */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-8 rounded-2xl border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Par téléphone</h3>
              <p className="text-foreground/70 mb-4 text-sm">Pour une prise de RDV rapide ou une urgence.</p>
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="text-lg font-semibold hover:text-primary transition-colors">
                {siteData.phone}
              </a>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Notre adresse</h3>
              <p className="text-foreground/70 mb-4 text-sm">Venez nous rendre visite à l&apos;institut.</p>
              <address className="not-italic text-lg font-medium">
                {siteData.address}
              </address>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Horaires d&apos;ouverture</h3>
              <p className="text-foreground/70 mb-4 text-sm">Sur rendez-vous uniquement.</p>
              <p className="text-lg font-medium whitespace-pre-line">
                {siteData.hours.replace(", ", "\n")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form & Specific Info Split */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form */}
            <div className="lg:w-1/2 bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border/50">
              <h2 className="heading-classic text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                    <input type="text" id="firstname" className="w-full p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                    <input type="text" id="lastname" className="w-full p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Votre nom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                  <select id="subject" className="w-full p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Prise de rendez-vous</option>
                    <option>Information sur un soin</option>
                    <option>Carte cadeau</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <Button type="button" size="lg" className="w-full rounded-xl text-base h-14">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Access details */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="heading-classic text-3xl font-bold mb-8">Informations pratiques</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 p-3 bg-secondary/20 rounded-full text-secondary shrink-0 h-max">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Stationnement</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Parking public Prado-Perier situé à 3 minutes à pied de l&apos;institut. Des places de stationnement payantes sont également disponibles dans les rues adjacentes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-3 bg-secondary/20 rounded-full text-secondary shrink-0 h-max">
                    <Train className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Transports en commun</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Métro : Ligne 2, arrêt Périer (à 100 mètres).<br/>
                      Bus : Lignes 19, 21, 41, 73, arrêt Prado Périer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-3 bg-secondary/20 rounded-full text-secondary shrink-0 h-max">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Retards & Annulations</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      En cas d&apos;empêchement, merci de nous prévenir au moins 24h à l&apos;avance. Tout retard de plus de 15 minutes pourra entraîner l&apos;annulation ou l&apos;écourtement de votre soin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Map Section Placeholder */}
      <section className="h-[400px] w-full bg-muted relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(siteData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/90 backdrop-blur px-8 py-4 rounded-full shadow-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Ouvrir dans Google Maps
            </a>
         </div>
      </section>

      {/* 5. FAQ specific to appointments */}
      <FaqSection />

      {/* 6. CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-classic text-3xl md:text-4xl font-bold mb-6">Prête à réserver ?</h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
            N&apos;attendez plus pour vous accorder ce moment de détente que vous méritez.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8">
            <a href={`tel:${siteData.phone.replace(/\s/g, '')}`}>
              <Phone className="mr-2 h-5 w-5" />
              Appeler le {siteData.phone}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}