"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#produtos", label: "Produtos" },
  { href: "#comercial", label: "Comercial" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="font-serif text-2xl text-foreground">
              La Cucina
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button 
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
              asChild
            >
              <a href="https://wa.me/5541995025425" target="_blank" rel="noopener noreferrer">
                Fazer Pedido
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans mt-4"
                asChild
              >
                <a href="https://wa.me/5541995025425" target="_blank" rel="noopener noreferrer">
                  Fazer Pedido
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
