import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, Cpu, Zap, FlaskConical, GraduationCap, 
  LineChart, Smartphone, Globe, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bot,
    title: 'Robotics & IoT Development',
    description: 'Custom robotics solutions and IoT systems for industrial and educational applications.',
    features: ['Robot Design & Fabrication', 'Sensor Integration', 'IoT Architecture', 'Real-time Monitoring'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems Solutions',
    description: 'Microcontroller-based systems and embedded software development for specialized applications.',
    features: ['Firmware Development', 'Hardware-Software Integration', 'PCB Design', 'System Optimization'],
  },
  {
    icon: Zap,
    title: 'Automation & Smart Systems',
    description: 'Industrial automation, smart grid solutions, and intelligent control systems.',
    features: ['PLC Programming', 'SCADA Integration', 'Process Automation', 'Energy Management'],
  },
  {
    icon: FlaskConical,
    title: 'Applied R&D Consulting',
    description: 'Research and development consulting for technology projects and innovation initiatives.',
    features: ['Feasibility Studies', 'Prototype Development', 'Technology Assessment', 'Innovation Strategy'],
  },
  {
    icon: GraduationCap,
    title: 'STEM Education & Training',
    description: 'Robotics and STEM education programs, workshops, and curriculum development.',
    features: ['Workshop Design', 'Curriculum Development', 'Teacher Training', 'Competition Coaching'],
  },
  {
    icon: LineChart,
    title: 'Academic Supervision',
    description: 'Project mentoring and academic supervision for engineering and research students.',
    features: ['Thesis Guidance', 'Research Methodology', 'Publication Support', 'Technical Mentorship'],
  },
  {
    icon: Smartphone,
    title: 'IoT Dashboards & Apps',
    description: 'Custom IoT dashboard development and mobile application solutions for monitoring and control.',
    features: ['Web Dashboards', 'Mobile Apps', 'Data Visualization', 'Cloud Integration'],
  },
  {
    icon: Globe,
    title: 'International Business Consulting',
    description: 'Overseas business development and Alibaba International Station consulting services.',
    features: ['Market Analysis', 'Trade Strategy', 'E-commerce Setup', 'Partner Development'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I <span className="gradient-text-teal">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services spanning engineering, research, education, and business development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-medium transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <service.icon className="w-6 h-6 text-teal" />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-teal-dark transition-colors group/btn"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your project.
          </p>
          <Button variant="default" size="lg" onClick={scrollToContact}>
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
