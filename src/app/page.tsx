import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RecruiterQuickView from '@/components/RecruiterQuickView';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary transition-colors duration-200">
      <Navbar />
      <Hero />
      <RecruiterQuickView />
      <TechStack />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
