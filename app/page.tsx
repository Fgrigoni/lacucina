import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Differentials } from "@/components/sections/differentials"
import { Products } from "@/components/sections/products"
import { ForWho } from "@/components/sections/for-who"
import { Commercial } from "@/components/sections/commercial"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Products />
        <ForWho />
        <Commercial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
