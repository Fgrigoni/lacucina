"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Package, Truck, CreditCard } from "lucide-react"

export function Commercial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="comercial" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Para Lojistas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Oportunidade Comercial
          </h2>
          <p className="font-serif text-xl text-primary italic max-w-2xl mx-auto">
            algumas prateleiras vendem produtos. outras criam experiências.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center"
          >
            <Package className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-foreground mb-2">Kit 6 unidades</h3>
            <p className="font-sans text-muted-foreground mb-4">Pedido mínimo inicial • Mix livre de sabores</p>
            <p className="font-serif text-4xl text-primary">R$ 120,00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-secondary/5 p-8 rounded-2xl border border-secondary/20 text-center"
          >
            <Package className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-foreground mb-2">Kit 12 unidades</h3>
            <p className="font-sans text-muted-foreground mb-4">Mínimo para reposição • Mix livre de sabores</p>
            <p className="font-serif text-4xl text-secondary">R$ 240,00</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-xl">
              <Truck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Prazo de Entrega</h4>
                <p className="font-sans text-sm text-muted-foreground">2 a 5 dias úteis (Curitiba e região)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-xl">
              <CreditCard className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Condições</h4>
                <p className="font-sans text-sm text-muted-foreground">Primeiro pedido antecipado. Recorrentes com prazo de 7 dias.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
