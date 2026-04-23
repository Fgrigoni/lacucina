"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Instagram } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Vamos Conversar
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mb-8">
            Entre em Contato
          </h2>
          <p className="font-sans text-lg text-background/70 mb-12 leading-relaxed">
            Quer saber mais sobre nossos produtos ou fazer um pedido? 
            Entre em contato conosco pelo WhatsApp ou nos siga no Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans text-base px-8 py-6"
              asChild
            >
              <a href="https://wa.me/5541995025425" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                (41) 99502-5425
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-background/30 text-background hover:bg-background/10 font-sans text-base px-8 py-6"
              asChild
            >
              <a href="https://instagram.com/suacucina" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                @suacucina
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
