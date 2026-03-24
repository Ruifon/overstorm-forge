import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "COLEÇÕES",
    href: "/colecoes",
    sub: [
      { label: "Feminino", href: "/colecoes/feminino" },
      { label: "Masculino", href: "/colecoes/masculino" },
      { label: "Unissex", href: "/colecoes/unissex" },
    ],
  },
  {
    label: "DROPS",
    href: "/drops",
    sub: [
      { label: "Drop 04 — Atual", href: "/drops" },
      { label: "Arquivo", href: "/drops/arquivo" },
      { label: "Collabs", href: "/drops/collabs" },
    ],
  },
  { label: "PERSONALIZAR", href: "/personalizar" },
  {
    label: "MARCA",
    href: "/marca",
    sub: [
      { label: "Manifesto", href: "/marca#manifesto" },
      { label: "Tecnologia", href: "/marca#tecnologia" },
      { label: "Comunidade", href: "/marca#comunidade" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Promo banner */}
      <div className="bg-primary text-primary-foreground text-center text-xs font-mono tracking-widest py-2 px-4">
        FRETE GRÁTIS ACIMA DE R$299 — DROP 04 DISPONÍVEL
      </div>

      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl tracking-[0.3em] text-foreground">
            OVER<span className="text-primary">STORM</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
                <Link
                  to={link.href}
                  className={`text-xs tracking-[0.2em] font-medium transition-colors hover:text-primary ${
                    location.pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                {link.sub && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded p-3 min-w-[180px] space-y-1">
                      {link.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          className="block text-xs text-muted-foreground hover:text-primary py-1.5 px-2 rounded hover:bg-secondary transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/conta/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/conta">
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-border overflow-hidden"
            >
              <div className="container py-4">
                <input
                  autoFocus
                  placeholder="Buscar produtos, drops, collabs..."
                  className="w-full bg-transparent text-foreground text-sm font-mono placeholder:text-muted-foreground outline-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-bold text-xl tracking-[0.3em]">
                OVER<span className="text-primary">STORM</span>
              </span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="px-6 space-y-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-semibold tracking-[0.15em] text-foreground"
                  >
                    {link.label}
                  </Link>
                  {link.sub && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-primary"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
