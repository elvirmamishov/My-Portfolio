import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
interface TechStackProps {
  title: string;
}
const technologies = [
'React',
'Angular',
'Vue.js',
'TypeScript',
'JavaScript',
'HTML',
'CSS',
'SCSS',
'Tailwind',
'Bootstrap',
'Git',
'REST API',
'Responsive'];

export function TechStack({ title }: TechStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading centered>{title}</SectionHeading>

        <div
          ref={containerRef}
          className="relative h-[600px] flex items-center justify-center">
          
          <motion.div
            className="absolute w-32 h-32 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center font-display font-bold text-white text-2xl shadow-2xl"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}>
            
            EM
          </motion.div>

          {technologies.map((tech, index) => {
            const angle = index / technologies.length * 2 * Math.PI;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={tech}
                className="absolute glass-effect px-6 py-3 rounded-xl font-body font-semibold text-white whitespace-nowrap"
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5
                }}
                animate={{
                  x: [x, x * 1.1, x],
                  y: [y, y * 1.1, y]
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 10
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}>
                
                {tech}
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}