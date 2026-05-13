import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsAppButton } from "../components/ui/FloatingWhatsAppButton";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { DifferentialsSection } from "../sections/DifferentialsSection";
import { FaqSection } from "../sections/FaqSection";
import { HeroSection } from "../sections/HeroSection";
import { LocationSection } from "../sections/LocationSection";
import { ReviewsSection } from "../sections/ReviewsSection";
import { ServicesSection } from "../sections/ServicesSection";
import { TeamSection } from "../sections/TeamSection";

export function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <DifferentialsSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
