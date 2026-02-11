import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

/* ---------------- DATA ---------------- */

const educationData = [
  {
    year: '2015',
    country: '🇧🇩',
    degree: 'SSC (Science)',
    institution: 'South Satkania Golambari High School',
    location: 'Chattogram, Bangladesh',
    description: 'Built a strong foundation in mathematics, physics, and core sciences.',
  },
  {
    year: '2019',
    country: '🇧🇩',
    degree: 'Diploma in Electronics Engineering',
    institution: 'Chattogram Polytechnic Institute',
    location: 'Chattogram, Bangladesh',
    description: 'Hands-on engineering education with strong exposure to electronics and applied systems.',
  },
  {
    year: '2024',
    country: '🇨🇳',
    degree: 'BSc in Mechatronic Engineering',
    institution: 'Shandong University of Science and Technology',
    location: 'Qingdao, China',
    description: 'Interdisciplinary training in robotics, automation, and intelligent systems.',
  },
  {
    year: '2028',
    country: '🇨🇳',
    degree: 'MSc in Safety Science & Environmental Engineering',
    institution: 'Shandong University of Science and Technology',
    location: 'Qingdao, China',
    description: 'Advanced research in industrial safety, environmental systems, and risk engineering.',
    ongoing: true,
  },
];

/* ---------------- COMPONENT ---------------- */

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const bgFar = useAnimation();
  const bgMid = useAnimation();
  const bgNear = useAnimation();

  /* -------- background waves -------- */
  useEffect(() => {
    if (isInView) {
      bgFar.start({
        x: [0, 30, -30, 0],
        transition: { duration: 26, ease: 'easeInOut', repeat: Infinity },
      });

      bgMid.start({
        x: [0, -40, 40, 0],
        transition: { duration: 18, ease: 'easeInOut', repeat: Infinity },
      });

      bgNear.start({
        x: [0, 20, -20, 0],
        transition: { duration: 12, ease: 'easeInOut', repeat: Infinity },
      });
    }
  }, [isInView, bgFar, bgMid, bgNear]);

  return (
    <section
      id="education"
      ref={ref}
      className="relative section-padding bg-background overflow-hidden"
    >
      {/* -------- BACKGROUND DOT WAVES -------- */}

      {/* FAR */}
      <motion.div animate={bgFar} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(94,234,212,0.8) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </motion.div>

      {/* MID */}
      <motion.div animate={bgMid} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(94,234,212,0.9) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </motion.div>

      {/* NEAR */}
      <motion.div animate={bgNear} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(94,234,212,1) 1.2px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </motion.div>

      {/* -------- CONTENT -------- */}
      <div className="section-container relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-teal/10 text-teal text-xs tracking-widest font-semibold">
            EDUCATION
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">
            Academic <span className="gradient-text-teal">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A structured academic progression across institutions and countries.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-start gap-14">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className="relative flex flex-col items-center"
              >
                {/* connector */}
                {index !== 0 && (
                  <div className="absolute top-6 -left-14 w-14 border-t border-dashed border-teal/40" />
                )}

                {/* year dot */}
                <div className="w-12 h-12 rounded-full bg-teal/15 text-teal font-bold flex items-center justify-center shadow-md">
                  {edu.year}
                </div>

                {/* card */}
                <div className="w-72 h-60 mt-6 p-6 rounded-3xl bg-card border border-border hover:border-teal/40 hover:shadow-xl transition-all flex flex-col">
                  {edu.ongoing && (
                    <span className="text-xs text-teal font-semibold mb-1">
                      Ongoing
                    </span>
                  )}
                  <h3 className="text-sm font-bold">{edu.degree}</h3>
                  <p className="text-xs text-teal">{edu.institution}</p>

                  <p className="text-xs text-muted-foreground mt-3 flex-grow">
                    {edu.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                    <MapPin className="w-3 h-3 text-teal" />
                    {edu.location}
                    <span className="ml-auto text-lg">{edu.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.year}
              className="w-full h-60 p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-teal text-sm">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {edu.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                <MapPin className="w-3 h-3 text-teal" />
                {edu.location}
                <span className="ml-auto text-lg">{edu.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
