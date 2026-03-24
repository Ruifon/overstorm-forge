import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, QrCode, Barcode, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

type Step = "info" | "payment" | "confirmation";
type PaymentMethod = "card" | "pix" | "boleto";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("info");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [formData, setFormData] = useState({
    name: "", email: "", cpf: "", phone: "",
    cep: "", street: "", number: "", complement: "", neighborhood: "", city: "", state: "",
    cardNumber: "", cardName: "", cardExpiry: "", cardCvv: "",
  });

  const shipping = totalPrice >= 299 ? 0 : 29.9;
  const finalTotal = totalPrice + shipping;

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleFinish = () => {
    setStep("confirmation");
    clearCart();
  };

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground font-mono mb-4">Seu carrinho está vazio.</p>
        <Link to="/">
          <Button variant="neon">VOLTAR À LOJA</Button>
        </Link>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div className="container py-20 max-w-lg mx-auto text-center">
        <div className="bg-primary/10 border border-primary rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">PEDIDO CONFIRMADO!</h1>
        <p className="text-muted-foreground text-sm font-mono mb-2">Pedido #OVS-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
        <p className="text-sm text-muted-foreground mb-8">Você receberá um e-mail com os detalhes do pedido e rastreamento.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/conta">
            <Button variant="outline">MEUS PEDIDOS</Button>
          </Link>
          <Link to="/">
            <Button>CONTINUAR COMPRANDO</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors";

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-6 font-mono">
        <ArrowLeft className="h-4 w-4" /> VOLTAR
      </button>

      {/* Steps indicator */}
      <div className="flex items-center gap-4 mb-10">
        {[
          { key: "info", label: "DADOS" },
          { key: "payment", label: "PAGAMENTO" },
        ].map((s, i) => (
          <div key={s.key} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step === s.key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}>
              {i + 1}
            </div>
            <span className={`text-xs font-mono tracking-[0.15em] ${step === s.key ? "text-foreground" : "text-muted-foreground"}`}>
              {s.label}
            </span>
            {i === 0 && <div className="w-12 h-px bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          {step === "info" && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold tracking-tight">DADOS PESSOAIS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className={inputClass} placeholder="Nome completo" value={formData.name} onChange={handleChange("name")} />
                <input className={inputClass} placeholder="E-mail" type="email" value={formData.email} onChange={handleChange("email")} />
                <input className={inputClass} placeholder="CPF" value={formData.cpf} onChange={handleChange("cpf")} />
                <input className={inputClass} placeholder="Telefone" value={formData.phone} onChange={handleChange("phone")} />
              </div>

              <h2 className="text-lg font-bold tracking-tight pt-4">ENDEREÇO DE ENTREGA</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className={inputClass} placeholder="CEP" value={formData.cep} onChange={handleChange("cep")} />
                <input className={`${inputClass} md:col-span-2`} placeholder="Rua" value={formData.street} onChange={handleChange("street")} />
                <input className={inputClass} placeholder="Número" value={formData.number} onChange={handleChange("number")} />
                <input className={inputClass} placeholder="Complemento" value={formData.complement} onChange={handleChange("complement")} />
                <input className={inputClass} placeholder="Bairro" value={formData.neighborhood} onChange={handleChange("neighborhood")} />
                <input className={inputClass} placeholder="Cidade" value={formData.city} onChange={handleChange("city")} />
                <input className={inputClass} placeholder="Estado" value={formData.state} onChange={handleChange("state")} />
              </div>

              <Button size="lg" className="w-full md:w-auto" onClick={() => setStep("payment")}>
                IR PARA PAGAMENTO
              </Button>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold tracking-tight">FORMA DE PAGAMENTO</h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "card" as const, icon: CreditCard, label: "CARTÃO" },
                  { key: "pix" as const, icon: QrCode, label: "PIX" },
                  { key: "boleto" as const, icon: Barcode, label: "BOLETO" },
                ].map(m => (
                  <button
                    key={m.key}
                    onClick={() => setPaymentMethod(m.key)}
                    className={`flex flex-col items-center gap-2 p-4 border rounded transition-all ${
                      paymentMethod === m.key ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <m.icon className="h-5 w-5" />
                    <span className="text-[10px] font-mono tracking-wider">{m.label}</span>
                  </button>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <input className={inputClass} placeholder="Número do cartão" value={formData.cardNumber} onChange={handleChange("cardNumber")} />
                  <input className={inputClass} placeholder="Nome no cartão" value={formData.cardName} onChange={handleChange("cardName")} />
                  <div className="grid grid-cols-2 gap-4">
                    <input className={inputClass} placeholder="MM/AA" value={formData.cardExpiry} onChange={handleChange("cardExpiry")} />
                    <input className={inputClass} placeholder="CVV" value={formData.cardCvv} onChange={handleChange("cardCvv")} />
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="bg-secondary/30 border border-border rounded p-6 text-center">
                  <QrCode className="h-32 w-32 mx-auto text-primary mb-4" />
                  <p className="text-xs text-muted-foreground font-mono">QR Code será gerado após confirmar o pedido</p>
                  <p className="text-primary text-sm font-bold mt-2">5% de desconto no PIX!</p>
                </div>
              )}

              {paymentMethod === "boleto" && (
                <div className="bg-secondary/30 border border-border rounded p-6 text-center">
                  <Barcode className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-xs text-muted-foreground font-mono">Boleto será gerado após confirmar o pedido</p>
                  <p className="text-xs text-muted-foreground mt-1">Prazo de compensação: até 3 dias úteis</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("info")}>VOLTAR</Button>
                <Button size="lg" className="flex-1" onClick={handleFinish}>
                  <Lock className="h-4 w-4" />
                  FINALIZAR PEDIDO — R$ {finalTotal.toFixed(2).replace(".", ",")}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="bg-card border border-border rounded p-6 h-fit sticky top-24">
          <h3 className="font-bold text-sm tracking-[0.1em] mb-4">RESUMO DO PEDIDO</h3>
          <div className="space-y-3 mb-4">
            {items.map(item => (
              <div key={`${item.product.id}-${item.size}-${item.colorIndex}`} className="flex justify-between text-xs">
                <span className="text-muted-foreground">
                  {item.quantity}x {item.product.name} ({item.size})
                </span>
                <span className="text-foreground font-mono">
                  R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-mono">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Frete</span>
              <span className={`font-mono ${shipping === 0 ? "text-primary" : ""}`}>
                {shipping === 0 ? "GRÁTIS" : `R$ ${shipping.toFixed(2).replace(".", ",")}`}
              </span>
            </div>
            {paymentMethod === "pix" && (
              <div className="flex justify-between text-xs">
                <span className="text-primary">Desconto PIX (5%)</span>
                <span className="text-primary font-mono">-R$ {(finalTotal * 0.05).toFixed(2).replace(".", ",")}</span>
              </div>
            )}
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-bold text-sm">TOTAL</span>
              <span className="font-bold text-lg text-primary">
                R$ {(paymentMethod === "pix" ? finalTotal * 0.95 : finalTotal).toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
