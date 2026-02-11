import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, Cpu, Wifi, CircuitBoard, Cog, BookOpen, 
  Zap, Briefcase, Users 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Robotics & Mechatronics',
    icon: Bot,
    skills: ['Robot Design & Development', 'Motion Control Systems', 'Sensor Integration', 'Actuator Systems'],
    color: 'teal',
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    skills: ['C/C++ Programming', 'Microcontroller Development', 'Arduino & Raspberry Pi', 'Real-time Systems'],
    color: 'navy',
  },
  {
    title: 'IoT & Monitoring',
    icon: Wifi,
    skills: ['IoT Architecture', 'Sensor Networks', 'Cloud Integration', 'Dashboard Development'],
    color: 'teal',
  },
  {
    title: 'Electronics Design',
    icon: CircuitBoard,
    skills: ['PCB Design & Fabrication', 'Circuit Analysis', 'Power Electronics', 'Signal Processing'],
    color: 'navy',
  },
  {
    title: 'CAD & Mechanical',
    icon: Cog,
    skills: ['SolidWorks', 'AutoCAD', 'Mechanical Design', '3D Printing & Prototyping'],
    color: 'teal',
  },
  {
    title: 'Research & Publishing',
    icon: BookOpen,
    skills: ['Academic Writing', 'Literature Review', 'Data Analysis', 'Peer-reviewed Publishing'],
    color: 'navy',
  },
  {
    title: 'Automation Systems',
    icon: Zap,
    skills: ['PLC Programming', 'SCADA Systems', 'Industrial Automation', 'Smart Grid Technology'],
    color: 'teal',
  },
  {
    title: 'Business & Trade',
    icon: Briefcase,
    skills: ['International Trade', 'E-commerce (Alibaba)', 'Business Development', 'Market Analysis'],
    color: 'navy',
  },
  {
    title: 'Leadership & Mentoring',
    icon: Users,
    skills: ['Project Management', 'Team Leadership', 'STEM Education', 'Student Mentorship'],
    color: 'teal',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text-teal">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning engineering, research, and leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-medium transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  category.color === 'teal' 
                    ? 'bg-teal/10 group-hover:bg-teal/20' 
                    : 'bg-navy/10 group-hover:bg-navy/15'
                }`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === 'teal' ? 'text-teal' : 'text-navy'
                  }`} />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'teal' ? 'bg-teal' : 'bg-navy'
                      }`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
