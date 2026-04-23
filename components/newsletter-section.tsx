"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-[#3D3630] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] text-white/60 uppercase mb-4">
            Newsletter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-4">
            Receitas e histórias
            <br />
            direto na sua caixa
          </h2>
          <p className="text-white/60 mb-8">
            Sem spam, sem barulho. Apenas boas receitas, novidades da produção e
            eventualmente um desconto especial.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Quero receber
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
