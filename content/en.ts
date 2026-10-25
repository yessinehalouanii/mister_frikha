import type { Dict } from "./fr";
import { yearsLabel } from "./shared";

const Y = yearsLabel();

export const en: Dict = {
  meta: {
    home: {
      title: "Mold Maker in Sfax, Tunisia | SIM Injection Molds",
      description:
        "SIM designs and builds plastic injection and blow molds in Sfax, Tunisia, since 2000. Free first T0 trial on our 180-ton press. Fast quotes.",
    },
    injection: {
      title: "Plastic Injection Molds in Tunisia | SIM Sfax",
      description:
        "Injection molds with slides, unscrewing cores or hydraulic and pneumatic cylinders, up to 1150 × 600 mm and 3.3 t. Free T0 trial. Sfax, Tunisia.",
    },
    blow: {
      title: "PET, PP and HDPE Blow Molds in Tunisia | SIM",
      description:
        "Blow molds for PET, PP and HDPE bottles and containers, designed and machined in Sfax, Tunisia, and followed through to approval.",
    },
    design: {
      title: "Mold Design Office in Sfax, Tunisia | SIM",
      description:
        "From a drawing, a STEP file, a sample or just an idea to a working mold: SolidWorks and AutoCAD design, Mastercam CNC programming.",
    },
    machines: {
      title: "CNC Machine Shop for Molds in Sfax | SIM",
      description:
        "Hartford CNC machining centers, EDM, conventional machining, mirror polishing and a 180-ton trial press. Steels 1.2311, 1.2344 and Impax.",
    },
    projects: {
      title: "Projects: Molds and Plastic Parts | SIM Tunisia",
      description:
        "Injection and blow molds built by SIM in Sfax and the parts they produce: threaded caps, pumps, tubes, bottles, valves.",
    },
    about: {
      title: "Mold Shop in Sfax Since 2000 | About SIM",
      description: `SIM, Société Industrielle Mécanique: ${Y} years of mold making in Sfax, Tunisia, 15 skilled toolmakers and over 100 industrial clients.`,
    },
    contact: {
      title: "Request a Mold Quote in Tunisia | SIM Sfax",
      description:
        "Send your drawing, STEP file or sample and get a quote for your mold. Phone and WhatsApp +216 24 731 010, Gremda Km 10, Sfax, Tunisia.",
    },
  },

  nav: {
    home: "Home",
    injection: "Injection molds",
    blow: "Blow molds",
    design: "Design office",
    machines: "Machine shop",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    quote: "Request a quote",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    languages: "Language",
    breadcrumb: "Breadcrumb",
  },

  common: {
    quote: "Request a quote",
    whatsapp: "WhatsApp",
    whatsappLong: "Message us on WhatsApp",
    whatsappPrefill: "Hello SIM, I would like a quote for a mold.",
    call: "Call",
    more: "Learn more",
    seeAll: "See all projects",
    mold: "Mold",
    part: "Part",
    t0Badge: "Free T0 trial",
    maxSize: "max. 1150 mm",
    maxSizeShort: "max. 600 mm",
    introSkip: "Skip animation",
  },

  strip: [
    { value: "2000", label: "Founded in Sfax" },
    { value: "15", label: "Skilled toolmakers" },
    { value: "36+", label: "Molds per year" },
    { value: "1150×600", label: "Max. mold size (mm)" },
    { value: "3.3 t", label: "Max. mold weight" },
    { value: "100+", label: "Industrial clients" },
  ],

  specs: {
    title: "Workshop datasheet",
    intro: "The capacity we put behind every project.",
    rows: [
      { label: "Maximum mold size", value: "1150 × 600", unit: "mm" },
      { label: "Maximum mold weight", value: "3.3", unit: "t" },
      { label: "Annual output", value: "36+", unit: "molds" },
      { label: "Team", value: "15", unit: "toolmakers" },
      { label: "In-house trial press", value: "180", unit: "t" },
      { label: "CNC machining", value: "Hartford PRO-1000, PRO-800, LG-800" },
      { label: "Other equipment", value: "EDM, conventional machining, mirror polishing" },
      { label: "CAD / CAM", value: "SolidWorks, AutoCAD / Mastercam" },
      { label: "Steels", value: "1.2311 (P20), Impax Supreme, 1.2344 (H13)" },
      { label: "Cutting tools", value: "European standard: Gühring, Rabourdin" },
    ],
  },

  home: {
    h1: "Mold maker in Sfax, Tunisia",
    lead: "Plastic injection and blow molds, designed and machined in our own workshop, from the drawing to the first part.",
    t0Strong: "Free T0 trial",
    t0Rest: "on our 180-ton press: you approve real parts before any correction.",
    heroAlt: "Unscrewing injection mold with gear motor and chain drive, built by SIM in Sfax",
    heroCallouts: ["Gear motor", "Chain drive", "Cooling circuit", "Mold plates"],
    heroCalloutsLabel: "Key",
    heroCaption: "Unscrewing mold, SIM workshop",
    families: {
      title: "Four mold families",
      intro: "Every mold is designed for your part and your press. These are the ones we build most often.",
      items: [
        {
          ref: "INJ-T",
          name: "Molds with slides",
          text: "For parts with undercuts, clips or side holes: the slides release the part as the mold opens.",
          href: "/moules-injection",
          mold: "moldSlides",
          part: "partPump",
          moldAlt: "Injection mold with slides built by SIM",
          partAlt: "Sprayer pump molded in a mold with slides",
        },
        {
          ref: "INJ-D",
          name: "Unscrewing molds",
          text: "For caps and threaded parts: the cores rotate to release the thread without damaging it.",
          href: "/moules-injection",
          mold: "moldUnscrewing",
          part: "partCaps",
          moldAlt: "Unscrewing injection mold with gear motor",
          partAlt: "Threaded caps produced by an unscrewing mold",
        },
        {
          ref: "INJ-V",
          name: "Molds with hydraulic or pneumatic cylinders",
          text: "For long cores and movements the press alone cannot make: tubes, hollow bodies, technical parts.",
          href: "/moules-injection",
          mold: "moldCylinder",
          part: "partTube",
          moldAlt: "Injection mold fitted with a hydraulic cylinder",
          partAlt: "Plastic tube molded with a cylinder-driven core",
        },
        {
          ref: "SOU",
          name: "PET, PP and HDPE blow molds",
          text: "For bottles, flasks and jerrycans: polished cavities and engineered cooling, matched to your blow molding machine.",
          href: "/moules-soufflage",
          mold: "moldBlowPet",
          part: "partBottles",
          moldAlt: "PET bottle blow mold halves",
          partAlt: "Blow molded PET, PP and HDPE bottles",
        },
      ],
    },
    t0: {
      title: "The first trial is on us",
      text: "Before we deliver your mold, we mount it on our own 180-ton injection press and mold the first parts. You see them, measure them and approve them. This T0 trial costs you nothing.",
      points: [
        "You judge real parts, not a drawing",
        "Adjustments happen in our shop, before delivery",
        "You start production with a mold that has already run",
      ],
      pressAlt: "180-ton injection press used for T0 mold trials at SIM",
      caption: "180 t trial press, SIM workshop",
    },
    process: {
      titleStart: "From drawing",
      titleEnd: "to part",
      intro: "One workshop from the first conversation to delivery, with one point of contact at every step.",
      steps: [
        { name: "Specification", text: "A drawing, a 3D file, a sample or just an idea: together we set the material, the number of cavities and the annual volume." },
        { name: "CAD design", text: "Our design office designs the mold in SolidWorks and AutoCAD: parting line, slides, ejection, cooling." },
        { name: "Machining", text: "Mastercam programming, machining on our Hartford CNC centers and EDM for fine details." },
        { name: "Fitting and polishing", text: "Our toolmakers fit, assemble and mirror-polish the cavities." },
        { name: "Free T0 trial", text: "First parts molded on our 180-ton press and presented for your approval." },
        { name: "Delivery", text: "Once approved, the mold is delivered ready for production." },
      ],
    },
    capacity: {
      imageAlt: "Hartford PRO-1000 CNC machining center in the SIM workshop, Sfax",
    },
    projects: {
      title: "What comes out of our molds",
      text: "Caps, pumps, tubes, valves, bottles: a few of the parts produced with SIM molds.",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How long does it take to make a mold?",
          a: "For a mold of typical complexity, allow 4 to 6 weeks from order to the T0 trial. We confirm the exact lead time in the quote, depending on size, number of cavities and mold movements.",
        },
        {
          q: "Which steels do you use?",
          a: "It depends on the run length and the material: 40CMD8 (1.2311, P20 family) for most molds, Uddeholm Impax Supreme for cavities that need polishing, and hardened Z40CDV5 (1.2344, H13) for long runs and abrasive materials.",
        },
        {
          q: "What is the largest mold you can build?",
          a: "Up to 1150 × 600 mm and 3.3 tons. For anything larger, contact us and we will review your request.",
        },
        {
          q: "Is the T0 trial really free?",
          a: "Yes. The first trial of your mold on our 180-ton press is free. You see the first parts before delivery.",
        },
        {
          q: "Can I send a STEP file or a drawing?",
          a: "Yes. The quote form accepts STEP, IGES, STL, DWG and PDF files and photos (4 MB in total). For larger files, send them on WhatsApp or to contact@simfrikha.com.",
        },
        {
          q: "Do you work on export projects?",
          a: "Most of our clients are in Tunisia, and we are open to export projects. Send us your specification; you can write to us in French, English or Arabic.",
        },
      ],
    },
  },

  injection: {
    h1: "Plastic injection molds",
    lead: "We design and build custom injection molds in Sfax, Tunisia, for technical parts and packaging, up to 1150 × 600 mm and 3.3 tons.",
    heroAlt: "Plastic injection mold with slides built by SIM in Sfax",
    types: {
      title: "Three architectures, depending on your part",
      items: [
        {
          ref: "INJ-T",
          name: "Molds with slides",
          text: "When a part has undercuts, clips, side holes or ribs, it cannot be ejected straight. Slides driven by angle pins retract as the mold opens and release the part.",
          uses: "Pumps, housings, snap-fit parts, fittings",
          image: "moldSlides",
          alt: "Injection mold with slides, SIM workshop",
        },
        {
          ref: "INJ-D",
          name: "Unscrewing molds",
          text: "For a full thread, the threaded cores rotate while the mold opens and unscrew the part. Rotation comes from a motor and a chain or rack drive, synchronized with the press cycle.",
          uses: "Caps, closures, threaded parts",
          image: "moldUnscrewing",
          alt: "Unscrewing mold with gear motor and chain drive",
        },
        {
          ref: "INJ-V",
          name: "Molds with hydraulic or pneumatic cylinders",
          text: "For long cores or movements independent of the mold opening, a cylinder drives the core at the right moment of the cycle. It is the answer for tubes, hollow bodies and long-stroke parts.",
          uses: "Tubes, sleeves, hollow bodies, technical parts",
          image: "moldCylinder",
          alt: "Injection mold fitted with a hydraulic cylinder",
        },
      ],
    },
    steels: {
      title: "Steels chosen for your production run",
      intro: "Steel decides how long the mold lasts and how good the surface is. We choose it with you, based on the material and the annual volume.",
      head: ["Steel", "Equivalent", "Use"],
      rows: [
        ["40CMD8", "1.2311 · P20", "Pre-hardened steel for most cavities and plates"],
        ["Impax Supreme", "Uddeholm", "Cavities to be polished, cosmetic parts"],
        ["Z40CDV5", "1.2344 · H13", "Hardened steel for long runs and filled materials"],
      ],
    },
    faq: {
      title: "Questions about injection molds",
      items: [
        { q: "How many cavities should my mold have?", a: "It depends on your annual volume, the part size and your press. We propose the most cost-effective number of cavities in the quote." },
        { q: "Can you build a mold from an existing part?", a: "Yes. Our design office rebuilds the part in 3D from your sample, has you approve it, then designs the mold." },
        { q: "What is the maximum size?", a: "Up to 1150 × 600 mm and 3.3 tons per mold." },
        { q: "Is the mold tested before delivery?", a: "Yes. Every mold goes through a free first T0 trial on our 180-ton press." },
      ],
    },
  },

  blow: {
    h1: "PET, PP and HDPE blow molds",
    lead: "Blow molds for bottles, flasks and jerrycans, designed for your machine and machined in our workshop in Sfax, Tunisia.",
    heroAlt: "PET bottle blow mold halves built by SIM",
    materials: {
      title: "Three materials, three requirements",
      items: [
        { name: "PET", text: "Water, beverage and oil bottles blown from preforms. The mold must give an even wall and a base that stands straight." },
        { name: "PP", text: "Bottles that resist heat and chemicals. Mold cooling is decisive for cycle time and stability." },
        { name: "HDPE", text: "Detergent bottles, jerrycans and technical containers. Pinch-off and weld areas need care for a perfect seal." },
      ],
    },
    how: {
      title: "How we work",
      paragraphs: [
        "We start from your bottle, your drawing or your idea, and from your blow molding machine: preform or parison thickness, number of cavities, target output.",
        "The cavities are machined on our CNC centers, then polished. Cooling circuits are designed to hold the cycle time without deforming the part.",
      ],
      partsAlt: "Blow molded PET, PP and HDPE bottles and flasks",
    },
    faq: {
      title: "Questions about blow molds",
      items: [
        { q: "Do you build molds for PET bottles?", a: "Yes, as well as for PP and HDPE bottles." },
        { q: "Can you reproduce an existing bottle?", a: "Yes. From a sample we rebuild the shape in 3D, have you approve it, then build the mold." },
        { q: "What should I send for a quote?", a: "The bottle or its drawing, the material, the volume, your blow molding machine model and the number of cavities you want." },
      ],
    },
  },

  design: {
    h1: "Mold design office",
    lead: "Our designers turn your need into a mold that works the first time: a drawing, a file, a sample or an idea is enough to start.",
    heroAlt: "Multi-cavity inserts designed by the SIM design office being machined",
    inputs: {
      title: "What you can send us",
      items: [
        { name: "A 3D file", text: "STEP, IGES or STL: we import it straight into SolidWorks." },
        { name: "A 2D drawing", text: "DWG or dimensioned PDF: we model the part and have you approve it." },
        { name: "A sample", text: "An existing part to copy or improve: we measure it and rebuild it in 3D." },
        { name: "An idea", text: "A sketch or a description: we design the part with you, then the mold." },
      ],
    },
    software: {
      title: "Our tools",
      items: [
        { name: "SolidWorks", role: "3D design of parts and molds" },
        { name: "AutoCAD", role: "2D drawings and drafting" },
        { name: "Mastercam", role: "CAM programming for CNC machining" },
      ],
    },
    dfm: {
      title: "A part designed to be molded",
      text: "Before designing the mold, we check with you that the part molds well: draft angles, wall thickness, gate locations, parting line, undercuts. Fixing a detail on the drawing always costs less than modifying a mold.",
    },
    faq: {
      title: "Questions about design",
      items: [
        { q: "I only have an idea, not a drawing. Can you help?", a: "Yes. Our design office designs the part with you, then the mold. You approve every step." },
        { q: "Which file formats do you accept?", a: "STEP, IGES, STL, DWG, PDF and photos. The form takes 4 MB in total; for larger files, use WhatsApp or contact@simfrikha.com." },
        { q: "How long does the design take?", a: "Design is part of the overall lead time: for a mold of typical complexity, allow 4 to 6 weeks from order to the T0 trial." },
      ],
    },
  },

  machines: {
    h1: "Machine shop and mold machining",
    lead: "CNC machining, EDM, conventional machining, mirror polishing and a trial press: the whole mold is built under our roof in Sfax.",
    heroAlt: "CNC machining center spindle at work in the SIM workshop",
    fleet: {
      title: "Our production equipment",
      items: [
        { name: "Hartford PRO-1000", kind: "CNC machining center", text: "High precision on large parts: plates and cavities for large molds.", image: "cncPro1000", alt: "Hartford PRO-1000 CNC machining center, SIM workshop" },
        { name: "Hartford PRO-800", kind: "CNC machining center", text: "Machining of cavities and mold components.", image: "cncPro800", alt: "Hartford PRO-800 CNC machining center, SIM workshop" },
        { name: "Hartford LG-800", kind: "CNC machining center", text: "High precision on medium parts: inserts, cores, moving components.", image: "cncLg800", alt: "Hartford LG-800 CNC machining center, SIM workshop" },
        { name: "180 t trial press", kind: "Injection press", text: "For the free T0 trial of every mold before delivery.", image: "press", alt: "180-ton injection press for mold trials" },
      ],
      more: [
        { name: "EDM", text: "Fine shapes, sharp corners and deep ribs that a cutter cannot reach." },
        { name: "Conventional workshop", text: "Turning, milling and grinding for fitting and mold components." },
        { name: "Mirror polishing", text: "For cosmetic parts and transparent cavities." },
      ],
    },
    tools: {
      title: "European-standard cutting tools",
      text: "We machine only with French and German cutting tools, such as Gühring and Rabourdin, for consistent precision and controlled surface finish.",
      imageAlt: "Cutting tool machining on a CNC center",
    },
  },

  projects: {
    h1: "Projects: molds and parts",
    lead: "Every mold we deliver produces a real part. Here are a few projects, from mold to part.",
    pairs: [
      { name: "Threaded caps", mold: "moldUnscrewing", part: "partCaps", type: "Unscrewing mold", moldAlt: "Unscrewing injection mold for threaded caps", partAlt: "Molded threaded caps" },
      { name: "Sprayer pump", mold: "moldSlides", part: "partPump", type: "Mold with slides", moldAlt: "Injection mold with slides for a pump", partAlt: "Molded sprayer pump" },
      { name: "Tube", mold: "moldCylinder", part: "partTube", type: "Cylinder mold", moldAlt: "Injection mold with cylinder for a tube", partAlt: "Molded plastic tube" },
      { name: "Bottles and flasks", mold: "moldBlowPet", part: "partBottles", type: "Blow mold", moldAlt: "PET blow mold", partAlt: "Blow molded bottles and flasks" },
    ],
    partsTitle: "Other parts produced",
    parts: [
      { image: "partValve", name: "Valve", alt: "Plastic valve molded in a SIM mold" },
      { image: "partSprinkler", name: "Sprinkler", alt: "Multi-part molded plastic sprinkler" },
      { image: "partLid", name: "Lid", alt: "Molded plastic lid" },
      { image: "cavities", name: "Multi-cavity inserts", alt: "Machining a multi-cavity insert" },
    ],
  },

  about: {
    h1: "A mold shop in Sfax since 2000",
    lead: `For ${Y} years, Société Industrielle Mécanique has designed and built molds for the Tunisian plastics industry.`,
    heroAlt: "SIM mold machining workshop in Sfax",
    story: {
      title: "What we do",
      paragraphs: [
        "SIM was founded in Sfax in 2000. Today, 15 skilled toolmakers build more than 36 molds a year there for over 100 industrial clients.",
        "We handle the whole chain in our Gremda workshop: design, machining, assembly, polishing and trial. Our clients have one point of contact, from the first drawing to the first part.",
      ],
    },
    values: {
      title: "What guides our work",
      items: [
        { name: "Precision", text: "Steels chosen for each production run and European-standard cutting tools." },
        { name: "Transparency", text: "A free T0 trial so you judge real parts." },
        { name: "Proximity", text: "A workshop in Sfax and people you can reach by phone and WhatsApp." },
      ],
    },
    export: {
      title: "Open to export",
      text: "Most of our clients are in Tunisia, and we welcome projects from other countries. You can write to us in French, English or Arabic.",
    },
  },

  contact: {
    h1: "Request a quote",
    lead: "Describe your part and attach your files, and we will come back to you with a proposal. Prefer to talk? Call us or message us on WhatsApp.",
    formTitle: "Your project",
    directTitle: "Reach us directly",
    mapTitle: "Map to the SIM workshop, Gremda Km 10, Sfax",
    labels: {
      name: "Name",
      company: "Company",
      phone: "Phone",
      email: "Email",
      moldType: "Mold type",
      material: "Part material",
      volume: "Estimated annual volume",
      message: "Your project",
      files: "Files",
      required: "required",
      optional: "optional",
    },
    placeholders: {
      material: "e.g. PP, HDPE, PET, ABS",
      volume: "e.g. 200,000 parts / year",
      message: "Describe the part, its dimensions, the press or blow molder you plan to use…",
    },
    moldTypes: [
      { value: "injection-slides", label: "Injection with slides" },
      { value: "injection-unscrewing", label: "Unscrewing injection" },
      { value: "injection-cylinders", label: "Injection with cylinders" },
      { value: "blow", label: "Blow mold PET / PP / HDPE" },
      { value: "unknown", label: "Not sure yet" },
    ],
    chooseFiles: "Choose files",
    noFiles: "No file selected",
    filesHint: "STEP, IGES, STL, PDF, DWG or images · 4 MB in total",
    filesLarge: "Larger files: send them on WhatsApp or to contact@simfrikha.com.",
    submit: "Send request",
    sending: "Sending…",
    success: "Thank you, your request has been sent. We will get back to you shortly.",
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a valid phone number.",
      email: "This email address is not valid.",
      message: "Describe your project in a few words.",
      fileType: "File type not accepted. Send STEP, IGES, STL, PDF, DWG or images.",
      fileSize: "Files exceed 4 MB in total. Send them on WhatsApp or by email.",
      rate: "Too many requests in a short time. Try again in a few minutes or call us.",
      server: "Sending failed. Try again, or contact us by phone or WhatsApp.",
    },
    addressLabel: "Address",
    phoneLabel: "Phone and WhatsApp",
    emailLabel: "Email",
    address: "Gremda Km 10, Sfax, Tunisia",
  },

  cta: {
    title: "Let’s talk about your part",
    text: "Send your drawing, file or sample: we will propose the right mold. For injection molds, the T0 trial is on us.",
  },

  footer: {
    tagline: "Plastic injection and blow molds, designed and built in Sfax, Tunisia, since 2000.",
    pages: "Pages",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};
