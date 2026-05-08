import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}
export function SectionHeading({
  children,
  subtitle,
  centered = false
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
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
        duration: 0.6
      }}>
      
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 relative inline-block">
        <span className="gradient-text">{children}</span>
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full"
          initial={{
            width: 0
          }}
          whileInView={{
            width: '100%'
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }} />
        
      </h2>
      {subtitle &&
      <p className="text-zinc-400 dark:text-zinc-500 text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      }
    </motion.div>);

}