import productHoodieFront from "@/assets/product-hoodie-front.jpg";
import productHoodieBack from "@/assets/product-hoodie-back.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

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
  limitedEdition?: boolean;
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
    images: { front: productHoodieFront, back: productHoodieBack },
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
    fabric: { weight: "420g/m²", composition: "100% Algodão Pima Premium", treatment: "DryStorm™ Anti-odor + UV Protection 50+" },
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
    images: { front: product2, back: product2 },
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
    images: { front: product3, back: product3 },
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
    images: { front: product4, back: product4 },
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
  // DROP 03 — Limited Edition & Almost Sold Out
  {
    id: "ovs-bomber-eclipse",
    name: "ECLIPSE BOMBER",
    price: 549.9,
    originalPrice: 649.9,
    images: { front: product3, back: product3 },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Midnight Navy", hex: "#0D1B2A" },
    ],
    sizes: ["P", "M", "G", "GG"],
    drop: "DROP 03",
    category: "Jaquetas",
    gender: "unissex",
    unitsLeft: 3,
    soldOut: false,
    limitedEdition: true,
    description: "Bomber jacket com forro térmico e detalhes refletivos. Edição limitada a 50 unidades com numeração individual.",
    fabric: { weight: "380g/m²", composition: "100% Nylon Ripstop / Forro Poliéster", treatment: "WaterShield™ DWR + Thermo-Layer" },
    artist: "VØLT",
    conceptStory: "A jaqueta Eclipse foi desenhada em colaboração com o artista VØLT, explorando a dualidade luz e sombra nas paisagens noturnas urbanas. Cada peça é numerada individualmente.",
    sizeGuide: [
      { size: "P", chest: "112cm", length: "68cm", shoulder: "52cm" },
      { size: "M", chest: "118cm", length: "70cm", shoulder: "54cm" },
      { size: "G", chest: "124cm", length: "72cm", shoulder: "56cm" },
      { size: "GG", chest: "130cm", length: "74cm", shoulder: "58cm" },
    ],
    reviews: [
      { name: "Rafael T.", rating: 5, comment: "Peça de colecionador. Os detalhes refletivos são insanos.", date: "2024-01-20" },
      { name: "Camila S.", rating: 5, comment: "Comprei a #023 e já recebi proposta pra revender. Não largo!", date: "2024-01-15" },
    ],
  },
  {
    id: "ovs-hoodie-static",
    name: "STATIC HOODIE",
    price: 419.9,
    images: { front: productHoodieFront, back: productHoodieBack },
    colors: [
      { name: "Carbon", hex: "#1C1C1C" },
      { name: "Electric Blue", hex: "#0066FF" },
    ],
    sizes: ["P", "M", "G", "GG"],
    drop: "DROP 03",
    category: "Hoodies",
    gender: "masculino",
    unitsLeft: 7,
    soldOut: false,
    limitedEdition: true,
    description: "Hoodie premium com estampa all-over em sublimação. Edição limitada Drop 03 com certificado de autenticidade.",
    fabric: { weight: "440g/m²", composition: "100% Algodão Orgânico", treatment: "DryStorm™ + Sublimação Full Print" },
    sizeGuide: [
      { size: "P", chest: "112cm", length: "73cm", shoulder: "55cm" },
      { size: "M", chest: "118cm", length: "75cm", shoulder: "57cm" },
      { size: "G", chest: "124cm", length: "77cm", shoulder: "59cm" },
      { size: "GG", chest: "130cm", length: "79cm", shoulder: "61cm" },
    ],
    reviews: [
      { name: "Diego F.", rating: 5, comment: "O azul elétrico é ainda mais bonito ao vivo. Qualidade surreal.", date: "2024-02-05" },
    ],
  },
  {
    id: "ovs-jogger-pulse",
    name: "PULSE JOGGER",
    price: 349.9,
    originalPrice: 399.9,
    images: { front: product3, back: product3 },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Ash Grey", hex: "#3A3A3A" },
    ],
    sizes: ["P", "M", "G", "GG"],
    drop: "DROP 03",
    category: "Calças",
    gender: "unissex",
    unitsLeft: 4,
    soldOut: false,
    description: "Jogger técnico com bolsos laterais com zíper e barra ajustável. Cós com cordão emborrachado e detalhes em silicone.",
    fabric: { weight: "300g/m²", composition: "92% Algodão / 8% Elastano", treatment: "SoftTouch™ + Acabamento Peach Skin" },
    sizeGuide: [
      { size: "P", chest: "-", length: "100cm", shoulder: "-" },
      { size: "M", chest: "-", length: "102cm", shoulder: "-" },
      { size: "G", chest: "-", length: "104cm", shoulder: "-" },
      { size: "GG", chest: "-", length: "106cm", shoulder: "-" },
    ],
    reviews: [
      { name: "Fernanda L.", rating: 4, comment: "Super confortável. Uso pra treinar e pra sair.", date: "2024-01-28" },
      { name: "Bruno M.", rating: 5, comment: "Melhor jogger que já tive. Tecido muito macio.", date: "2024-02-10" },
    ],
  },
  {
    id: "ovs-tee-cipher",
    name: "CIPHER TEE",
    price: 199.9,
    images: { front: product4, back: product4 },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
      { name: "Bone", hex: "#E8E0D5" },
    ],
    sizes: ["P", "M", "G", "GG", "XGG"],
    drop: "DROP 03",
    category: "Camisetas",
    gender: "unissex",
    unitsLeft: 2,
    soldOut: false,
    limitedEdition: true,
    description: "Camiseta edição limitada com estampa criptográfica em tinta termocrômica — muda de cor com o calor do corpo. Apenas 30 unidades produzidas.",
    fabric: { weight: "250g/m²", composition: "100% Algodão Supima", treatment: "ThermoPrint™ + Enzyme Wash" },
    artist: "N0X",
    conceptStory: "O artista N0X codificou mensagens ocultas na estampa usando padrões de criptografia visual. Quando a tinta aquece com o corpo, revela frases escondidas que só o portador pode ler.",
    sizeGuide: [
      { size: "P", chest: "108cm", length: "72cm", shoulder: "52cm" },
      { size: "M", chest: "114cm", length: "74cm", shoulder: "54cm" },
      { size: "G", chest: "120cm", length: "76cm", shoulder: "56cm" },
      { size: "GG", chest: "126cm", length: "78cm", shoulder: "58cm" },
      { size: "XGG", chest: "132cm", length: "80cm", shoulder: "60cm" },
    ],
    reviews: [
      { name: "Igor V.", rating: 5, comment: "A tinta termocrômica é real! Surpreendeu demais.", date: "2024-02-18" },
      { name: "Letícia R.", rating: 5, comment: "Comprei a última M. Peça única, literalmente.", date: "2024-02-22" },
    ],
  },
  {
    id: "ovs-vest-grid",
    name: "GRID VEST",
    price: 329.9,
    images: { front: product2, back: product2 },
    colors: [
      { name: "Void Black", hex: "#0A0A0A" },
    ],
    sizes: ["P", "M", "G"],
    drop: "DROP 03",
    category: "Coletes",
    gender: "unissex",
    unitsLeft: 0,
    soldOut: true,
    description: "Colete utilitário com 6 bolsos e fechamento em fivela. Tecido ripstop com tratamento impermeável.",
    fabric: { weight: "260g/m²", composition: "100% Nylon Ripstop", treatment: "WaterShield™ DWR Coating" },
    sizeGuide: [
      { size: "P", chest: "104cm", length: "62cm", shoulder: "42cm" },
      { size: "M", chest: "110cm", length: "64cm", shoulder: "44cm" },
      { size: "G", chest: "116cm", length: "66cm", shoulder: "46cm" },
    ],
    reviews: [
      { name: "Henrique A.", rating: 5, comment: "Esgotou rápido por um motivo. Peça absurda.", date: "2024-01-10" },
    ],
  },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
export const getRelatedProducts = (id: string, drop: string) => products.filter(p => p.id !== id && p.drop === drop);
