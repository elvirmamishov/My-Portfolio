import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, BriefcaseIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Experience as ExperienceType } from '../../types';
interface ExperienceProps {
  title: string;
  experience: ExperienceType[];
  presentLabel: string;
}
export function Experience({
  title,
  experience,
  presentLabel
}: ExperienceProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading centered>{title}</SectionHeading>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) =>
            <motion.div
              key={exp.id}
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
                delay: index * 0.2
              }}
              className="relative pl-20">
              
                <motion.div
                className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg"
                whileHover={{
                  scale: 1.2
                }}>
                
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan animate-pulse-slow opacity-50" />
                </motion.div>

                <GlassCard>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                        <BriefcaseIcon className="w-6 h-6 text-accent-violet" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent-cyan font-semibold mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-zinc-400">
                          {exp.period} {exp.current && `- ${presentLabel}`}
                        </p>
                      </div>
                    </div>

                    <motion.button
                    onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    aria-label="Toggle details">
                    
                      <motion.div
                      animate={{
                        rotate: expandedId === exp.id ? 180 : 0
                      }}
                      transition={{
                        duration: 0.3
                      }}>
                      
                        <ChevronDownIcon className="w-5 h-5 text-zinc-400" />
                      </motion.div>
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedId === exp.id &&
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto'
                    }}
                    exit={{
                      opacity: 0,
                      height: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="overflow-hidden">
                    
                        <div className="pt-4 border-t border-white/10">
                          {exp.description &&
                      <p className="text-zinc-300 mb-4">
                              {exp.description}
                            </p>
                      }
                          <div>
                            <p className="text-sm font-semibold text-zinc-400 mb-2">
                              Projects:
                            </p>
                            <ul className="space-y-2">
                              {exp.projects.map((project) =>
                          <li
                            key={project}
                            className="text-zinc-300 flex items-center gap-2">
                            
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                                  {project}
                                </li>
                          )}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}