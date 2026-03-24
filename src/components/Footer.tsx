import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1 mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] text-foreground mb-4">COLEÇÕES</h4>
            <div className="space-y-2">
              {["Feminino", "Masculino", "Unissex", "Todos"].map(l => (
                <Link key={l} to="/colecoes" className="block text-xs text-muted-foreground hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] text-foreground mb-4">DROPS</h4>
            <div className="space-y-2">
              {["Drop 04", "Arquivo", "Collabs"].map(l => (
                <Link key={l} to="/drops" className="block text-xs text-muted-foreground hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] text-foreground mb-4">MARCA</h4>
            <div className="space-y-2">
              {["Manifesto", "Tecnologia", "Comunidade"].map(l => (
                <Link key={l} to="/marca" className="block text-xs text-muted-foreground hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] text-foreground mb-4">AJUDA</h4>
            <div className="space-y-2">
              {["Trocas & Devoluções", "FAQ", "Contato", "Rastreio"].map(l => (
                <span key={l} className="block text-xs text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="neon-line mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold tracking-[0.3em] text-sm">OVER<span className="text-primary">STORM</span></span>
          <span className="text-xs text-muted-foreground font-mono">© 2024 OVERSTORM. TODOS OS DIREITOS RESERVADOS.</span>
          <div className="flex gap-3">
            <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
