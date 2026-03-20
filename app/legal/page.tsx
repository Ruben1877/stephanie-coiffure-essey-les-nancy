import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et politique de confidentialité de l'institut.",
};

export default function LegalPage() {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="heading-classic text-4xl md:text-5xl font-bold text-foreground mb-12">
          Mentions <span className="text-primary italic">Légales</span>
        </h1>
        
        <div className="space-y-12 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 heading-classic">1. Éditeur du site</h2>
            <p>Le site internet de <strong>{siteData.name}</strong> est édité par :</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Raison sociale : {siteData.name}</li>
              <li>Adresse : {siteData.address}</li>
              <li>Téléphone : {siteData.phone}</li>
              <li>Email : {siteData.email}</li>
              <li>SIRET : 123 456 789 00012 (Exemple)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 heading-classic">2. Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 heading-classic">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 heading-classic">4. Protection des données personnelles (RGPD)</h2>
            <p>
              Les informations recueillies via nos formulaires de contact sont destinées exclusivement à <strong>{siteData.name}</strong> pour le traitement de vos demandes de rendez-vous ou d&apos;informations. Conformément à la loi &quot;Informatique et Libertés&quot;, vous disposez d&apos;un droit d&apos;accès, de modification et de suppression de vos données en nous contactant directement par email.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}