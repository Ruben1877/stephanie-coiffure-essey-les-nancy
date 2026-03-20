import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const previewImages = siteData.gallery.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Notre Univers</h2>
            <h3 className="heading-classic text-4xl font-bold text-foreground">
              Un cadre pensé pour votre détente
            </h3>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
            <Link href="/gallery">Voir toute la galerie &rarr;</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden group ${index === 0 || index === 3 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}