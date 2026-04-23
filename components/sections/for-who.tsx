"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Gift, ChefHat, Timer, Heart, Salad } from "lucide-react"

const audiences = [
  {
    icon: Gift,
    text: "Para quem gosta de presentear com consciência"
  },
  {
    icon: ChefHat,
    text: "Para os apreciadores da boa gastronomia"
  },
  {
    icon: Timer,
    text: "Para quem precisa de praticidade e qualidade à mesa"
  },
  {
    icon: Heart,
    text: "Para quem agrega, cuida da família e entrega sabor"
  },
  {
    icon: Salad,
    text: "Para todos que buscam manter uma rotina saudável"
  }
]

export function ForWho() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Feito com carinho
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Para Quem É
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex items-center gap-6 bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-sans text-lg text-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
