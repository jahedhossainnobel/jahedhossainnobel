import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Star,
  Shield,
  BadgeCheck,
  X,
} from 'lucide-react';

type AwardItem = {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  highlight?: boolean;
};

const awards: AwardItem[] = [
  {
    title: '7th Place — National ICT Expo',
    organization: 'ICT Division & Bangladesh Computer Samity (BCS)',
    year: '2017',
    description:
      'The Life-Saving Drone project secured 7th place among 300+ innovative solutions at the National ICT Expo, highlighting impact-driven technological innovation.',
    icon: Medal,
    image: 'https://i.postimg.cc/DZmXnrNG/ICTEXPO2017.png',
    highlight: true,
  },
  {
    title: 'Champion — STEP Skill Competition (Institute Level)',
    organization: 'Government of Bangladesh, Government of Canada & World Bank',
    year: '2018',
    description:
      'Achieved first place at the institute level for outstanding performance in technical skills, innovation, and applied engineering excellence.',
    icon: Trophy,
    image: 'https://i.postimg.cc/ydVDnw95/Step-Skills-Comp2018.png',
    highlight: true,
  },
  {
    title: 'Champion — STEP Skill Competition (Regional Level)',
    organization: 'Government of Bangladesh, Government of Canada & World Bank',
    year: '2018',
    description:
      'Crowned regional champion for advanced problem-solving capability, teamwork, and real-world engineering innovation.',
    icon: Trophy,
    image: 'https://i.postimg.cc/02gbBMpV/Step-Skills-Comp-Reg2018.png',
    highlight: true,
  },
  {
    title: '2nd Best Stall — 4th National Development Fair (Dhaka Division)',
    organization: 'Government of Bangladesh',
    year: '2018',
    description:
      'Awarded for excellence in project presentation, creativity, and public engagement in robotics and STEM innovation.',
    icon: Award,
    image: 'https://i.postimg.cc/pXTkdS9F/tu-pian1.png',
    highlight: true,
  },
  {
    title: 'Champion — 5th Divisional Science & Technology Fair (Chattogram)',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2018',
    description:
      'Secured first place for demonstrating high-impact scientific innovation and applied technological solutions.',
    icon: Trophy,
    image: 'https://i.postimg.cc/K8t9XMkn/tu-pian2.png',
    highlight: true,
  },
  {
    title: 'IDEB Engineering Innovation Expo (Prime Minister’s Office)',
    organization: 'Prime Minister’s Office, Government of Bangladesh',
    year: '2018',
    description:
      'Selected as a top diploma innovator and invited to showcase engineering projects at Ganabhaban before the Honorable Prime Minister.',
    icon: Shield,
    image: 'https://i.postimg.cc/nrBt6Lvs/ganabhaban.png',
    highlight: true,
  },
  {
    title: 'Top 10 — ESSAB “Abishkarer Khuje” National Innovation Challenge',
    organization:
      'Electronics Safety & Security Association of Bangladesh (ESSAB)',
    year: '2018',
    description:
      'The Bangladesh Robot Force fire-service robot ranked among the Top 10 innovative solutions nationwide.',
    icon: Star,
    image:
      'https://i.postimg.cc/bJ0TWcZt/Top-10th-at-ESSAB-Abishkarer-Khuje-2018.png',
    highlight: true,
  },
  {
    title: '3rd Place — STEP Skill Competition (National Level)',
    organization:
      'Government of Bangladesh, Government of Canada & World Bank',
    year: '2018',
    description:
      'Earned third place nationally for developing an advanced fire-service robotic system under the Bangladesh Robot Force initiative.',
    icon: Medal,
    image: 'https://i.postimg.cc/tRDgr01d/3rd.png',
    highlight: true,
  },
  {
    title: 'Champion — 40th National Science & Technology Fair (Chattogram Division)',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2019',
    description:
      'Achieved first place for innovative robotic solutions addressing real-world emergency response challenges.',
    icon: Trophy,
    image:
      'https://i.postimg.cc/vmDjdVXq/Champion-at-40th-National-Science-Technology-Fair-2019.png',
    highlight: true,
  },
  {
    title: 'Champion — 40th National Science & Technology Fair (National Level)',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2019',
    description:
      'National champion recognition for outstanding innovation, engineering design, and technological impact.',
    icon: Trophy,
    image: 'https://i.postimg.cc/yYtnSbTT/tu-pian3rd.jpg',
    highlight: true,
  },
  {
    title: 'Bangabandhu Smarak Award — Best Creative Innovation',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2019',
    description:
      'Honored with the prestigious Bangabandhu Memorial Award for exceptional creativity and national-level innovation.',
    icon: Award,
    image:
      'https://i.postimg.cc/MpZRH0Cj/Bangabandhu-Memorial-Honored-for-National-Award.png',
    highlight: true,
  },
  {
    title: 'Shikod Himadhri Award',
    organization: 'Shikod Himadhri Foundation',
    year: '2019',
    description:
      'Recognized for significant contributions to science, technology, and social development through innovation.',
    icon: Award,
    image: 'https://i.postimg.cc/DwbhqRkB/Shikod-Himadhri-Award.png',
    highlight: true,
  },
  {
    title: 'National Award Winner — International Exposure Tour (Malaysia)',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2020',
    description:
      'Selected for a 5-day international innovation exposure tour in Malaysia (12–16 January 2020) as a National Award recipient.',
    icon: Shield,
    image:
      'https://i.postimg.cc/tRZH0L7d/National-Award-Winner-Tour-to-Malaysia.png',
    highlight: true,
  },
  {
    title: 'Bangladesh Robot Force — Museum Exhibition Selection',
    organization:
      'National Museum of Science & Technology, Ministry of Science & Technology',
    year: '2021',
    description:
      'Five robotic systems officially selected and handed over for permanent exhibition at the National Science & Technology Museum.',
    icon: Star,
    image:
      'https://i.postimg.cc/nrRsQNbx/Robot-Handover-to-National-Museum-of-Science-Technology-for-Displaying.png',
    highlight: true,
  },
  {
    title: 'Bangladesh Robot Force — Innovation Gallery Exhibit',
    organization: 'National Museum of Science & Technology',
    year: '2021',
    description:
      'A flagship Bangladesh Robot Force model is preserved and displayed at the National Innovation Gallery.',
    icon: Star,
    image: 'https://i.postimg.cc/RVGhsWFd/unnamed.jpg',
    highlight: true,
  },
  {
    title: 'All Activities Awards (2017-2021)',
    organization:
      'Jahed Hossain Nobel',
    year: '2020',
    description:
      'Life Saving Drone and Bangladesh Robot Force have received all activities awards from 2017 to 2021.',
    image:
      'https://i.postimg.cc/XNk1PW09/unnamed-(1).jpg',
    icon: Star,
    highlight: true,
  },
];

