import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsAppButton } from "../components/ui/FloatingWhatsAppButton";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { DifferentialsSection } from "../sections/DifferentialsSection";
import { HeroSection } from "../sections/HeroSection";
import { ReviewsSection } from "../sections/ReviewsSection";
import { ServicesSection } from "../sections/ServicesSection";

export function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
