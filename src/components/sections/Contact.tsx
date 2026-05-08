import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  DownloadIcon,
  SendIcon } from
'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GradientButton } from '../ui/GradientButton';
interface ContactProps {
  title: string;
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  downloadCV: string;
}
export function Contact({ title, form, downloadCV }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };
  const handleDownloadCV = () => {
    window.open("/ELVIR-MAMISHOV-CV.jpg",

    '_blank'
    );
  };
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading centered>{title}</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <GlassCard>
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {[
                {
                  icon: MailIcon,
                  label: 'Email',
                  value: 'elvir.mamishov@gmail.com',
                  href: 'mailto:elvir.mamishov@gmail.com'
                },
                {
                  icon: PhoneIcon,
                  label: 'Phone',
                  value: '+994-70-873-11-88',
                  href: 'tel:+994708731188'
                },
                {
                  icon: MapPinIcon,
                  label: 'Location',
                  value: 'Baku, Azerbaijan',
                  href: null
                }].
                map((item) =>
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  whileHover={{
                    x: 4
                  }}>
                  
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                      <item.icon className="w-5 h-5 text-accent-violet" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">{item.label}</p>
                      {item.href ?
                    <a
                      href={item.href}
                      className="text-white hover:text-accent-cyan transition-colors">
                      
                          {item.value}
                        </a> :

                    <p className="text-white">{item.value}</p>
                    }
                    </div>
                  </motion.div>
                )}
              </div>

              <GradientButton onClick={handleDownloadCV} className="w-full">
                <DownloadIcon className="w-4 h-4 mr-2 inline" />
                {downloadCV}
              </GradientButton>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-zinc-300 mb-2">
                    
                    {form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-violet transition-colors"
                    placeholder="John Doe" />
                  
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zinc-300 mb-2">
                    
                    {form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-violet transition-colors"
                    placeholder="john@example.com" />
                  
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-zinc-300 mb-2">
                    
                    {form.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-accent-violet transition-colors resize-none"
                    placeholder="Your message..." />
                  
                </div>

                <GradientButton className="w-full">
                  <SendIcon className="w-4 h-4 mr-2 inline" />
                  {form.send}
                </GradientButton>

                {showSuccess &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center">
                  
                    {form.success}
                  </motion.div>
                }
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>);

}