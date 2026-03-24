import { Paintbrush, Sparkles, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Customize() {
  return (
    <div className="container py-12">
      <div className="mb-10">
        <span className="font-mono text-xs text-primary tracking-[0.3em]">CUSTOM PRINT</span>
        <h1 className="text-3xl font-bold tracking-tight mt-1">PERSONALIZE SUA PEÇA</h1>
        <p className="text-muted-foreground text-sm mt-2 max-w-lg">
          Crie designs únicos com nossas ferramentas de customização. Escolha entre bordado, serigrafia ou geração por IA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Paintbrush,
            title: "BORDADO CUSTOM",
            desc: "Bordado computadorizado em até 6 cores. Ideal para logos, nomes e arte minimalista.",
            cta: "CRIAR BORDADO",
          },
          {
            icon: Upload,
            title: "ESTAMPA PERSONALIZADA",
            desc: "Envie sua arte ou foto. Impressão em serigrafia HD ou transfer digital de alta resolução.",
            cta: "ENVIAR ARTE",
          },
          {
            icon: Sparkles,
            title: "GERAÇÃO POR IA",
            desc: "Descreva sua ideia e nossa IA gera uma estampa exclusiva. Edite, ajuste e aplique na peça.",
            cta: "GERAR COM IA",
          },
        ].map((item) => (
          <div key={item.title} className="bg-surface-1 border border-border rounded-lg p-8 flex flex-col">
            <item.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-sm tracking-tight mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground flex-1 mb-6">{item.desc}</p>
            <Button variant="neon" size="sm" className="w-full">{item.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