const Awards = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAward, setActiveAward] = useState<AwardItem | null>(null);

  return (
    <section id="awards" ref={ref} className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="text-4xl font-bold">
            Awards & <span className="gradient-text-teal">Honors</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className={`group cursor-pointer
                  ${index === awards.length - 1 ? 'lg:col-span-3 flex justify-center' : ''}
                  `}
                onClick={() => setActiveAward(award)}
              >
                <motion.div
                  animate={
                    award.highlight
                      ? {
                          y: [0, -6, 0],
                        }
                      : {}
                  }
                  transition={
                    award.highlight
                      ? { repeat: Infinity, duration: 4, ease: 'easeInOut' }
                      : {}
                  }
                  className={`relative h-full rounded-2xl border overflow-hidden ${
                    award.highlight
                      ? 'border-teal/40 shadow-[0_0_40px_rgba(45,212,191,0.25)]'
                      : 'border-border'
                  }`}
                >
                  {/* FEATURED BADGE */}
                  {award.highlight && (
                    <div className="absolute top-3 right-3 z-10 bg-teal text-white text-xs px-3 py-1 rounded-full shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* IMAGE */}
                  {award.image && (
                    <div className="h-60 overflow-hidden">
                      <motion.img
                        src={award.image}
                        alt={award.title}
                        className="h-full w-full object-cover"
                        whileHover={{
                          scale: 1.12,
                          rotate: 0.4,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-6 bg-card h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <span className="ml-auto text-xs bg-secondary px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">
                      {award.title}
                    </h3>

                    <p className="text-sm text-teal mb-3">
                      {award.organization}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {activeAward && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAward(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveAward(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X />
              </button>

              {activeAward.image && (
                <img
                  src={activeAward.image}
                  alt={activeAward.title}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {activeAward.title}
                </h3>
                <p className="text-teal mb-2">
                  {activeAward.organization} • {activeAward.year}
                </p>
                <p className="text-muted-foreground">
                  {activeAward.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
