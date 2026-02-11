import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Awards from '@/components/Awards';
import Media from '@/components/Media';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Research />
      <Awards />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
