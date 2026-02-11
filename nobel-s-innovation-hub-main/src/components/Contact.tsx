import { SiGooglescholar, SiResearchgate } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Youtube, 
  Facebook, ExternalLink, MessageCircle, Loader2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_kfs5lre';
const EMAILJS_TEMPLATE_ID = 'template_dw1qxt7';
const EMAILJS_PUBLIC_KEY = 'TkMZWY_KamkXjZ0lV';
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jahedhossainnobel@qq.com',
    href: 'mailto:jahedhossainnobel@qq.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp (BD)',
    value: '+880 1865 243019',
    href: 'https://wa.me/8801865243019',
  },
  {
    icon: MessageCircle,
    label: 'Phone / WeChat / WhatsApp (China)',
    value: '+86 1939 814 2432',
    href: 'https://wa.me/8619398142432',
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jahed-hossain-nobel-381811180' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@TechNomadNobel' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/@technomadnobel' },
  { icon: SiGooglescholar, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=F-STVowAAAAJ&hl=en' },
  { icon: SiResearchgate, label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Jahed-Hossain-Nobel' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text-teal">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, consulting, or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-teal/30 hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy/5 to-teal/5 border border-teal/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <h4 className="font-display font-semibold text-foreground">Locations</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Chittagong, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  Qingdao, Shandong, China
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Follow & Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-teal/30 hover:bg-teal/5 transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-teal transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-soft">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;