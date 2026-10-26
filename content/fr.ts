import type { AppPathname } from "@/i18n/routing";
import type { ImageKey } from "@/lib/images";
import { yearsLabel } from "./shared";

const Y = yearsLabel();

export const fr = {
  meta: {
    home: {
      title: "Fabricant de moules à Sfax | SIM, moules d’injection",
      description:
        "SIM conçoit et fabrique des moules d’injection plastique et de soufflage à Sfax depuis 2000. Premier essai T0 offert sur presse 180 T. Devis rapide.",
    },
    injection: {
      title: "Moules d’injection plastique en Tunisie | SIM Sfax",
      description:
        "Moules d’injection à tiroirs, à dévissage et à vérins hydrauliques ou pneumatiques, jusqu’à 1150 × 600 mm et 3,3 t. Essai T0 gratuit. Sfax.",
    },
    blow: {
      title: "Moules de soufflage PET, PP, PEHD en Tunisie | SIM",
      description:
        "Fabrication de moules de soufflage pour flacons et bouteilles en PET, PP et PEHD. Conception et usinage à Sfax, suivi jusqu’à validation.",
    },
    design: {
      title: "Bureau d’études et conception de moules à Sfax | SIM",
      description:
        "Du plan, du fichier STEP, de l’échantillon ou de la simple idée jusqu’au moule : conception SolidWorks et AutoCAD, programmation Mastercam.",
    },
    machines: {
      title: "Parc machines et usinage CNC de moules à Sfax | SIM",
      description:
        "Centres d’usinage CNC Hartford, électroérosion, atelier conventionnel, polissage miroir et presse d’essai 180 T. Aciers 1.2311, 1.2344, Impax.",
    },
    projects: {
      title: "Réalisations : moules et pièces plastiques | SIM Sfax",
      description:
        "Moules d’injection et de soufflage fabriqués par SIM à Sfax et les pièces qu’ils produisent : bouchons, tubes, pompes, flacons, vannes.",
    },
    about: {
      title: "Moulerie à Sfax depuis 2000 | À propos de SIM",
      description: `SIM, Société Industrielle Mécanique : ${Y} ans de fabrication de moules à Sfax, 15 outilleurs qualifiés et plus de 100 clients industriels.`,
    },
    contact: {
      title: "Demander un devis de moule en Tunisie | SIM Sfax",
      description:
        "Envoyez votre plan, fichier STEP ou échantillon et recevez un devis pour votre moule. Téléphone et WhatsApp +216 24 731 010, Gremda Km 10, Sfax.",
    },
  },

  nav: {
    home: "Accueil",
    injection: "Moules d’injection",
    blow: "Moules de soufflage",
    design: "Bureau d’études",
    machines: "Parc machines",
    projects: "Réalisations",
    about: "À propos",
    contact: "Contact",
    quote: "Demander un devis",
    menu: "Menu",
    close: "Fermer",
    skip: "Aller au contenu",
    languages: "Langue",
    breadcrumb: "Fil d’Ariane",
  },

  common: {
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
    whatsappLong: "Écrire sur WhatsApp",
    whatsappPrefill: "Bonjour SIM, je souhaite un devis pour un moule.",
    call: "Appeler",
    more: "En savoir plus",
    seeAll: "Voir toutes les réalisations",
    mold: "Moule",
    part: "Pièce",
    t0Badge: "Essai T0 offert",
    maxSize: "max. 1150 mm",
    maxSizeShort: "max. 600 mm",
    introSkip: "Passer l’animation",
  },

  // The datasheet strip under every hero
  strip: [
    { value: "2000", label: "Fondée à Sfax" },
    { value: "15", label: "Outilleurs qualifiés" },
    { value: "36+", label: "Moules par an" },
    { value: "1150×600", label: "Taille max. du moule (mm)" },
    { value: "3,3 t", label: "Poids max. du moule" },
    { value: "100+", label: "Clients industriels" },
  ],

  specs: {
    title: "Fiche technique de l’atelier",
    intro: "Les capacités que nous engageons sur chaque projet.",
    rows: [
      { label: "Taille maximale du moule", value: "1150 × 600", unit: "mm" },
      { label: "Poids maximal du moule", value: "3,3", unit: "t" },
      { label: "Production annuelle", value: "36+", unit: "moules" },
      { label: "Équipe", value: "15", unit: "outilleurs" },
      { label: "Presse d’essai interne", value: "180", unit: "t" },
      // TODO: confirm the model name "PRO-1000" (vs "Pro 100") on the machine plate.
      { label: "Usinage CNC", value: "Hartford PRO-1000, PRO-800, LG-800" },
      { label: "Autres moyens", value: "Électroérosion, atelier conventionnel, polissage miroir" },
      { label: "CAO / FAO", value: "SolidWorks, AutoCAD / Mastercam" },
      // TODO: confirm the exact Uddeholm grade name ("Impax Supreme").
      { label: "Aciers", value: "1.2311 (P20), Impax Supreme, 1.2344 (H13)" },
      { label: "Outils coupants", value: "Standard européen : Gühring, Rabourdin" },
    ],
  },

  home: {
    h1: "Société Industrielle Mécanique",
    lead: "Fabricant de moules d’injection plastique et de soufflage, conçus et usinés dans notre atelier de Sfax, du plan à la première pièce.",
    t0Strong: "Essai T0 offert",
    t0Rest: "sur notre presse de 180 tonnes : vous validez de vraies pièces avant toute correction.",
    heroAlt: "Moule d’injection à dévissage avec motoréducteur et chaîne, fabriqué par SIM à Sfax",
    heroCallouts: ["Motoréducteur", "Transmission par chaîne", "Circuit de refroidissement", "Plaques du moule"],
    heroCalloutsLabel: "Repères",
    heroCaption: "Moule à dévissage, atelier SIM",
    families: {
      title: "Quatre familles de moules",
      intro:
        "Chaque moule est conçu pour votre pièce et votre presse. Voici ce que nous fabriquons le plus souvent.",
      items: [
        {
          ref: "INJ-T",
          name: "Moules à tiroirs et coulisseaux",
          text: "Pour les pièces avec contre-dépouilles, clips ou trous latéraux : les tiroirs libèrent la pièce à l’ouverture du moule.",
          href: "/moules-injection" as AppPathname,
          mold: "moldSlides" as ImageKey,
          part: "partPump" as ImageKey,
          moldAlt: "Moule d’injection à coulisseaux fabriqué par SIM",
          partAlt: "Pompe de pulvérisateur injectée dans un moule à coulisseaux",
        },
        {
          ref: "INJ-D",
          name: "Moules à dévissage",
          text: "Pour les bouchons et pièces filetées : les noyaux tournent pour démouler le filetage sans l’abîmer.",
          href: "/moules-injection" as AppPathname,
          mold: "moldUnscrewing" as ImageKey,
          part: "partCaps" as ImageKey,
          moldAlt: "Moule d’injection à dévissage avec motoréducteur",
          partAlt: "Bouchons filetés produits par un moule à dévissage",
        },
        {
          ref: "INJ-V",
          name: "Moules à vérins hydrauliques ou pneumatiques",
          text: "Pour les noyaux longs et les mouvements que la presse seule ne peut pas faire : tubes, corps creux, pièces techniques.",
          href: "/moules-injection" as AppPathname,
          mold: "moldCylinder" as ImageKey,
          part: "partTube" as ImageKey,
          moldAlt: "Moule d’injection équipé d’un vérin hydraulique",
          partAlt: "Tube plastique injecté avec un moule à vérin",
        },
        {
          ref: "SOU",
          name: "Moules de soufflage PET, PP, PEHD",
          text: "Pour les flacons, bouteilles et bidons : empreintes polies, refroidissement étudié, adaptées à votre souffleuse.",
          href: "/moules-soufflage" as AppPathname,
          mold: "moldBlowPet" as ImageKey,
          part: "partBottles" as ImageKey,
          moldAlt: "Demi-moules de soufflage pour bouteille PET",
          partAlt: "Flacons soufflés en PET, PP et PEHD",
        },
      ],
    },
    t0: {
      title: "Le premier essai est offert",
      text: "Avant de vous livrer le moule, nous le montons sur notre propre presse à injecter de 180 tonnes et nous injectons les premières pièces. Vous les voyez, vous les mesurez, vous les validez. Cet essai T0 ne vous coûte rien.",
      points: [
        "Vous jugez sur des pièces réelles, pas sur un plan",
        "Les ajustements se font chez nous, avant la livraison",
        "Vous démarrez votre production avec un moule déjà essayé",
      ],
      pressAlt: "Presse à injecter de 180 tonnes utilisée pour les essais T0 chez SIM",
      caption: "Presse d’essai 180 T, atelier SIM",
    },
    process: {
      titleStart: "Du plan",
      titleEnd: "à la pièce",
      intro: "Un seul atelier, du premier échange à la livraison : vous avez un interlocuteur à chaque étape.",
      steps: [
        {
          name: "Cahier des charges",
          text: "Plan, fichier 3D, échantillon ou simple idée : nous définissons avec vous la matière, le nombre d’empreintes et le volume annuel.",
        },
        {
          name: "Conception CAO",
          text: "Le bureau d’études conçoit le moule sous SolidWorks et AutoCAD : plan de joint, tiroirs, éjection, refroidissement.",
        },
        {
          name: "Usinage",
          text: "Programmation Mastercam, usinage sur nos centres CNC Hartford et électroérosion pour les formes fines.",
        },
        {
          name: "Montage et polissage",
          text: "Ajustage, montage et polissage miroir des empreintes par nos outilleurs.",
        },
        {
          name: "Essai T0 offert",
          text: "Premières pièces injectées sur notre presse de 180 tonnes, présentées pour validation.",
        },
        {
          name: "Livraison",
          text: "Après validation, le moule vous est livré, prêt à produire.",
        },
      ],
    },
    capacity: {
      imageAlt: "Centre d’usinage CNC Hartford PRO-1000 de l’atelier SIM à Sfax",
    },
    projects: {
      title: "Ce qui sort de nos moules",
      text: "Bouchons, pompes, tubes, vannes, flacons : quelques pièces produites avec des moules SIM.",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Quel est le délai de fabrication d’un moule ?",
          a: "Pour un moule de complexité courante, comptez 4 à 6 semaines entre la commande et l’essai T0. Nous confirmons le délai exact dans le devis, selon la taille, le nombre d’empreintes et les mouvements du moule.",
        },
        {
          q: "Quels aciers utilisez-vous ?",
          a: "Selon la série et la matière injectée : 40CMD8 (1.2311, famille P20) pour la plupart des moules, Impax Supreme d’Uddeholm pour les empreintes à polir, et Z40CDV5 (1.2344, H13) trempé pour les grandes séries et les matières abrasives.",
        },
        {
          q: "Quelle est la taille maximale de moule que vous pouvez fabriquer ?",
          a: "Jusqu’à 1150 × 600 mm et 3,3 tonnes. Au-delà, contactez-nous : nous étudions chaque demande.",
        },
        {
          q: "L’essai T0 est-il vraiment gratuit ?",
          a: "Oui. Le premier essai de votre moule sur notre presse de 180 tonnes est offert. Vous voyez les premières pièces avant la livraison.",
        },
        {
          q: "Puis-je envoyer un fichier STEP ou un plan ?",
          a: "Oui. Le formulaire de devis accepte les fichiers STEP, IGES, STL, DWG, PDF et les photos (4 Mo au total). Pour des fichiers plus lourds, envoyez-les par WhatsApp ou à contact@simfrikha.com.",
        },
        {
          q: "Travaillez-vous pour l’export ?",
          a: "Notre clientèle est surtout tunisienne, et nous sommes ouverts aux projets à l’export. Envoyez-nous votre cahier des charges, en français, en anglais ou en arabe.",
        },
      ],
    },
  },

  injection: {
    h1: "Moules d’injection plastique",
    lead: "Nous concevons et fabriquons à Sfax des moules d’injection sur mesure pour vos pièces techniques et vos emballages, jusqu’à 1150 × 600 mm et 3,3 tonnes.",
    heroAlt: "Moule d’injection plastique à coulisseaux fabriqué par SIM à Sfax",
    types: {
      title: "Trois architectures, selon votre pièce",
      items: [
        {
          ref: "INJ-T",
          name: "Moules à tiroirs et coulisseaux",
          text: "Quand la pièce a des contre-dépouilles, des clips, des trous ou des nervures latérales, un démoulage droit est impossible. Les tiroirs, entraînés par des doigts inclinés, reculent à l’ouverture du moule et libèrent la pièce.",
          uses: "Pompes, boîtiers, pièces clipsables, raccords",
          image: "moldSlides" as ImageKey,
          alt: "Moule d’injection à tiroirs et coulisseaux, atelier SIM",
        },
        {
          ref: "INJ-D",
          name: "Moules à dévissage",
          text: "Pour un filetage complet, les noyaux filetés tournent pendant l’ouverture et dévissent la pièce. La rotation est assurée par un moteur et une transmission à chaîne ou à crémaillère, synchronisée avec le cycle de la presse.",
          uses: "Bouchons, capsules, pièces filetées",
          image: "moldUnscrewing" as ImageKey,
          alt: "Moule à dévissage avec motoréducteur et chaîne de transmission",
        },
        {
          ref: "INJ-V",
          name: "Moules à vérins hydrauliques ou pneumatiques",
          text: "Pour les noyaux longs ou les mouvements indépendants de l’ouverture, un vérin commande le noyau au bon moment du cycle. C’est la solution pour les tubes, les corps creux et les pièces à longue course.",
          uses: "Tubes, manchons, corps creux, pièces techniques",
          image: "moldCylinder" as ImageKey,
          alt: "Moule d’injection équipé d’un vérin hydraulique",
        },
      ],
    },
    steels: {
      title: "Des aciers choisis pour votre série",
      intro: "L’acier détermine la durée de vie du moule et la qualité de surface. Nous le choisissons avec vous, selon la matière et le volume annuel.",
      head: ["Acier", "Équivalence", "Usage"],
      rows: [
        ["40CMD8", "1.2311 · P20", "Acier prétraité pour la plupart des empreintes et plaques"],
        ["Impax Supreme", "Uddeholm", "Empreintes à polir et pièces d’aspect"],
        ["Z40CDV5", "1.2344 · H13", "Acier trempé pour grandes séries et matières chargées"],
      ],
    },
    faq: {
      title: "Questions sur les moules d’injection",
      items: [
        {
          q: "Combien d’empreintes pour mon moule ?",
          a: "Cela dépend du volume annuel, de la taille de la pièce et de votre presse. Nous vous proposons le nombre d’empreintes le plus rentable dans le devis.",
        },
        {
          q: "Pouvez-vous fabriquer un moule à partir d’une pièce existante ?",
          a: "Oui. À partir d’un échantillon, notre bureau d’études reconstruit la pièce en 3D, vous la fait valider, puis conçoit le moule.",
        },
        {
          q: "Quelle est la taille maximale ?",
          a: "Jusqu’à 1150 × 600 mm et 3,3 tonnes par moule.",
        },
        {
          q: "Le moule est-il essayé avant livraison ?",
          a: "Oui. Chaque moule passe un premier essai T0 sur notre presse de 180 tonnes, offert.",
        },
      ],
    },
  },

  blow: {
    h1: "Moules de soufflage PET, PP, PEHD",
    lead: "Des moules de soufflage pour flacons, bouteilles et bidons, conçus pour votre machine et usinés dans notre atelier de Sfax.",
    heroAlt: "Demi-moules de soufflage pour bouteille PET fabriqués par SIM",
    materials: {
      title: "Trois matières, trois exigences",
      items: [
        {
          name: "PET",
          text: "Bouteilles d’eau, de boissons et d’huile soufflées à partir de préformes. Le moule doit garantir une paroi régulière et un fond qui tient debout.",
        },
        {
          name: "PP",
          text: "Flacons résistants à la chaleur et aux produits chimiques. Le refroidissement du moule est déterminant pour la cadence et la stabilité.",
        },
        {
          name: "PEHD",
          text: "Flacons de détergents, bidons et emballages techniques. Les zones de pincement et de soudure doivent être soignées pour une étanchéité parfaite.",
        },
      ],
    },
    how: {
      title: "Comment nous travaillons",
      paragraphs: [
        "Nous partons de votre flacon, de votre plan ou de votre idée, et des caractéristiques de votre souffleuse : épaisseur de la préforme ou de la paraison, nombre de cavités, cadence visée.",
        "Les empreintes sont usinées sur nos centres CNC puis polies. Les circuits de refroidissement sont étudiés pour tenir la cadence sans déformation de la pièce.",
      ],
      partsAlt: "Flacons et bouteilles soufflés en PET, PP et PEHD",
    },
    faq: {
      title: "Questions sur les moules de soufflage",
      items: [
        {
          q: "Fabriquez-vous des moules pour bouteilles PET ?",
          a: "Oui, ainsi que pour les flacons en PP et en PEHD.",
        },
        {
          q: "Pouvez-vous reproduire un flacon existant ?",
          a: "Oui. À partir d’un échantillon, nous reconstruisons la forme en 3D, vous la faisons valider, puis nous fabriquons le moule.",
        },
        {
          q: "Quelles informations envoyer pour un devis ?",
          a: "Le flacon ou son plan, la matière, le volume, le modèle de votre souffleuse et le nombre de cavités souhaité.",
        },
      ],
    },
  },

  design: {
    h1: "Bureau d’études et conception de moules",
    lead: "Nos concepteurs transforment votre besoin en un moule qui fonctionne du premier coup : un plan, un fichier, un échantillon ou une idée suffisent pour commencer.",
    heroAlt: "Usinage d’empreintes multi-cavités conçues par le bureau d’études SIM",
    inputs: {
      title: "Ce que vous pouvez nous envoyer",
      items: [
        { name: "Un fichier 3D", text: "STEP, IGES ou STL : nous l’importons directement dans SolidWorks." },
        { name: "Un plan 2D", text: "DWG ou PDF coté : nous modélisons la pièce et vous la faisons valider." },
        { name: "Un échantillon", text: "Une pièce existante à reproduire ou à améliorer : nous la relevons et la reconstruisons en 3D." },
        { name: "Une idée", text: "Un croquis ou une description : nous concevons la pièce avec vous, puis le moule." },
      ],
    },
    software: {
      title: "Nos outils",
      items: [
        { name: "SolidWorks", role: "Conception 3D des pièces et des moules" },
        { name: "AutoCAD", role: "Plans 2D et mises en plan" },
        { name: "Mastercam", role: "Programmation FAO des usinages CNC" },
      ],
    },
    dfm: {
      title: "Une pièce pensée pour être moulée",
      text: "Avant de concevoir le moule, nous vérifions avec vous que la pièce se moule bien : dépouilles, épaisseurs, points d’injection, plan de joint, contre-dépouilles. Corriger un détail sur le plan coûte toujours moins cher que de modifier un moule.",
    },
    faq: {
      title: "Questions sur la conception",
      items: [
        {
          q: "Je n’ai pas de plan, seulement une idée. Pouvez-vous m’aider ?",
          a: "Oui. Notre bureau d’études conçoit la pièce avec vous, puis le moule. Vous validez chaque étape.",
        },
        {
          q: "Quels formats de fichiers acceptez-vous ?",
          a: "STEP, IGES, STL, DWG, PDF et photos. Le formulaire accepte 4 Mo au total ; au-delà, envoyez vos fichiers par WhatsApp ou à contact@simfrikha.com.",
        },
        {
          q: "Combien de temps prend la conception ?",
          a: "La conception fait partie du délai global : pour un moule de complexité courante, comptez 4 à 6 semaines entre la commande et l’essai T0.",
        },
      ],
    },
  },

  machines: {
    h1: "Parc machines et usinage de moules",
    lead: "Usinage CNC, électroérosion, atelier conventionnel, polissage miroir et presse d’essai : tout le moule est fabriqué sous notre toit à Sfax.",
    heroAlt: "Broche d’un centre d’usinage CNC en action dans l’atelier SIM",
    fleet: {
      title: "Nos moyens de production",
      items: [
        {
          name: "Hartford PRO-1000",
          kind: "Centre d’usinage CNC",
          text: "Haute précision sur les grandes pièces : plaques et empreintes des grands moules.",
          image: "cncPro1000" as ImageKey,
          alt: "Centre d’usinage CNC Hartford PRO-1000, atelier SIM",
        },
        {
          name: "Hartford PRO-800",
          kind: "Centre d’usinage CNC",
          text: "Usinage des empreintes et éléments de moules.",
          image: "cncPro800" as ImageKey,
          alt: "Centre d’usinage CNC Hartford PRO-800, atelier SIM",
        },
        {
          name: "Hartford LG-800",
          kind: "Centre d’usinage CNC",
          text: "Haute précision sur les pièces moyennes : inserts, noyaux, éléments mobiles.",
          image: "cncLg800" as ImageKey,
          alt: "Centre d’usinage CNC Hartford LG-800, atelier SIM",
        },
        {
          name: "Presse d’essai 180 T",
          kind: "Presse à injecter",
          text: "Pour l’essai T0 offert de chaque moule avant livraison.",
          image: "press" as ImageKey,
          alt: "Presse à injecter de 180 tonnes pour les essais de moules",
        },
      ],
      more: [
        { name: "Électroérosion", text: "Formes fines, angles vifs et nervures profondes que la fraise ne peut pas atteindre." },
        { name: "Atelier conventionnel", text: "Tournage, fraisage et rectification pour l’ajustage et les pièces de moule." },
        { name: "Polissage miroir", text: "Pour les pièces d’aspect et les empreintes transparentes." },
      ],
    },
    tools: {
      title: "Outils coupants au standard européen",
      text: "Nous usinons uniquement avec des outils coupants de marques françaises et allemandes, comme Gühring et Rabourdin : précision constante et état de surface maîtrisé.",
      imageAlt: "Outil coupant en cours d’usinage sur un centre CNC",
    },
  },

  projects: {
    h1: "Réalisations : moules et pièces",
    lead: "Chaque moule que nous livrons produit une pièce bien réelle. Voici quelques réalisations, du moule à la pièce.",
    pairs: [
      { name: "Bouchons filetés", mold: "moldUnscrewing" as ImageKey, part: "partCaps" as ImageKey, type: "Moule à dévissage", moldAlt: "Moule d’injection à dévissage pour bouchons filetés", partAlt: "Bouchons filetés injectés" },
      { name: "Pompe de pulvérisateur", mold: "moldSlides" as ImageKey, part: "partPump" as ImageKey, type: "Moule à coulisseaux", moldAlt: "Moule d’injection à coulisseaux pour pompe", partAlt: "Pompe de pulvérisateur injectée" },
      { name: "Tube", mold: "moldCylinder" as ImageKey, part: "partTube" as ImageKey, type: "Moule à vérin", moldAlt: "Moule d’injection à vérin pour tube", partAlt: "Tube plastique injecté" },
      { name: "Bouteilles et flacons", mold: "moldBlowPet" as ImageKey, part: "partBottles" as ImageKey, type: "Moule de soufflage", moldAlt: "Moule de soufflage PET", partAlt: "Bouteilles et flacons soufflés" },
    ],
    partsTitle: "Autres pièces produites",
    parts: [
      { image: "partValve" as ImageKey, name: "Vanne", alt: "Vanne plastique injectée dans un moule SIM" },
      { image: "partSprinkler" as ImageKey, name: "Arroseur", alt: "Arroseur plastique multi-pièces injecté" },
      { image: "partLid" as ImageKey, name: "Couvercle de lingettes", alt: "Couvercle de boîte à lingettes injecté" },
      { image: "cavities" as ImageKey, name: "Empreintes multi-cavités", alt: "Usinage d’un insert multi-empreintes" },
    ],
  },

  about: {
    h1: "Une moulerie à Sfax depuis 2000",
    lead: `Depuis ${Y} ans, la Société Industrielle Mécanique conçoit et fabrique des moules pour l’industrie plastique tunisienne.`,
    heroAlt: "Atelier d’usinage de moules SIM à Sfax",
    story: {
      title: "Notre métier",
      paragraphs: [
        "SIM a été fondée à Sfax en 2000. Aujourd’hui, 15 outilleurs qualifiés y fabriquent plus de 36 moules par an pour plus de 100 clients industriels.",
        "Nous maîtrisons toute la chaîne dans notre atelier de Gremda : conception, usinage, montage, polissage et essai. Nos clients ont un seul interlocuteur, du premier plan à la première pièce.",
      ],
    },
    values: {
      title: "Ce qui guide notre travail",
      items: [
        { name: "Précision", text: "Des aciers choisis pour chaque série et des outils coupants au standard européen." },
        { name: "Transparence", text: "Un essai T0 offert pour que vous jugiez sur des pièces réelles." },
        { name: "Proximité", text: "Un atelier à Sfax et des interlocuteurs joignables par téléphone et WhatsApp." },
      ],
    },
    export: {
      title: "Ouverts à l’export",
      text: "Notre clientèle est surtout tunisienne, et nous accueillons volontiers les projets d’autres pays. Écrivez-nous en français, en anglais ou en arabe.",
    },
  },

  contact: {
    h1: "Demander un devis",
    lead: "Décrivez votre pièce et joignez vos fichiers : nous revenons vers vous avec une proposition. Vous préférez parler ? Appelez-nous ou écrivez sur WhatsApp.",
    formTitle: "Votre projet",
    directTitle: "Nous joindre directement",
    mapTitle: "Plan d’accès à l’atelier SIM, Gremda Km 10, Sfax",
    labels: {
      name: "Nom",
      company: "Société",
      phone: "Téléphone",
      email: "E-mail",
      moldType: "Type de moule",
      material: "Matière de la pièce",
      volume: "Volume annuel estimé",
      message: "Votre projet",
      files: "Fichiers",
      required: "obligatoire",
      optional: "facultatif",
    },
    placeholders: {
      material: "ex. PP, PEHD, PET, ABS",
      volume: "ex. 200 000 pièces / an",
      message: "Décrivez la pièce, ses dimensions, la presse ou la souffleuse prévue…",
    },
    moldTypes: [
      { value: "injection-slides", label: "Injection à tiroirs / coulisseaux" },
      { value: "injection-unscrewing", label: "Injection à dévissage" },
      { value: "injection-cylinders", label: "Injection à vérins" },
      { value: "blow", label: "Soufflage PET / PP / PEHD" },
      { value: "unknown", label: "Je ne sais pas encore" },
    ],
    chooseFiles: "Choisir des fichiers",
    noFiles: "Aucun fichier sélectionné",
    filesHint: "STEP, IGES, STL, PDF, DWG ou images · 4 Mo au total",
    filesLarge: "Fichiers plus lourds : envoyez-les par WhatsApp ou à contact@simfrikha.com.",
    submit: "Envoyer la demande",
    sending: "Envoi en cours…",
    success: "Merci, votre demande est bien envoyée. Nous vous répondons rapidement.",
    errors: {
      name: "Indiquez votre nom.",
      phone: "Indiquez un numéro de téléphone valide.",
      email: "Cette adresse e-mail n’est pas valide.",
      message: "Décrivez votre projet en quelques mots.",
      fileType: "Format non accepté. Envoyez du STEP, IGES, STL, PDF, DWG ou des images.",
      fileSize: "Les fichiers dépassent 4 Mo au total. Envoyez-les par WhatsApp ou par e-mail.",
      rate: "Trop de demandes en peu de temps. Réessayez dans quelques minutes ou appelez-nous.",
      server: "L’envoi a échoué. Réessayez, ou contactez-nous par téléphone ou WhatsApp.",
    },
    addressLabel: "Adresse",
    phoneLabel: "Téléphone et WhatsApp",
    emailLabel: "E-mail",
    address: "Gremda Km 10, Sfax, Tunisie",
  },

  cta: {
    title: "Parlons de votre pièce",
    text: "Envoyez votre plan, votre fichier ou votre échantillon : nous vous proposons le moule adapté. Pour un moule d’injection, l’essai T0 est offert.",
  },

  footer: {
    tagline: "Moules d’injection plastique et de soufflage, conçus et fabriqués à Sfax depuis 2000.",
    pages: "Pages",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
};

export type Dict = typeof fr;
