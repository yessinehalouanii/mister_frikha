// src/lib/i18n.ts
export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      about: "About",
      equipment: "Equipment",
      products: "Products",
      clients: "Clients",
      why: "Why",
      contact: "Contact",
      cta: "Start Cooperation",
      brand: "Mechanical Industrial Company",
    },
    hero: {
      badge: "SIM • Industrial Manufacturing",
      title1: "Design & Manufacturing of Plastic Injection Molds",
      title2: "From idea to final part",
      desc:
        "We support clients with product development, mold making, injection molding, and reliable industrial production — built for precision, quality, and on-time delivery.",
      contactCta: "Contact Us",
      trust1: "Tooling & Mold Fabrication",
      trust2: "Plastic Injection Production",
      trust3: "Quality Control & Delivery",
      cardTitle: "Mechanical Industrial Company",
      cardSub: "Quality • Precision • Delivery",
      yearsLabel: "Years",
      prodLabel: "Production",
      prodValue: "high",
    },
    about: {
      badge: "About SIM",
      title: "Industrial Molds & Plastic Injection Expertise",
      desc:
        "We design and manufacture precision molds and plastic parts with strong focus on quality, cost control, and on-time delivery.",
      b1: "Decades of mold design expertise",
      b2: "In-house tooling & fabrication",
    },
    equipment: {
      badge: "Equipment & Machinery",
      title: "Modern Capacity for Tooling & Production",
      desc:
        "From mold fabrication to injection production and quality control — everything is organized for precision, speed, and reliability.",
      items: {
        cnc1_name: "CNC Machine",
        cnc1_sub: "High precision / stable cycles",
        cnc2_name: "CNC Machine (LG-800)",
        cnc2_sub: "Repeatable inspections",
      },
    },
    products: {
      title: "Products",
      mold: "Mold",
      product: "Product",
      items: {
        p1: "Unscrewing Mold",
        p2: "Molds with Hydraulic or Pneumatic Cylinder",
        p3: "All types of blow molds : PET / PP / HDPE",
        p4: "Other injection mold with slides",
      },
    },
    clients: {
      badge: "Our Clients",
      title: "Trusted by Industrial Partners",
      desc:
        "We work closely with manufacturers, OEMs, and brands who require precision molds, reliable injection production, and consistent quality.",
      logos: {
        c1: "Automotive Partner",
        c2: "Industrial Supplier",
        c3: "Consumer Goods Brand",
        c4: "OEM Manufacturer",
        c5: "Export Partner",
        c6: "Local Industry",
      },
    },
    why: {
      title: "Why Choose Us",
      desc: "Build trust quickly with short, strong points.",
      q1_t: "Quality First",
      q1_d: "Repeatable process with inspections.",
      q2_t: "On-Time Delivery",
      q2_d: "Clear planning + reliable production.",
      q3_t: "Full Support",
      q3_d: "From design to mold and mass production.",
    },
    contact: {
      title: "Contact",
      desc: "Send a message or find us on the map.",
      subtitle: "We're here to help you succeed",
      location: "Location",
      phone: "Phone",
      name: "Your name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      ok: "Message sent successfully!",
      fail: "Failed to send message. Please try again.",
      net: "Network error. Try again.",
      address: "Gremda Km 10, Sfax, Tunisia",
    },
    footer: {
      rights: "© {year} Mechanical Industrial Company. All rights reserved.",
      contact: "Contact",
      catalog: "Catalog",
    },
  },

  fr: {
    nav: {
      about: "À propos",
      equipment: "Équipements",
      products: "Produits",
      clients: "Clients",
      why: "Pourquoi",
      contact: "Contact",
      cta: "Démarrer une coopération",
      brand: "Société industrielle mécanique",
    },
    hero: {
      badge: "SIM • Industrie",
      title1: "Conception, Moules & Injection Plastique",
      title2: "De l’idée à la pièce finale",
      desc:
        "Nous accompagnons nos clients : développement produit, fabrication de moules, injection plastique et production industrielle fiable — précision, qualité et respect des délais.",
      contactCta: "Nous contacter",
      trust1: "Outillage & Fabrication de moules",
      trust2: "Production par injection plastique",
      trust3: "Contrôle qualité & Livraison",
      cardTitle: "Société industrielle mécanique",
      cardSub: "Qualité • Précision • Délais",
      yearsLabel: "Ans",
      prodLabel: "Production",
      prodValue: "élevée",
    },
    about: {
      badge: "À propos de SIM",
      title: "Expertise en moules industriels & injection plastique",
      desc:
        "Nous concevons et fabriquons des moules de précision et des pièces plastiques avec un fort focus sur la qualité, la maîtrise des coûts et la livraison à temps.",
      b1: "Des décennies d’expertise en conception de moules",
      b2: "Outillage & fabrication en interne",
    },
    equipment: {
      badge: "Équipements & Machines",
      title: "Capacité moderne pour l’outillage & la production",
      desc:
        "De la fabrication des moules à la production par injection et au contrôle qualité — tout est organisé pour la précision, la rapidité et la fiabilité.",
      items: {
        cnc1_name: "Machine CNC",
        cnc1_sub: "Haute précision / cycles stables",
        cnc2_name: "Machine CNC (LG-800)",
        cnc2_sub: "Contrôles répétables",
      },
    },
    products: {
      title: "Produits",
      desc: "Moule → Produit (côte à côte).",
      mold: "Moule",
      product: "Produit",
      items: {
        p1: "Moule à dévissage",
        p2: "Moules avec vérin hydraulique ou pneumatique",
        p3: "Tous types de moules de soufflage : PET / PP / HDPE",
        p4: "Autres moules d’injection avec coulisseaux",
      },
    },
    clients: {
      badge: "Nos Clients",
      title: "La confiance de partenaires industriels",
      desc:
        "Nous travaillons avec des fabricants, OEM et marques qui exigent des moules précis, une production par injection fiable et une qualité constante.",
      logos: {
        c1: "Partenaire automobile",
        c2: "Fournisseur industriel",
        c3: "Marque biens de consommation",
        c4: "Fabricant OEM",
        c5: "Partenaire export",
        c6: "Industrie locale",
      },
    },
    why: {
      title: "Pourquoi nous choisir",
      desc: "Gagnez la confiance rapidement avec des points courts et forts.",
      q1_t: "Qualité d’abord",
      q1_d: "Processus répétable avec inspections.",
      q2_t: "Délais respectés",
      q2_d: "Planification claire + production fiable.",
      q3_t: "Accompagnement complet",
      q3_d: "De la conception au moule et à la série.",
    },
    contact: {
      title: "Contact",
      desc: "Envoyez un message ou trouvez-nous sur la carte.",
      subtitle: "Nous sommes là pour vous aider à réussir",
      location: "Emplacement",
      phone: "Téléphone",
      name: "Votre nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi...",
      ok: "Message envoyé avec succès !",
      fail: "Échec de l’envoi. Veuillez réessayer.",
      net: "Erreur réseau. Réessayez.",
      address: "Gremda Km 10, Sfax, Tunisie",
    },
    footer: {
      rights: "© {year} Société industrielle mécanique. Tous droits réservés.",
      contact: "Contact",
      catalog: "Catalogue",
    },
  },
} as const;

/**
 * ✅ This avoids the literal-type conflict (About vs À propos)
 * We type by "shape" (keys/structure), not by literal string values.
 */
export type I18nShape = typeof translations.en;
export type I18nKey = keyof I18nShape;
