import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Tv, Newspaper, ExternalLink, Calendar, Play, X } from 'lucide-react';

type MediaItem = {
  type?: string;
  outlet: string;
  title: string;
  date: string;
  hasVideo?: boolean;
  videoUrl?: string;
  image?: string;
  description?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: 'television',
    outlet: 'Independent Television',
    title: 'জাতীয় বিজ্ঞান ও প্রযুক্তি জাদুঘরে রোবট হস্তান্তর ২০২১ ইং',
    date: '2021',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=e0sAZ_oJEzk',
  },
  {
    type: 'television',
    outlet: 'Channel 24',
    title: 'চট্টগ্রাম সায়েন্স এ্যান্ড রোবটিক্স অলিম্পিয়াড ২০২১ ইং',
    date: '2021',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=tyqmV5QonX8',
  },
  {
    type: 'television',
    outlet: 'Bangladesh Television (BTV)',
    title: 'দেশের অগ্রযাত্রার স্বপ্নযাত্রীদের নিয়ে অনুষ্ঠান " স্বপ্ন আগামীর" এ রোবটিক্স ও বিজ্ঞান বিষয়ক আলোচনা',
    date: '2022',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=2RB7fNyllp0',
  },
  {
    type: 'television',
    outlet: 'Bangladhara',
    title: 'লোহাগাড়া সায়েন্স এ্যান্ড রোবটিক্স অলিম্পিয়াড ২০২২ ইং',
    date: '2022',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=5VRVDr6BNWY',
  },
  {
    type: 'television',
    outlet: 'Channel 24',
    title: 'রাঙ্গামাটি সায়েন্স এ্যান্ড রোবটিক্স অলিম্পিয়াড ২০২৪ ইং',
    date: '2024',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=LHo49NoKExA',
  },
  {
    title: 'জীবন বাঁচাবে ড্রোন',
    outlet: 'Samakal',
    date: '2018',
    image: 'https://i.postimg.cc/0jhrWM7R/6.png',
  },
  {
    title: 'জীবন বাঁচাবে তরুণ উদ্ভাবকদের ড্রোনটি', 
    outlet: 'Bangla News 24',
    date: '2018',
    image: 'https://i.postimg.cc/CxTsddXj/10.png',
  },
  {
    title: 'অগ্নিনির্বাপণে স্বপ্ন দেখাচ্ছে রোবট বিআরএফ',
    outlet: 'Bangladesh Pratidin',
    date: '2019',
    image: 'https://i.postimg.cc/prpncBjt/1.png',
  },
  {
    title: 'অগ্নিকান্ড থেকে জানমাল বাঁচাবে রোবট ফোর্স',
    outlet: 'Desh Rupantor',
    date: '2019',
    image: 'https://i.postimg.cc/pXSwpQJz/2.png',
  },
  {
    title: 'নোবেলের রোবট ফোর্স আগুন নেভাবে জীবন বাঁচাবে',
    outlet: 'Samakal',
    date: '2019',
    image: 'https://i.postimg.cc/rskShHTN/3.png',
  },
  {
    title: 'আগুন থেকে মানুষকে বাঁচাবে রোবট ফোর্স',
    outlet: 'Bangla News 24',
    date: '2019',
    image: 'https://i.postimg.cc/zvZ9xq3p/4.png',
  },
  {
    title: 'রোবটিক্সের দুনিয়ায় আমাদের তরুণরা',
    outlet: 'Daily Ittefaq',
    date: '2019',
    image: 'https://i.postimg.cc/BQwC3MB4/5.png',
  },
  {
    title: 'আগুন থেকে বাঁচাবে রোবট ফোর্স',
    outlet: 'Alokito Bangladesh',
    date: '2019',
    image: 'https://i.postimg.cc/Qd3chwWs/7.png',
  },
  {
    title: 'রোবট ফোর্স উদ্ভাবন - লোহাগাড়ার নোবেল দেশসেরা ক্ষুদে বিজ্ঞানী',
    outlet: 'Dainik Purbokone',
    date: '2019',
    image: 'https://i.postimg.cc/Xq9XPNL0/8.png',
  },
  {
    title: 'আগুন নেভাবে রোবট ফোর্স',
    outlet: 'Dainik Azadi',
    date: '2019',
    image: 'https://i.postimg.cc/8cpx2tBB/9.png',
  },
  {
    title: ' লোহাগাড়ার নোবেলের রোবট ফোর্স এর পুরস্কার অর্জন', 
    outlet: 'Dainik Purbodesh',
    date: '2019',
    image: 'https://i.postimg.cc/ydLzYMN9/11.png',
  },
];

// Extract YouTube ID
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

const Media = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null); // ✅ Added for modal

  return (
    <section id="media" className="section-padding bg-background" ref={ref}>
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Media & Press
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            News & <span className="gradient-text-teal">Media Coverage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured in national print and television media for innovation and STEM leadership.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12"
        >
          <div className="text-center p-4 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-2">
              <Tv className="w-5 h-5 text-teal" />
            </div>
            <p className="text-2xl font-bold text-foreground">5+</p>
            <p className="text-xs text-muted-foreground">TV Features</p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mx-auto mb-2">
              <Newspaper className="w-5 h-5 text-navy" />
            </div>
            <p className="text-2xl font-bold text-foreground">5+</p>
            <p className="text-xs text-muted-foreground">Print Articles</p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-2">
              <ExternalLink className="w-5 h-5 text-teal" />
            </div>
            <p className="text-2xl font-bold text-foreground">10+</p>
            <p className="text-xs text-muted-foreground">Online Features</p>
          </div>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => {
            const videoId = getYouTubeId(item.videoUrl);
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : null;

            return (
              <motion.div
                key={`${item.outlet}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              >
                <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-medium transition-all duration-300 flex flex-col">

                  {/* VIDEO SECTION */}
                  {item.hasVideo && videoId && (
                    <div className="relative mb-4 rounded-xl overflow-hidden">
                      {activeVideo === videoId ? (
                        <iframe
                          className="w-full h-48"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title="YouTube video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <img
                            src={thumbnail}
                            alt="Video thumbnail"
                            className="w-full h-48 object-cover cursor-pointer"
                            onClick={() => setActiveVideo(videoId)}
                          />
                          <div
                            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                            onClick={() => setActiveVideo(videoId)}
                          >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                              <Play className="w-7 h-7 text-black ml-1" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* IMAGE SECTION */}
                  {item.image && (
                    <div className="mb-4 rounded-xl overflow-hidden relative cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                        onClick={() => setActiveImage(item.image)}
                      />
                    </div>
                  )}

                  {/* DATE BADGE */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-teal/20 to-teal/10 text-teal border border-teal/30">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-teal mb-2">
                    {item.outlet}
                  </p>

                  <h4 className="font-display font-semibold text-sm text-foreground mb-2 leading-snug flex-1">
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

{/* IMAGE MODAL */}
{activeImage && (
  <div
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    onClick={() => setActiveImage(null)}
  >
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={activeImage}
        alt="Full Size"
        className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
      />
      <button
        className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
        onClick={() => setActiveImage(null)}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  </div>
)}


      </div>
    </section>
  );
};

export default Media;
