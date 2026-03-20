import { siteData } from "@/lib/site-data";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "Galerie Photos",
  description: "Découvrez en images notre institut de beauté à Marseille, nos cabines de soins et nos prestations.",
};

export default function GalleryPage() {
  return (
    <>
      {/* 1. Hero Gallery */}
      <section className="relative pt-32 pb-20 bg-accent/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Notre <span className="text-primary italic">univers</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Plongez dans l&apos;ambiance apaisante de notre institut à travers quelques images.
          </p>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xl text-foreground/80 font-medium italic">
            &quot;Un lieu pensé dans les moindres détails pour éveiller vos sens et vous offrir une véritable parenthèse de sérénité.&quot;
          </p>
        </div>
      </section>

      {/* 3. Masonry/Grid Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {siteData.gallery.map((img, i) => (
              <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group">
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Installations Category Highlight */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="heading-classic text-3xl md:text-4xl font-bold mb-6">Des équipements de pointe</h2>
              <p className="text-foreground/70 text-lg mb-6">
                Pour vous garantir les meilleurs résultats, notamment en matière d&apos;épilation définitive ou de soins anti-âge, nous investissons régulièrement dans des technologies de dernière génération.
              </p>
              <p className="text-foreground/70 text-lg">
                Alliée à notre savoir-faire manuel, la technologie nous permet de décupler l&apos;efficacité de nos protocoles tout en assurant votre sécurité et votre confort absolu.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800" alt="Équipement" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detail Focus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-classic text-3xl md:text-4xl font-bold mb-12">Le sens du détail</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" alt="Détail 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400" alt="Détail 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=400" alt="Détail 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" alt="Détail 4" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaSection />
    </>
  );
}