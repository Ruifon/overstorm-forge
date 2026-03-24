import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-main.jpg";

export default function Index() {
  const drop04 = products.filter(p => p.drop === "DROP 04");

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="OverStorm Drop 04"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs tracking-[0.4em] text-primary mb-4 block">
                DROP 04 — DISPONÍVEL AGORA
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                BEYOND<br />
                <span className="text-glow text-primary">THE CODE</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-md mb-8 font-mono">
                Tech-streetwear para quem vive além do padrão. Tecidos com tecnologia DryStorm™.
              </p>
              <div className="flex gap-4">
                <Link to="/drops">
                  <Button size="lg">
                    <Zap className="h-4 w-4" />
                    VER DROP 04
                  </Button>
                </Link>
                <Link to="/colecoes">
                  <Button variant="neon" size="lg">
                    EXPLORAR
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drop 04 grid */}
      <section className="container py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="font-mono text-xs text-primary tracking-[0.3em]">LANÇAMENTO</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">DROP 04</h2>
          </div>
          <Link to="/drops" className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-[0.15em] flex items-center gap-2">
            VER TUDO <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "FEMININO", sub: "Cropped & Oversized", href: "/colecoes/feminino" },
            { label: "MASCULINO", sub: "Tech & Tactical", href: "/colecoes/masculino" },
            { label: "UNISSEX", sub: "Para todos os corpos", href: "/colecoes/unissex" },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group relative bg-surface-1 border border-border rounded p-8 h-48 flex flex-col justify-end hover:border-primary transition-colors"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] mb-1">{cat.sub}</span>
              <span className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{cat.label}</span>
              <ArrowRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Custom Print CTA */}
      <section className="container pb-20">
        <div className="bg-surface-2 border border-border rounded-lg p-10 md:p-16 text-center">
          <span className="font-mono text-xs text-primary tracking-[0.4em]">CUSTOM PRINT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">PERSONALIZE SUA PEÇA</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8">
            Crie estampas únicas com nossa ferramenta de design — incluindo geração por IA. Bordados e prints exclusivos para você.
          </p>
          <Link to="/personalizar">
            <Button variant="neon" size="lg">COMEÇAR A CRIAR</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
