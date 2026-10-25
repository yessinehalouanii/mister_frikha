// Company facts: the single source of truth for copy, structured data and the footer.
// Only confirmed facts belong here (see PRODUCT.md).

export const SITE_URL = "https://simfrikha.com";

export const FOUNDING_YEAR = 2000;
export const yearsOfExperience = () => new Date().getFullYear() - FOUNDING_YEAR;

export const site = {
  name: "SIM",
  legalName: "Société Industrielle Mécanique",
  phoneDisplay: "+216 24 731 010",
  phoneHref: "tel:+21624731010",
  whatsappHref: "https://wa.me/21624731010",
  email: "contact@simfrikha.com",
  // Quote requests are relayed to the email above by FormSubmit (formsubmit.co).
  // The very first submission sends an activation link to that inbox; click it once.
  formEndpoint: "https://formsubmit.co/ajax/contact@simfrikha.com",
  address: {
    street: "Gremda Km 10",
    city: "Sfax",
    country: "TN",
  },
  geo: { lat: 34.807943, lng: 10.694936 },
  mapEmbed: "https://www.google.com/maps?q=34.807943,10.694936&z=17&output=embed",
  mapOpen: "https://www.google.com/maps?q=34.807943,10.694936&z=17",
  employees: 15,
  moldsPerYear: 36,
  clients: 100,
  maxMold: { lengthMm: 1150, widthMm: 600, tons: 3.3 },
  pressTons: 180,
  // TODO: add the Google Business Profile URL once it is verified.
  sameAs: [] as string[],
} as const;

export const whatsappWithText = (text: string) =>
  `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
