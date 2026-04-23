"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Tomate + Tomate",
    description: "Encorpado, natural e saboroso! Nosso molho mais tradicional serve de base para preparo de caldos, molhos para massas, pizzas, lanches rápidos ou mesmo como tempero para qualquer receita!",
    ingredients: "Tomates maduros, azeite de oliva extra virgem, sal marinho, dentes de alho inteiros e só!",
    color: "bg-primary/10",
    borderColor: "border-primary/30"
  },
  {
    name: "Tomate + Manjericão",
    description: "Nossa versão com manjericão sustenta os mesmos princípios, trazendo como adicional o frescor e aroma do manjericão que eleva qualquer receita a outro patamar!",
    ingredients: "Tomates maduros, manjericão fresco, azeite de oliva extra virgem, sal marinho, dentes de alho inteiros e só!",
    color: "bg-secondary/10",
    borderColor: "border-secondary/30"
  }
]

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="produtos" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Nossos Molhos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Portfólio
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            premium • artesanal • presenteável • versátil • clean label • italiano contemporâneo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className={`${product.color} p-8 md:p-10 rounded-3xl border ${product.borderColor} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {product.name}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-sans text-sm text-foreground">
                    <span className="font-medium text-primary">Ingredientes:</span>{" "}
                    {product.ingredients}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-accent/30 backdrop-blur-sm px-8 py-6 rounded-2xl border border-accent">
            <p className="font-sans text-sm text-muted-foreground mb-2">Preço sugerido ao consumidor</p>
            <p className="font-serif text-4xl md:text-5xl text-foreground">
              R$32 — R$36
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-2">
              Validade: 30 dias (fechado) • Após aberto, refrigerar e consumir em até 3 dias
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
