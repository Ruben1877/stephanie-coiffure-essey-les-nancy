import { siteData } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "Le Blog Beauté & Bien-être",
  description: "Découvrez nos conseils beauté, nos astuces bien-être et les actualités de l'institut.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-accent/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="heading-classic text-5xl md:text-6xl font-bold text-foreground mb-6">
            Le <span className="text-primary italic">Journal</span>
          </h1>
          <p className="text-lg text-foreground/80 font-medium">
            Conseils d&apos;expertes, routines beauté et astuces bien-être au naturel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.blog.map((post) => (
              <article key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-foreground/50 font-medium mb-4">
                    <Calendar className="h-4 w-4" /> {post.date}
                  </div>
                  <h2 className="heading-classic text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto">
                    Lire l&apos;article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}