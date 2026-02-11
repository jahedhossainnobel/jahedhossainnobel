import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Award, Cpu, Wifi, Bot, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    category: 'Robotics & Assistive Technology',
    icon: Bot,
    items: [
      {
        title: 'Smart Wheelchair for Disabled Persons',
        description: 'IoT-enabled smart wheelchair with gesture control, obstacle detection, and remote monitoring capabilities for enhanced mobility and independence.',
        technologies: ['Arduino', 'IoT Sensors', 'Gesture Recognition', 'Mobile App'],
        award: 'Bangabandhu Memorial Award',
        featured: true,
      },
      {
        title: 'Line Following Robot',
        description: 'Autonomous robot with advanced line detection algorithms for educational and industrial path-following applications.',
        technologies: ['Microcontroller', 'IR Sensors', 'PID Control', 'C Programming'],
      },
    ],
  },
  {
    category: 'IoT & Smart Grid Systems',
    icon: Wifi,
    items: [
      {
        title: 'Industrial Load Monitoring System',
        description: 'Real-time IoT-based system for monitoring and controlling industrial electrical loads with cloud dashboard and mobile alerts.',
        technologies: ['ESP32', 'Cloud Platform', 'React Dashboard', 'MQTT'],
        featured: true,
      },
      {
        title: 'Smart Grid Power Distribution',
        description: 'IoT-enabled smart grid management system for efficient power distribution and real-time monitoring of electrical networks.',
        technologies: ['IoT Sensors', 'Power Analytics', 'Web Dashboard', 'Database'],
      },
    ],
  },
  {
    category: 'Automation & Embedded Solutions',
    icon: Cpu,
    items: [
      {
        title: 'Home Automation System',
        description: 'Comprehensive smart home solution with voice control, mobile app, and energy monitoring for modern living.',
        technologies: ['Raspberry Pi', 'Voice Assistant', 'Mobile App', 'Cloud Integration'],
      },
      {
        title: 'Automated Irrigation System',
        description: 'Sensor-based automated irrigation system with soil moisture monitoring and weather integration for agricultural optimization.',
        technologies: ['Arduino', 'Soil Sensors', 'GSM Module', 'Solar Power'],
      },
    ],
  },
  {
    category: 'National STEM Initiatives',
    icon: Zap,
    items: [
      {
        title: 'National Robotics Olympiad',
        description: 'Organized and led national-level robotics competitions, engaging thousands of students and promoting STEM education across Bangladesh.',
        technologies: ['Event Management', 'Curriculum Design', 'Mentorship', 'Media Coverage'],
        award: 'NMST Recognition',
      },
      {
        title: 'STEM Education Program',
        description: 'Developed comprehensive STEM curriculum and training programs for schools and institutions nationwide.',
        technologies: ['Curriculum Development', 'Teacher Training', 'Workshop Design', 'Impact Assessment'],
      },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text-teal">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions in robotics, IoT, and STEM education.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.1 + projectIndex * 0.05 }}
                    className="group"
                  >
                    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
                      project.featured 
                        ? 'bg-gradient-to-br from-navy/5 to-teal/5 border-teal/30 hover:border-teal/50 hover:shadow-glow' 
                        : 'bg-card border-border hover:border-teal/30 hover:shadow-medium'
                    }`}>
                      {/* Award Badge */}
                      {project.award && (
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-medium">
                            <Award className="w-3.5 h-3.5" />
                            {project.award}
                          </span>
                        </div>
                      )}

                      <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                        {project.title}
                      </h4>

                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
