import { siteData } from "@/lib/site-data";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";

export function StatsSection() {
  const stats = [
    { icon: Award, end: 8, suffix: " ans", label: "d'expertise" },
    { icon: Users, end: 1500, suffix: "+", label: "clientes satisfaites" },
    { icon: Heart, end: 100, suffix: "%", label: "produits naturels" },
    { icon: Sparkles, end: 5, suffix: "/5", label: "avis vérifiés" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal key={index} delay={index * 150} direction="up">
                <div className="flex flex-col items-center text-center px-4 group">
                  <Icon className="h-8 w-8 mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                  <Counter 
                    end={stat.end} 
                    suffix={stat.suffix} 
                    className="heading-classic text-4xl md:text-5xl font-bold mb-2" 
                  />
                  <span className="text-sm md:text-base opacity-90 font-medium">{stat.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}