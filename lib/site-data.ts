import { Sparkles, Flower2, Droplets, Sun, Moon, Leaf, Heart, ShieldCheck, Clock, MapPin, Phone, Mail } from "lucide-react";

export const siteData = {
  name: "Stéphanie Beauté & Bien-être",
  trade: "Institut de beauté",
  city: "Marseille",
  phone: "06 98 76 54 32",
  address: "42 avenue du Prado, 13006 Marseille",
  email: "contact@stephanie-beaute.fr",
  hours: "Lun-Ven 9h-19h, Sam 9h-17h",
  emergency: "Sur rendez-vous uniquement",
  experience: "8 ans",
  tagline: "Votre beauté, notre passion depuis 8 ans",
  description: "Institut de beauté et bien-être spécialisé dans les soins du visage, massages relaxants et épilation. Nous proposons des prestations haut de gamme dans un cadre chaleureux et apaisant au cœur de Marseille. Notre expertise en soins naturels et bio nous distingue depuis 8 ans.",
  serviceArea: "Marseille centre et alentours (15km)",
  
  services: [
    {
      id: "soin-visage-hydratant",
      title: "Soin visage hydratant",
      description: "Nettoyage profond, gommage et masque hydratant pour une peau éclatante et revitalisée. Idéal pour les peaux fatiguées ou déshydratées.",
      price: "À partir de 65 €",
      duration: "60 min",
      icon: "Droplets",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "massage-relaxant",
      title: "Massage relaxant corps complet",
      description: "Massage aux huiles essentielles bio pour une détente absolue et un lâcher-prise total. Dénoue les tensions musculaires et apaise l'esprit.",
      price: "À partir de 80 €",
      duration: "60 min",
      icon: "Flower2",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "epilation-definitive-laser",
      title: "Épilation définitive laser",
      description: "Technologie de pointe pour une épilation durable, efficace et sans douleur. Traitement adapté à tous les types de peau.",
      price: "À partir de 120 €",
      duration: "30-90 min",
      icon: "Sun",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "soin-anti-age-lissant",
      title: "Soin anti-âge lissant",
      description: "Protocole raffermissant aux actifs naturels pour lisser les ridules, repulper la peau et redessiner l'ovale du visage.",
      price: "À partir de 85 €",
      duration: "75 min",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "beaute-du-regard",
      title: "Beauté du regard",
      description: "Rehaussement de cils et restructuration des sourcils pour illuminer votre visage et intensifier votre regard naturellement.",
      price: "À partir de 45 €",
      duration: "45 min",
      icon: "Moon",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gommage-corps-enveloppement",
      title: "Gommage corps & enveloppement",
      description: "Exfoliation douce aux sels marins suivie d'un enveloppement nourrissant pour une peau douce, purifiée et reminéralisée.",
      price: "À partir de 70 €",
      duration: "60 min",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
    }
  ],

  testimonials: [
    {
      name: "Sophie M.",
      city: "Marseille 08",
      rating: 5,
      text: "Un moment de pure détente ! Le soin du visage est exceptionnel, ma peau n'a jamais été aussi lumineuse. Stéphanie est douce et très professionnelle."
    },
    {
      name: "Marie L.",
      city: "Cassis",
      rating: 5,
      text: "Je viens pour l'épilation laser depuis quelques mois et les résultats sont bluffants. L'institut est magnifique et d'une propreté irréprochable."
    },
    {
      name: "Julie T.",
      city: "Marseille 06",
      rating: 5,
      text: "Le massage aux huiles essentielles est un véritable voyage. On déconnecte totalement. Je recommande vivement cet institut pour son ambiance apaisante."
    },
    {
      name: "Claire D.",
      city: "Allauch",
      rating: 5,
      text: "Cliente depuis l'ouverture il y a 8 ans, je n'ai jamais été déçue. Les produits bio utilisés sont de grande qualité et adaptés à ma peau sensible."
    },
    {
      name: "Amélie R.",
      city: "Marseille 01",
      rating: 5,
      text: "J'ai offert un bon cadeau à ma mère pour la fête des mères. Elle est revenue ravie de son soin anti-âge. L'accueil est chaleureux et les conseils pertinents."
    },
    {
      name: "Céline B.",
      city: "Aubagne",
      rating: 5,
      text: "Le rehaussement de cils tient parfaitement bien ! C'est la première fois que je suis aussi satisfaite du résultat. Le cadre est vraiment relaxant."
    }
  ],

  faq: [
    {
      question: "Faut-il prendre rendez-vous à l'avance ?",
      answer: "Oui, nous fonctionnons exclusivement sur rendez-vous afin de vous garantir un moment privilégié et sans attente. Nous vous conseillons de réserver 1 à 2 semaines à l'avance."
    },
    {
      question: "Quels types de produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits naturels et certifiés bio, respectueux de votre peau et de l'environnement. Nos marques partenaires (Absolution, Phyt's) sont sélectionnées pour leur efficacité."
    },
    {
      question: "L'épilation au laser est-elle douloureuse ?",
      answer: "Notre équipement de dernière génération intègre un système de refroidissement qui rend la séance très confortable et quasiment indolore par rapport aux anciennes méthodes."
    },
    {
      question: "Proposez-vous des cartes cadeaux ?",
      answer: "Absolument ! Vous pouvez offrir le soin de votre choix ou un montant libre. Les cartes cadeaux sont valables 6 mois et sont présentées dans un bel écrin."
    },
    {
      question: "Y a-t-il un parking à proximité ?",
      answer: "Oui, le parking public Prado-Perier se trouve à moins de 3 minutes à pied de l'institut. La station de métro Périer est également à quelques pas."
    },
    {
      question: "Comment préparer ma peau avant un soin du visage ?",
      answer: "Venez de préférence démaquillée, mais si ce n'est pas possible, nous procéderons à un démaquillage complet en début de soin. Évitez les gommages abrasifs les 48h précédant votre rendez-vous."
    }
  ],

  blog: [
    {
      id: "preparer-peau-hiver",
      title: "Comment préparer sa peau pour l'hiver : les bons gestes",
      excerpt: "Avec la baisse des températures, notre peau a besoin d'une attention particulière. Découvrez notre routine cocooning pour affronter le froid.",
      date: "15 Octobre 2025",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      content: "L'hiver met notre peau à rude épreuve. Le froid, le vent et le chauffage intérieur altèrent le film hydrolipidique... (Suite du contenu détaillé sur l'hydratation, les sérums, et les masques nourrissants)."
    },
    {
      id: "bienfaits-massage-huiles-essentielles",
      title: "Les 5 bienfaits insoupçonnés du massage aux huiles essentielles",
      excerpt: "Au-delà de la simple détente musculaire, l'aromathérapie alliée au massage offre des bénéfices profonds pour le corps et l'esprit.",
      date: "02 Septembre 2025",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      content: "Le massage aux huiles essentielles est une pratique millénaire. Chaque huile possède des vertus spécifiques : la lavande pour apaiser, l'eucalyptus pour revigorer... (Suite du contenu détaillé)."
    },
    {
      id: "epilation-laser-idees-recues",
      title: "Épilation laser : on démêle le vrai du faux",
      excerpt: "Est-ce douloureux ? Est-ce définitif ? Peut-on le faire en été ? Nous répondons à toutes vos questions sur l'épilation laser.",
      date: "20 Août 2025",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
      content: "L'épilation laser suscite encore de nombreuses interrogations. Faisons le point sur les idées reçues les plus courantes... (Suite du contenu sur les cycles pilaires et la technologie)."
    }
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", alt: "Intérieur de l'institut de beauté" },
    { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800", alt: "Salle de massage relaxante" },
    { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800", alt: "Soin du visage hydratant" },
    { url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800", alt: "Équipement pour épilation laser" },
    { url: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800", alt: "Produits de soin naturels et bio" },
    { url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800", alt: "Détente et bien-être" }
  ],

  navigation: [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/about" },
    { name: "Galerie", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ],

  footerLinks: [
    { name: "Témoignages", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Mentions Légales", path: "/legal" }
  ],

  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};