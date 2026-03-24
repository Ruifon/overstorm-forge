import { Package, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="container py-12">
      <div className="mb-10">
        <span className="font-mono text-xs text-primary tracking-[0.3em]">ÁREA DO CLIENTE</span>
        <h1 className="text-3xl font-bold tracking-tight mt-1">MINHA CONTA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Package, title: "MEUS PEDIDOS", desc: "Acompanhe seus pedidos e histórico de compras.", href: "/conta/pedidos" },
          { icon: User, title: "PERFIL", desc: "Edite suas informações pessoais e endereços.", href: "/conta/perfil" },
          { icon: Heart, title: "WISHLIST", desc: "Peças salvas para comprar depois.", href: "/conta/wishlist" },
        ].map(item => (
          <Link
            key={item.title}
            to={item.href}
            className="bg-surface-1 border border-border rounded-lg p-8 hover:border-primary transition-colors group"
          >
            <item.icon className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-bold text-sm tracking-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
