"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              O verdadeiro sabor não precisa de excessos
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p>
              Resgatamos o tempo em que o molho era feito sem pressa, com ingredientes simples, 
              escolhidos com cuidado e respeito. O aroma que invade a casa, o barulho suave da panela, 
              o gesto de servir — tudo carrega memória, afeto e presença.
            </p>
            <p>
              Nossa cozinha é tradicional, mas não parada no tempo. É viva, leve, atual. 
              Respeita as origens e conversa com o hoje. Porque o verdadeiro sabor não precisa 
              de excessos — ele só precisa ser bem feito.
            </p>
            <p>
              Aqui, cada receita nasce para ser compartilhada. Para quem cozinha todos os dias e 
              para quem está começando agora. Para mesas cheias e momentos solo — de conexão consigo mesmo. 
              Para avós, filhos, amigos — e todos que acreditam que a boa comida aproxima.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-primary italic">
              La Cucina é sobre isso: transformar o simples em especial, todos os dias.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
