"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    icon: MapPin,
    title: "Feira Orgânica — Pinheiros",
    subtitle: "SÁBADOS, 8H ÀS 14H",
  },
  {
    icon: MapPin,
    title: "Pedidos online",
    subtitle: "VIA WHATSAPP OU ENCOMENDA",
  },
  {
    icon: MapPin,
    title: "Entrega — São Paulo capital",
    subtitle: "MOTOBOY PRÓPRIO, COMBINAR HORÁRIO",
  },
  {
    icon: Phone,
    title: "contato@lacucina.com.br",
    subtitle: "RESPONDEMOS EM ATÉ 1 DIA ÚTIL",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Fale Conosco
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-4">
              Estamos aqui
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Dúvidas, pedidos especiais ou só queria dizer que o molho ficou
              bom? Adoramos saber.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-transparent border-border/60 rounded-lg"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-transparent border-border/60 rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Em que podemos ajudar?"
                  className="bg-transparent border-border/60 rounded-lg min-h-[120px]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:pl-8">
            {/* WhatsApp Card */}
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pedidos e dúvidas rápidas
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    Falar agora
                  </Button>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Onde Comprar
              </p>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-6 border-b border-border/40 last:border-0"
                  >
                    <location.icon className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-sm">{location.title}</p>
                      <p className="text-xs text-muted-foreground tracking-wide uppercase">
                        {location.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
