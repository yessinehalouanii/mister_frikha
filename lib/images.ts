// Optimised photos in /public/images (WebP, resized to their largest display size).
// They are SIM's own photos, retouched; replace them with fresh workshop shots when available.

const img = (name: string, width: number, height: number) => ({
  src: `/images/${name}.webp`,
  width,
  height,
});

export const images = {
  workshopSpindle: img("atelier-usinage-cnc-broche-sim-sfax", 2560, 1709),
  cncTool: img("centre-usinage-cnc-outil-coupe-sim", 1024, 1536),
  cncPro1000: img("cnc-hartford-pro-1000-sim-sfax", 1536, 1024),
  cncPro800: img("cnc-hartford-pro-800-sim-sfax", 1024, 1024),
  cncLg800: img("cnc-hartford-lg-800-sim-sfax", 1536, 1024),
  press: img("presse-injection-essai-t0-sim-sfax", 1536, 1024),
  moldCylinder: img("moule-injection-verin-hydraulique-sim", 1024, 1536),
  moldUnscrewing: img("moule-injection-devissage-sim-sfax", 1536, 1024),
  moldSlides: img("moule-injection-coulisseaux-sim", 1536, 1024),
  cavities: img("usinage-empreintes-multi-cavites-sim", 1536, 1024),
  moldBlowPet: img("moule-soufflage-pet-sim-sfax", 500, 500),
  partLid: img("piece-couvercle-injection-plastique", 1024, 1536),
  partCaps: img("bouchons-filetes-moule-devissage", 1472, 704),
  partTube: img("tube-plastique-moule-verin", 704, 1472),
  partPump: img("pompe-pulverisateur-moule-coulisseaux", 608, 1696),
  partBottles: img("flacons-souffles-pet-pp-pehd", 1472, 704),
  partValve: img("vanne-plastique-injectee-sim", 1024, 1536),
  partSprinkler: img("arroseur-plastique-injecte-sim", 1024, 1024),
} as const;

export type ImageKey = keyof typeof images;
