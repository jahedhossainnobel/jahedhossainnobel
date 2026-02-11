import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'IoT-Based Industrial Load Monitoring and Controlling System',
    type: 'Research Paper',
    description: 'Development of a comprehensive IoT system for real-time monitoring and intelligent control of industrial electrical loads, featuring cloud integration and mobile accessibility.',
    keywords: ['IoT', 'Industrial Automation', 'Load Monitoring', 'Cloud Computing'],
    status: 'Published',
  },
  {
    title: 'Smart Grid Power Distribution Management Using IoT Technology',
    type: 'Research Paper',
    description: 'Implementation of IoT-enabled smart grid solutions for efficient power distribution, real-time monitoring, and predictive maintenance in electrical networks.',
    keywords: ['Smart Grid', 'IoT', 'Power Distribution', 'Energy Management'],
    status: 'Published',
  },
];

const researchInterests = [
  'Robotics & Automation Systems',
  'Internet of Things (IoT)',
  'Smart Grid Technology',
  'Embedded Systems Design',
  'Industrial Safety',
  'Environmental Engineering',
  'STEM Education Research',
  'Assistive Technology',
];

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Research
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Publications & <span className="gradient-text-teal">Research</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of engineering through applied research and academic publishing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display font-semibold text-xl text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal" />
              Publications
            </h3>

            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    <BookOpen className="w-3.5 h-3.5" />
                    {pub.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-medium">
                    {pub.status}
                  </span>
                </div>

                <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                  {pub.title}
                </h4>

                <p className="text-sm text-muted-foreground mb-4">
                  {pub.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span 
                      key={keyword} 
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Profile Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="outline" size="lg" asChild>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  <Award className="w-5 h-5" />
                  Google Scholar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  ResearchGate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-xl text-foreground flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-teal" />
              Research Interests
            </h3>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy/5 to-teal/5 border border-teal/20">
              <ul className="space-y-3">
                {researchInterests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                    <span className="text-foreground/90">{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-card border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">
                Open to Collaboration
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in collaborating on research projects in robotics, IoT, and STEM education.
              </p>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
