import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactHighlights from '@/components/ImpactHighlights';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import ResumeDownload from '@/components/ResumeDownload';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Global mesh grid overlay */}
      <div
        className="fixed inset-0 bg-mesh-grid opacity-100 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ImpactHighlights />
        <TechStack />
        <Projects />
        <Timeline />
        <ResumeDownload />
        <Contact />
      </div>
    </main>
  );
}
