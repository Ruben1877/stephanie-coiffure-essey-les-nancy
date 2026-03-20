import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { siteData } from "@/lib/site-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: `${siteData.name} | ${siteData.trade} à ${siteData.city}`,
    template: `%s | ${siteData.name}`
  },
  description: siteData.description,
  keywords: ["Institut de beauté", "Soin visage", "Massage", "Épilation laser", "Marseille", "Bien-être", "Bio"],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://stephanie-beaute.fr",
    title: siteData.name,
    description: siteData.description,
    siteName: siteData.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}