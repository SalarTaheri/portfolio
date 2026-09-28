import AmbientCanvas from '@/components/AmbientCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsGrid from '@/components/StatsGrid';
import SkillsMatrix from '@/components/SkillsMatrix';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AmbientCanvas />
      <Navbar />
      <main id="content" className="relative z-10">
        <Hero />
        <StatsGrid />
        <SkillsMatrix />
        <ExperienceTimeline />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
