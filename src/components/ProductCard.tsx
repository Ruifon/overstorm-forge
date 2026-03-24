import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/produto/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded bg-surface-1 aspect-[3/4]">
        <img
          src={product.images.front}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.soldOut && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground border border-muted-foreground px-4 py-2">
              SOLD OUT
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-primary text-primary-foreground text-[10px] font-mono tracking-wider px-2 py-1 rounded-sm">
            {product.drop}
          </span>
        </div>
        <button
          className="absolute top-3 right-3 p-2 bg-background/50 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => { e.preventDefault(); }}
        >
          <Heart className="h-4 w-4 text-foreground" />
        </button>
        {!product.soldOut && product.unitsLeft <= 10 && (
          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] font-mono text-primary animate-pulse-neon">
              {product.unitsLeft} RESTANTES
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-foreground">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        <div className="flex gap-1.5 mt-1">
          {product.colors.map(c => (
            <span
              key={c.name}
              className="w-3 h-3 rounded-full border border-border"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
