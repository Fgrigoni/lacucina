"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">
            La Cucina · Desde 2020
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            <span className="italic">Seu molho</span>
            <br />
            <span className="italic">pronto.</span>
            <br />
            <span className="italic text-primary">Natural.</span>
            <br />
            <span className="italic">Temperado.</span>
            <br />
            <span className="italic">Saboroso.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
            Tomate, azeite, tempo e nada mais. O sabor que você merece, sem a
            pressa que você não pode ter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base"
            >
              <Link href="#molhos">Comprar agora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5"
            >
              <Link href="#receitas">Ver receitas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
