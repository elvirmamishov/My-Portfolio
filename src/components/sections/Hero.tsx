import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { ThreeBackground } from '../ThreeBackground';
interface HeroProps {
  greeting: string;
  roles: string[];
  cta: {
    viewWork: string;
    downloadCV: string;
  };
}
export function Hero({ greeting, roles, cta }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const downloadCV = () => {
    window.open("/ELVIR-MAMISHOV-CV.jpg",

    '_blank'
    );
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <ThreeBackground />

      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}>
          
          <motion.p
            className="text-accent-cyan text-lg md:text-xl font-body mb-4"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}>
            
            {greeting}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3
            }}>
            
            Elvir Mamishov
          </motion.h1>

          <div className="h-20 md:h-24 flex items-center justify-center mb-12">
            <motion.h2
              key={currentRole}
              className="text-2xl md:text-4xl font-display font-semibold gradient-text"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.5
              }}>
              
              {roles[currentRole]}
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5
            }}>
            
            <GradientButton onClick={scrollToProjects}>
              {cta.viewWork}
            </GradientButton>
            <GradientButton variant="secondary" onClick={downloadCV}>
              {cta.downloadCV}
            </GradientButton>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.7
            }}>
            
            {[
            {
              icon: GithubIcon,
              href: 'https://github.com',
              label: 'GitHub'
            },
            {
              icon: LinkedinIcon,
              href: 'https://linkedin.com',
              label: 'LinkedIn'
            },
            {
              icon: MailIcon,
              href: 'mailto:elvir.mamishov@gmail.com',
              label: 'Email'
            }].
            map((social, index) =>
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-colors"
              whileHover={{
                scale: 1.1,
                y: -4
              }}
              whileTap={{
                scale: 0.95
              }}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.8 + index * 0.1
              }}
              aria-label={social.label}>
              
                <social.icon className="w-5 h-5 text-zinc-300" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1,
            duration: 1
          }}>
          
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}>
            
            <ArrowDownIcon className="w-6 h-6 text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}