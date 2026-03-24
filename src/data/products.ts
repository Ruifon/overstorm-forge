export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: { front: string; back: string };
  colors: { name: string; hex: string }[];
  sizes: string[];
  drop: string;
  category: string;
  gender: 'feminino' | 'masculino' | 'unissex';
  unitsLeft: number;
  soldOut: boolean;
  description: string;
  fabric: {
    weight: string;
    composition: string;
    treatment: string;
  };
  artist?: string;
  conceptStory?: string;
  sizeGuide: { size: string; chest: string; length: string; shoulder: string }[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
    photo?: string;
    date: string;
  }[];
}

export const products: Product[] = [
  {
    id: "ovs-hoodie-phantom",
    name: "PHANTOM HOODIE",
    price: 389.9,
    originalPrice: 449.9,
    images: { front: "/src/assets/product-hoodie-front.jpg", back: "/src/assets/product-hoodie-back.jpg" },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Storm Grey", hex: "#2A2A2A" },
      { name: "Neon Pulse", hex: "#00FF88" },
    ],
    sizes: ["P", "M", "G", "GG", "XGG"],
    drop: "DROP 04",
    category: "Hoodies",
    gender: "unissex",
    unitsLeft: 12,
    soldOut: false,
    description: "Hoodie oversized com tecnologia DryStorm™. Capuz estruturado com ajuste em cordão refletivo. Estampa exclusiva em serigrafia HD.",
    fabric: {
      weight: "420g/m²",
      composition: "100% Algodão Pima Premium",
      treatment: "DryStorm™ Anti-odor + UV Protection 50+",
    },
    artist: "KZMA",
    conceptStory: "Inspirado na dualidade entre o visível e o invisível no espaço urbano. O artista KZMA traduz frequências sonoras da cidade em padrões geométricos que só revelam sua complexidade de perto.",
    sizeGuide: [
      { size: "P", chest: "110cm", length: "72cm", shoulder: "54cm" },
      { size: "M", chest: "116cm", length: "74cm", shoulder: "56cm" },
      { size: "G", chest: "122cm", length: "76cm", shoulder: "58cm" },
      { size: "GG", chest: "128cm", length: "78cm", shoulder: "60cm" },
      { size: "XGG", chest: "134cm", length: "80cm", shoulder: "62cm" },
    ],
    reviews: [
      { name: "Lucas M.", rating: 5, comment: "Qualidade absurda. O tecido é grosso e o caimento oversized ficou perfeito.", date: "2024-03-15" },
      { name: "Ana K.", rating: 5, comment: "Comprei o Void Black e já quero o Storm Grey. Viciante.", date: "2024-03-10" },
      { name: "Pedro R.", rating: 4, comment: "Muito bom, só achei que podia ter um bolso canguru maior.", date: "2024-02-28" },
    ],
  },
  {
    id: "ovs-cropped-glitch",
    name: "GLITCH CROPPED",
    price: 279.9,
    images: { front: "/src/assets/product-2.jpg", back: "/src/assets/product-2.jpg" },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Cyber White", hex: "#F0F0F0" },
    ],
    sizes: ["PP", "P", "M", "G"],
    drop: "DROP 04",
    category: "Cropped",
    gender: "feminino",
    unitsLeft: 5,
    soldOut: false,
    description: "Cropped estruturado com corte angular. Acabamento em ribana dupla e estampa glitch em transfer digital.",
    fabric: { weight: "280g/m²", composition: "95% Algodão / 5% Elastano", treatment: "SoftTouch™ Enzyme Wash" },
    sizeGuide: [
      { size: "PP", chest: "86cm", length: "42cm", shoulder: "38cm" },
      { size: "P", chest: "92cm", length: "44cm", shoulder: "40cm" },
      { size: "M", chest: "98cm", length: "46cm", shoulder: "42cm" },
      { size: "G", chest: "104cm", length: "48cm", shoulder: "44cm" },
    ],
    reviews: [
      { name: "Mariana S.", rating: 5, comment: "Caimento incrível! Combina com tudo.", date: "2024-03-12" },
    ],
  },
  {
    id: "ovs-cargo-shadow",
    name: "SHADOW CARGO",
    price: 459.9,
    images: { front: "/src/assets/product-3.jpg", back: "/src/assets/product-3.jpg" },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Tactical Green", hex: "#1A3A1A" },
    ],
    sizes: ["P", "M", "G", "GG"],
    drop: "DROP 03",
    category: "Calças",
    gender: "masculino",
    unitsLeft: 0,
    soldOut: true,
    description: "Cargo com 8 bolsos funcionais e zíperes YKK. Cós ajustável com fivela metálica. Barra com elástico.",
    fabric: { weight: "320g/m²", composition: "98% Algodão Ripstop / 2% Elastano", treatment: "WaterShield™ DWR Coating" },
    sizeGuide: [
      { size: "P", chest: "-", length: "104cm", shoulder: "-" },
      { size: "M", chest: "-", length: "106cm", shoulder: "-" },
      { size: "G", chest: "-", length: "108cm", shoulder: "-" },
      { size: "GG", chest: "-", length: "110cm", shoulder: "-" },
    ],
    reviews: [],
  },
  {
    id: "ovs-tee-signal",
    name: "SIGNAL TEE",
    price: 189.9,
    images: { front: "/src/assets/product-4.jpg", back: "/src/assets/product-4.jpg" },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Off White", hex: "#F5F0E8" },
      { name: "Storm Grey", hex: "#2A2A2A" },
    ],
    sizes: ["P", "M", "G", "GG", "XGG"],
    drop: "DROP 04",
    category: "Camisetas",
    gender: "unissex",
    unitsLeft: 34,
    soldOut: false,
    description: "Camiseta oversized com estampa em serigrafia à base d'água. Gola reforçada com costura dupla.",
    fabric: { weight: "240g/m²", composition: "100% Algodão Penteado", treatment: "Pre-Shrunk + Silicone Wash" },
    sizeGuide: [
      { size: "P", chest: "108cm", length: "72cm", shoulder: "52cm" },
      { size: "M", chest: "114cm", length: "74cm", shoulder: "54cm" },
      { size: "G", chest: "120cm", length: "76cm", shoulder: "56cm" },
      { size: "GG", chest: "126cm", length: "78cm", shoulder: "58cm" },
      { size: "XGG", chest: "132cm", length: "80cm", shoulder: "60cm" },
    ],
    reviews: [
      { name: "Thiago B.", rating: 5, comment: "Melhor camiseta que já comprei. O algodão é surreal.", date: "2024-03-18" },
      { name: "Julia F.", rating: 4, comment: "Adorei a estampa, tecido muito gostoso.", date: "2024-03-05" },
    ],
  },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
export const getRelatedProducts = (id: string, drop: string) => products.filter(p => p.id !== id && p.drop === drop);
