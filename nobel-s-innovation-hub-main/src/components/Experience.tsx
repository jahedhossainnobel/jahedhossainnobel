import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

/* ---------------------------------
   Experience Data (IMAGE LINKS)
---------------------------------- */
const experienceData = [
  {
    title: 'Founder & Director',
    company: 'Research Lab Bangladesh',
    image:
      'https://i.postimg.cc/B671fxYW/IMG-20220914-142121.jpg',
    period: '2019 – Present',
    type: 'Full-time',
    current: true,
    description:
      'Founded and lead a nationally accredited research organization recognized by NMST, Ministry of Science and Technology.',
    achievements: [
      'Organized national robotics olympiads and STEM programs',
      'Led government-funded innovation initiatives',
      'Established partnerships with educational institutions',
      'Featured in national print and television media',
      'Impacted over 5,000 students through STEM education',
    ],
  },
  {
    title: 'Overseas Business Manager',
    company: 'Qingdao Hai Zhi Hui Ke New Energy Co. Ltd.',
    image:
      'https://i.postimg.cc/5NW1sXgr/cgi-bin-mmwebwx-bin-webwxgetmsgimg-Msg-ID-3155677380940735980-skey-crypt-aba0b804-89caec6ac189488.jpg',
    period: 'March – July 2023',
    type: 'Full-time',
    current: false,
    description:
      'Electric Charging Pile Company - Managed international business operations, client relationships, and market expansion strategies.',
    achievements: [
      'Developed international trade partnerships',
      'Managed cross-cultural business communications',
      'Implemented e-commerce strategies on Alibaba International Station',
    ],
  },
  {
    title: 'Industrial Internship of Mechatronic Engineering',
    company: 'LIBO Heavy Industries Science and Technology Co. Ltd',
    image:
      'https://i.postimg.cc/W3mqtB1t/Weixin-Image-20260211190019-145-133.jpg',
    period: '1 Month (2023)',
    type: 'Full-time',
    current: false,
    description:
      'Industrial Automation Company - Gained practical experience in industrial automation, energy systems, and manufacturing processes.',
    achievements: [
      'Conveyor system design and implementation',
      'Industrial automation project management',
      'Conveyor management system development',
    ],
  },
  {
    title: 'Overseas Business Manager',
    company: 'Qingdao Jiashengde Polymer Materials Co. Ltd.',
    image:
      'https://i.postimg.cc/PrJbFqq3/Weixin-Image-20260211191231-147-133.jpg',
    period: '2025 – Present',
    type: 'Full-time',
    current: true,
    description:
      'Plastic Packaging Company - Responsible for managing international business operations, client relationships, and market expansion strategies.',
    achievements: [
      'Developed international trade partnerships',
      'Alibaba International Station management and e-commerce strategies',
      'Overseas Market Development',
    ],
  },
  {
    title: 'Alibaba International Station VIP Core Merchant Advanced Operations Training Camp 2026',
    company: 'Speaker - Zhang Guoro',
    image:
      'https://i.postimg.cc/7hYRRyC6/Weixin-Image-20260211192256-151-133.jpg',
    period: '9:00 AM – 5:00 PM, Jan 27, 2026',
    type: 'Training',
    current: false,
    description:
      'Completed advanced training programs in international e-commerce and digital trade.',
    achievements: [
      'Full hands-on demonstrations of Alibaba International Station operations',
      'On-site diagnosis and analysis, implementation plan and time milestones, ensuring practical application',
      'Massive amounts of data, plug-ins, thinking, live output of new regulations, the latest content from every event',
      'Nationwide multi-category, tens of thousands of merchants have verified and validated practical operations courses and results',
    ],
  },
  {
    title: 'Premium Merchant Delivery Marketing Training Camp 2026',
    company: 'Speaker - Chen Yingqi',
    image:
      'https://i.postimg.cc/rsPfYR2z/Weixin-Image-20260211192255-150-133.jpg',
    period: '1:30 OM – 5:00 PM, Jan 20, 2026',
    type: 'Training',
    current: false,
    description:
      'Full practical demonstration, course Q&A, and free access to massive strategy materials.',
    achievements: [
      'Priotize and quickly rectify and optimize old prodcuts in store',
      'Create more high-quality, AI-search friendly products',
      'Clearly explain prodcuts under the AI search matching mechanism etc',
    ],
  },
];

/* ---------------------------------
   Component
---------------------------------- */
const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text-teal">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership, research, and international business roles.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="h-full rounded-2xl overflow-hidden bg-card/80 backdrop-blur
                  border border-border hover:border-teal/40
                  hover:shadow-[0_20px_40px_-20px_rgba(13,148,136,0.4)]
                  transition-all duration-300"
              >
                {/* TOP IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {exp.current && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full
                      bg-teal text-white text-xs font-semibold shadow"
                    >
                      Current
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-teal font-medium text-sm mb-3">
                    {exp.company}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <ChevronRight className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
