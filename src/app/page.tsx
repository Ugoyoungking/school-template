import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProgramsSection } from '@/components/landing/ProgramsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
