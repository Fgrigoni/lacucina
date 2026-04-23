"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Clock, Wheat, Apple, Cookie } from "lucide-react"

const differentials = [
  {
    icon: Leaf,
    title: "Sem Conservantes",
    description: "Nosso processo é limpo e natural — a partir da pasteurização mantemos o produto estável por, no mínimo, 30 dias."
  },
  {
    icon: Clock,
    title: "Cozimento Lento",
    description: "Horas de fogo baixo e cuidado. Assim como na tradição da nonna, o nosso molho é construído com tempo, atenção e muito amor."
  },
  {
    icon: Wheat,
    title: "Sem Glúten",
    description: "Desde a escolha até o tratamento e preparo do alimento, nossos olhos estão atentos ao que faz ou não parte da receita."
  },
  {
    icon: Apple,
    title: "Tomates Íntegros",
    description: "Partimos nossos tomates um a um antes do cozimento para garantir que apenas o alimento íntegro chegue à mesa."
  },
  {
    icon: Cookie,
    title: "Sem Adição de Açúcares",
    description: "Na nossa cucina não existe atalho. Entregamos presença a partir de ingredientes selecionados e do sabor que apenas o tempo é capaz de entregar."
  }
]

export function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Por que La Cucina
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
