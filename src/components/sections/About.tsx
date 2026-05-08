import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { useCounter } from '../../hooks/useCounter';
interface AboutProps {
  title: string;
  stats: {
    experience: string;
    projects: string;
    technologies: string;
    banking: string;
  };
}
export function About({ title, stats }: AboutProps) {
  const [inView, setInView] = useState(false);
  const experienceCount = useCounter(4, 2000, inView);
  const projectsCount = useCounter(12, 2000, inView);
  const techCount = useCounter(11, 2000, inView);
  const bankingCount = useCounter(4, 2000, inView);
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>{title}</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            
            <p className="text-lg text-zinc-300 dark:text-zinc-400 leading-relaxed mb-6">
              Front-End Developer with strong experience building scalable,
              high-performance, and user-centric web applications using React,
              Angular, Vue.js, and TypeScript.
            </p>
            <p className="text-lg text-zinc-300 dark:text-zinc-400 leading-relaxed mb-6">
              Passionate about crafting clean, maintainable, and efficient code
              while delivering modern, responsive, and intuitive user
              interfaces.
            </p>
            <p className="text-lg text-zinc-300 dark:text-zinc-400 leading-relaxed">
              Experienced in translating business requirements into high-quality
              technical solutions, working closely with designers, backend
              engineers, and product teams. Strong focus on performance
              optimization, best practices, and clean architecture.
            </p>
          </motion.div>

          <motion.div
            ref={(ref) => {
              if (ref && !inView) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setInView(true);
                    }
                  },
                  {
                    threshold: 0.3
                  }
                );
                observer.observe(ref);
              }
            }}
            className="grid grid-cols-2 gap-6"
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
              duration: 0.6,
              delay: 0.2
            }}>
            
            {[
            {
              value: experienceCount,
              suffix: '+',
              label: stats.experience
            },
            {
              value: projectsCount,
              suffix: '+',
              label: stats.projects
            },
            {
              value: techCount,
              suffix: '+',
              label: stats.technologies
            },
            {
              value: bankingCount,
              suffix: '',
              label: stats.banking
            }].
            map((stat, index) =>
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3 + index * 0.1
              }}>
              
                <GlassCard hover>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-zinc-400">{stat.label}</div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}