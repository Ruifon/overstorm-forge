import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Archive } from "lucide-react";

export default function Drops() {
  const current = products.filter(p => p.drop === "DROP 04");
  const archive = products.filter(p => p.soldOut);

  return (
    <div className="container py-12">
      <div className="mb-10">
        <span className="font-mono text-xs text-primary tracking-[0.3em]">LANÇAMENTOS</span>
        <h1 className="text-3xl font-bold tracking-tight mt-1">DROP 04 — BEYOND THE CODE</h1>
        <p className="text-muted-foreground text-sm mt-2 max-w-lg">
          A quarta coleção da OverStorm explora a intersecção entre tecnologia e identidade urbana.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {current.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {archive.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Archive className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-xl font-bold tracking-tight">ARQUIVO</h2>
            <span className="text-xs text-muted-foreground font-mono">DROPS ANTERIORES</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {archive.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
