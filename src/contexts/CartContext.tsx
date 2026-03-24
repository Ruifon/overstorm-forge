import { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  size: string;
  colorIndex: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, colorIndex: number) => void;
  removeItem: (productId: string, size: string, colorIndex: number) => void;
  updateQuantity: (productId: string, size: string, colorIndex: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const findIndex = (productId: string, size: string, colorIndex: number) =>
    items.findIndex(i => i.product.id === productId && i.size === size && i.colorIndex === colorIndex);

  const addItem = (product: Product, size: string, colorIndex: number) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id && i.size === size && i.colorIndex === colorIndex);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { product, size, colorIndex, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (productId: string, size: string, colorIndex: number) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.size === size && i.colorIndex === colorIndex)));
  };

  const updateQuantity = (productId: string, size: string, colorIndex: number, quantity: number) => {
    if (quantity <= 0) return removeItem(productId, size, colorIndex);
    setItems(prev => {
      const idx = prev.findIndex(i => i.product.id === productId && i.size === size && i.colorIndex === colorIndex);
      if (idx < 0) return prev;
      const next = [...prev];
      next[idx] = { ...next[idx], quantity };
      return next;
    });
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
