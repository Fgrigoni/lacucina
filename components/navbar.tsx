"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WHATSAPP_NUMBER = "5541995025425";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#molhos", label: "Molhos" },
  { href: "#receitas", label: "Receitas" },
  { href: "#nossa-historia", label: "Nossa História" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground">
            La Cucina
          </span>
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Molhos Artesanais
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Comprar
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
