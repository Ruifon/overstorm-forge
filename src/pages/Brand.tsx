import { Zap, Shield, Users } from "lucide-react";

export default function Brand() {
  return (
    <div className="container py-12">
      {/* Manifesto */}
      <section id="manifesto" className="mb-20">
        <span className="font-mono text-xs text-primary tracking-[0.3em]">MANIFESTO</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-8 max-w-2xl leading-tight">
          VESTIR É UM ATO DE <span className="text-primary text-glow">CÓDIGO</span>
        </h1>
        <div className="max-w-2xl space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            A OverStorm nasceu da fusão entre tecnologia e cultura de rua. Cada peça é projetada 
            para quem entende que moda é linguagem, e o corpo é a interface.
          </p>
          <p>
            Não seguimos tendências — criamos protocolos. Nossos tecidos são desenvolvidos com 
            tecnologia proprietária, testados nas ruas e aprovados pela comunidade.
          </p>
        </div>
      </section>

      {/* Tecnologia */}
      <section id="tecnologia" className="mb-20">
        <div className="neon-line mb-8" />
        <span className="font-mono text-xs text-primary tracking-[0.3em]">TECNOLOGIA</span>
        <h2 className="text-3xl font-bold tracking-tight mt-2 mb-8">TECH FABRIC</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "DryStorm™", desc: "Tratamento anti-odor e secagem rápida. Tecnologia que acompanha seu ritmo." },
            { icon: Shield, title: "UV Protection 50+", desc: "Proteção solar integrada na fibra. Sem produtos químicos na superfície." },
            { icon: Zap, title: "WaterShield™", desc: "Revestimento DWR que repele água sem comprometer a respirabilidade." },
          ].map(item => (
            <div key={item.title} className="bg-surface-1 border border-border rounded p-8">
              <item.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-bold text-sm tracking-tight mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comunidade */}
      <section id="comunidade">
        <div className="neon-line mb-8" />
        <span className="font-mono text-xs text-primary tracking-[0.3em]">COMUNIDADE</span>
        <h2 className="text-3xl font-bold tracking-tight mt-2 mb-4">CREW OVERSTORM</h2>
        <p className="text-sm text-muted-foreground max-w-lg mb-8">
          Mais do que clientes, somos uma comunidade. Conecte-se com outros membros, acesse drops 
          exclusivos e participe de eventos.
        </p>
        <div className="bg-surface-1 border border-border rounded-lg p-10 flex items-center gap-6">
          <Users className="h-10 w-10 text-primary" />
          <div>
            <span className="text-2xl font-bold">2.400+</span>
            <span className="text-xs text-muted-foreground block mt-1">Membros ativos na comunidade</span>
          </div>
        </div>
      </section>
    </div>
  );
}
