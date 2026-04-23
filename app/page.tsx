import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ValuesSection } from "@/components/values-section";
import { StorySection } from "@/components/story-section";
import { ProcessSection } from "@/components/process-section";
import { RecipesSection } from "@/components/recipes-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ValuesSection />
      <StorySection />
      <ProcessSection />
      <RecipesSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
