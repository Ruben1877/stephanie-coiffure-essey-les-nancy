"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      isScrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent border-transparent"
    )}>
      {/* Top Reassurance Bar - Crucial for 11 PM searcher */}
      <div className={cn(
        "hidden md:block bg-foreground text-background text-xs font-medium transition-all duration-500 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-6 opacity-90">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Réservation en ligne 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Produits 100% Bio & Naturels
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="h-3.5 w-3.5" />
              {siteData.address}
            </span>
            <a href={`tel:${siteData.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-primary transition-colors font-bold">
              <Phone className="h-3.5 w-3.5" />
              {siteData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={cn(
        "container mx-auto px-4 flex items-center justify-between transition-all duration-500",
        isScrolled ? "h-16" : "h-20 md:h-24"
      )}>
        <Link href="/" className="flex flex-col group z-50">
          <span className="heading-classic text-2xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
            Stéphanie
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold">
            Beauté & Bien-être
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "text-sm font-semibold transition-all hover:text-primary relative py-2",
                pathname === item.path ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
              {pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
          <Button asChild className="ml-2 rounded-full px-6 btn-premium h-11">
            <Link href="/contact" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Prendre RDV
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2.5 text-foreground bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-border/50 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col justify-center px-6",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="flex flex-col gap-6 text-center mb-12">
          {siteData.navigation.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-bold transition-colors heading-classic",
                pathname === item.path ? "text-primary" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-col gap-4">
          <Button asChild className="w-full rounded-full h-14 text-lg btn-premium shadow-lg">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Calendar className="mr-2 h-5 w-5" />
              Réserver en ligne 24/7
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full rounded-full h-14 text-lg bg-white">
            <a href={`tel:${siteData.phone.replace(/\s/g, "")}`} onClick={() => setMobileMenuOpen(false)}>
              <Phone className="mr-2 h-5 w-5" />
              {siteData.phone}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}