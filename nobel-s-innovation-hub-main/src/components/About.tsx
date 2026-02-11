import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Award, Target, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Target,
      title: 'Research Focus',
      description:
        'Designing intelligent robotics and IoT-driven systems, with research spanning smart grids, automation, embedded technologies, and safety-oriented engineering solutions.',
    },
    {
      icon: Award,
      title: 'National Recognition',
      description:
        'Recognized as a National Robotics Activist by the Ministry of Science and Technology, Bangladesh, for impactful innovation, leadership, and contribution to STEM advancement.',
    },
    {
      icon: Users,
      title: 'STEM Leadership',
      description:
        'Driving nationwide robotics and science initiatives, inspiring and mentoring thousands of students through hands-on learning, competitions, and innovation programs.',
    },
    {
      icon: MapPin,
      title: 'Global Presence',
      description:
        'Actively engaged across Bangladesh and China, collaborating with academic institutions and industry partners within an international research and innovation ecosystem.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            ABOUT THE JOURNEY
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Engineer, Researcher &{' '}
            <span className="gradient-text-teal">Innovator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building intelligent systems, advancing research, and empowering the next generation through
            technology and education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground text-justify leading-relaxed mb-6">
                <span className="font-semibold text-navy">
                  Mohammad Jahed Hossain Nobel
                </span>{' '}
                is a Bangladeshi engineer, researcher, and science entrepreneur whose work lies at the
                intersection of robotics, mechatronics, and intelligent systems. His engineering journey
                began with a strong foundation in electronics at Chattogram Polytechnic Institute and
                evolved through advanced studies in Mechatronic Engineering at Shandong University of
                Science and Technology, China.
              </p>

              <p className="text-foreground text-justify leading-relaxed mb-6">
                Currently pursuing a Master’s degree in Safety Science and Environmental Engineering, he
                focuses on translating academic research into practical, real-world solutions. His work
                bridges theory and application—ranging from IoT-based industrial monitoring systems to
                smart, automation-driven technologies designed to enhance efficiency, safety, and
                sustainability.
              </p>

              <p className="text-foreground text-justify leading-relaxed">
                As the{' '}
                <span className="font-semibold text-teal">
                  Founder and Director of Research Lab Bangladesh
                </span>
                , a nationally accredited organization under the National Museum of Science and
                Technology (NMST), Ministry of Science and Technology, he has led pioneering robotics
                olympiads, STEM education programs, and government-funded innovation initiatives. Through
                these efforts, he continues to cultivate a research-driven culture that empowers young
                innovators and expands access to advanced technology education across Bangladesh.
              </p>
            </div>

            {/* Location Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium">
                <MapPin className="w-4 h-4 text-teal" />
                Chattogram, Bangladesh
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium">
                <MapPin className="w-4 h-4 text-teal" />
                Qingdao, China
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
