"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show immediately after scrolling past the hero CTA
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      href="/contact"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-foreground text-background py-3 px-5 rounded-full shadow-2xl transition-all duration-500 border border-white/10 group",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Prendre rendez-vous"
    >
      <span className="font-semibold text-sm hidden sm:block group-hover:pr-2 transition-all">Prendre RDV</span>
      <div className="relative">
        <Calendar className="h-5 w-5 text-primary" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border-2 border-foreground"></span>
        </span>
      </div>
    </Link>
  );
}