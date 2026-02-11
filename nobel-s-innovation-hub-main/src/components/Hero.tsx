import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Briefcase, Newspaper, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-nobel.jpg';

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '5000+', label: 'Students Impacted' },
  { value: '10+', label: 'Awards & Honors' },
];

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--teal) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--cyan) / 0.2) 0%, transparent 50%)`,
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-teal/20 blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-cyan/15 blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Robotics & IoT Innovator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight"
            >
              Mohammad Jahed
              <br />
              Hossain{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-cyan">
                Nobel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-medium"
            >
              Engineer | Researcher | Founder & Director
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specializing in robotics, mechatronics, and IoT systems. Leading national STEM initiatives 
              as Founder of Research Lab Bangladesh, recognized by the Ministry of Science and Technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                <Briefcase className="w-5 h-5" />
                View Projects
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection('#research')}
              >
                <BookOpen className="w-5 h-5" />
                Research & Publications
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-6 justify-center lg:justify-start"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('#media')}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Newspaper className="w-4 h-4" />
                Media & News
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal to-cyan rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-large"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Mohammad Jahed Hossain Nobel"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-3 shadow-large"
              >
                <p className="text-xs font-medium text-muted-foreground">Founder & Director</p>
                <p className="text-sm font-semibold text-foreground">Research Lab Bangladesh</p>
              </motion.div>

              {/* Award Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: 'spring' }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-teal to-teal-light rounded-full p-3 shadow-glow"
              >
                <span className="text-xl">🏆</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <p className="text-3xl md:text-4xl font-bold text-teal mb-1">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
