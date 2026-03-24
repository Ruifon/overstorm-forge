import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Truck, Star, Paintbrush, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id || "");
  const [view, setView] = useState<"front" | "back">("front");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cep, setCep] = useState("");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground font-mono">Produto não encontrado.</p>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, product.drop);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex gap-2 text-xs text-muted-foreground font-mono mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/colecoes" className="hover:text-primary">Coleções</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Gallery */}
        <div className="relative">
          <div className="aspect-square bg-surface-1 rounded overflow-hidden">
            <motion.img
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={product.images[view]}
              alt={`${product.name} ${view}`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* View toggle */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {(["front", "back"] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 text-xs font-mono tracking-[0.2em] transition-all rounded ${
                  view === v
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/80 backdrop-blur text-foreground border border-border hover:border-primary"
                }`}
              >
                {v === "front" ? "FRENTE" : "COSTAS"}
              </button>
            ))}
          </div>
          {/* Drop tag */}
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-mono tracking-[0.3em] px-3 py-1.5 rounded-sm">
            {product.drop}
          </span>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
            <span className="text-xs font-mono text-muted-foreground">
              ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-6">{product.description}</p>

          {/* Colors */}
          <div className="mb-6">
            <span className="text-xs font-mono tracking-[0.15em] text-muted-foreground mb-3 block">
              COR — {product.colors[selectedColor].name}
            </span>
            <div className="flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    i === selectedColor ? "border-primary scale-110" : "border-border hover:border-muted-foreground"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono tracking-[0.15em] text-muted-foreground">TAMANHO</span>
              <button
                onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                className="text-xs text-primary hover:underline"
              >
                Guia de tamanhos
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`min-w-[48px] h-10 px-3 text-xs font-mono tracking-wider border rounded transition-all ${
                    selectedSize === s
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-6">
            <Button
              size="lg"
              className="flex-1"
              disabled={product.soldOut || !selectedSize}
            >
              <ShoppingBag className="h-4 w-4" />
              {product.soldOut ? "ESGOTADO" : "ADICIONAR AO CARRINHO"}
            </Button>
            <Button variant="outline" size="icon" className="h-[44px] w-[44px]">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Units left + urgency */}
          {!product.soldOut && product.unitsLeft <= 15 && (
            <div className="flex items-center gap-2 mb-6 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
              <span className="text-primary">{product.unitsLeft} unidades restantes</span>
            </div>
          )}

          {/* Shipping */}
          <div className="border border-border rounded p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-mono tracking-[0.1em] text-muted-foreground">CALCULAR FRETE</span>
            </div>
            <div className="flex gap-2">
              <input
                value={cep}
                onChange={e => setCep(e.target.value)}
                placeholder="00000-000"
                maxLength={9}
                className="flex-1 bg-surface-1 border border-border rounded px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
              />
              <Button variant="outline" size="sm">CALCULAR</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Size guide */}
      {sizeGuideOpen && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-12 overflow-hidden"
        >
          <h3 className="text-lg font-bold tracking-tight mb-4">GUIA DE TAMANHOS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-muted-foreground">Tamanho</th>
                  <th className="text-left py-3 pr-6 text-muted-foreground">Peito</th>
                  <th className="text-left py-3 pr-6 text-muted-foreground">Comprimento</th>
                  <th className="text-left py-3 text-muted-foreground">Ombro</th>
                </tr>
              </thead>
              <tbody>
                {product.sizeGuide.map(row => (
                  <tr key={row.size} className="border-b border-border/50">
                    <td className="py-3 pr-6 font-semibold text-foreground">{row.size}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{row.chest}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{row.length}</td>
                    <td className="py-3 text-muted-foreground">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      )}

      {/* Fabric tech */}
      <section className="mt-16">
        <div className="neon-line mb-8" />
        <h3 className="text-lg font-bold tracking-tight mb-6">TECNOLOGIA DO TECIDO</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "GRAMATURA", value: product.fabric.weight },
            { label: "COMPOSIÇÃO", value: product.fabric.composition },
            { label: "TRATAMENTO", value: product.fabric.treatment },
          ].map(item => (
            <div key={item.label} className="bg-surface-1 border border-border rounded p-6">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary block mb-2">{item.label}</span>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Concept + Artist */}
      {product.conceptStory && (
        <section className="mt-16">
          <div className="neon-line mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary block mb-3">CONCEITO</span>
              <h3 className="text-lg font-bold tracking-tight mb-4">A HISTÓRIA POR TRÁS DA ESTAMPA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.conceptStory}</p>
            </div>
            <div className="bg-surface-1 border border-border rounded p-8 flex flex-col justify-center">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary block mb-2">ARTISTA</span>
              <span className="text-2xl font-bold">{product.artist}</span>
              <span className="text-xs text-muted-foreground mt-2">Artista visual e designer gráfico baseado em São Paulo.</span>
            </div>
          </div>
        </section>
      )}

      {/* Custom CTA */}
      <section className="mt-16">
        <div className="bg-surface-2 border border-border rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Paintbrush className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold text-sm tracking-tight">PERSONALIZE ESTA PEÇA</h3>
              <p className="text-xs text-muted-foreground">Adicione bordados, estampas ou crie com IA</p>
            </div>
          </div>
          <Link to="/personalizar">
            <Button variant="neon" size="sm">PERSONALIZAR</Button>
          </Link>
        </div>
      </section>

      {/* Reviews */}
      {product.reviews.length > 0 && (
        <section className="mt-16">
          <div className="neon-line mb-8" />
          <h3 className="text-lg font-bold tracking-tight mb-6">
            AVALIAÇÕES ({product.reviews.length})
          </h3>
          <div className="space-y-6">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-surface-1 border border-border rounded p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-3 w-3 ${s < review.rating ? "text-primary fill-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-foreground">{review.name}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="neon-line mb-8" />
          <h3 className="text-lg font-bold tracking-tight mb-6">
            DO MESMO DROP — PRODUTOS RELACIONADOS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
