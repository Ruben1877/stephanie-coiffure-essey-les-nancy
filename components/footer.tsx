import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="heading-classic text-3xl font-bold text-primary block">Stéphanie</span>
              <span className="text-sm uppercase tracking-widest text-secondary font-semibold">Beauté & Bien-être</span>
            </div>
            <p className="text-background/70 mt-4 max-w-sm">
              {siteData.description}
            </p>
            <div className="flex gap-4 mt-2">
              <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="heading-classic text-xl font-semibold mb-6 text-background">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-background/70 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-secondary rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="heading-classic text-xl font-semibold mb-6 text-background">Contact & Accès</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-primary transition-colors">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 mt-2">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteData.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; {currentYear} {siteData.name}. Tous droits réservés.</p>
          <p>Créé avec passion pour votre bien-être.</p>
        </div>
      </div>
    </footer>
  );
}