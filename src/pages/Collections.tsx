import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Collections() {
  const { gender } = useParams();

  const filtered = gender
    ? products.filter(p => p.gender === gender)
    : products;

  const title = gender
    ? gender.charAt(0).toUpperCase() + gender.slice(1)
    : "Todas as Coleções";

  return (
    <div className="container py-12">
      <div className="mb-10">
        <span className="font-mono text-xs text-primary tracking-[0.3em]">COLEÇÕES</span>
        <h1 className="text-3xl font-bold tracking-tight mt-1">{title}</h1>
      </div>

      <div className="flex gap-3 mb-8">
        {["Todos", "Feminino", "Masculino", "Unissex"].map(f => {
          const href = f === "Todos" ? "/colecoes" : `/colecoes/${f.toLowerCase()}`;
          const active = (f === "Todos" && !gender) || gender === f.toLowerCase();
          return (
            <a
              key={f}
              href={href}
              className={`text-xs tracking-[0.15em] px-4 py-2 rounded border transition-colors ${
                active ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {f}
            </a>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted-foreground text-center py-20 font-mono text-sm">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </div>
  );
}
