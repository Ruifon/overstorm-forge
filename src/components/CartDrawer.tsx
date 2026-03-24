import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-background/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-bold text-lg tracking-tight">CARRINHO ({totalItems})</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground font-mono">Seu carrinho está vazio</p>
                  <Button variant="neon" size="sm" className="mt-4" onClick={() => setIsCartOpen(false)}>
                    CONTINUAR COMPRANDO
                  </Button>
                </div>
              ) : (
                items.map((item) => {
                  const color = item.product.colors[item.colorIndex];
                  return (
                    <div key={`${item.product.id}-${item.size}-${item.colorIndex}`} className="flex gap-4 bg-secondary/30 border border-border rounded p-3">
                      <img
                        src={item.product.images.front}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-semibold tracking-[0.1em] text-foreground truncate">{item.product.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="w-3 h-3 rounded-full border border-border"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-[10px] text-muted-foreground font-mono">{color.name}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">• {item.size}</span>
                        </div>
                        <span className="text-sm font-bold text-primary mt-1 block">
                          R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                        </span>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-border rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.colorIndex, item.quantity - 1)}
                              className="p-1.5 hover:bg-secondary transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-xs font-mono">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.colorIndex, item.quantity + 1)}
                              className="p-1.5 hover:bg-secondary transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size, item.colorIndex)}
                            className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono tracking-[0.15em] text-muted-foreground">SUBTOTAL</span>
                  <span className="text-lg font-bold text-foreground">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono block">
                  ou 3x de R$ {(totalPrice / 3).toFixed(2).replace(".", ",")} sem juros
                </span>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full" size="lg">
                    FINALIZAR COMPRA
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
                  CONTINUAR COMPRANDO
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
