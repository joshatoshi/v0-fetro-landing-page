import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductsSection } from "@/components/products-section"
import { TechnologySection } from "@/components/technology-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ProductsSection />
      <TechnologySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
