import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Skill } from '../../types';
interface SkillsProps {
  title: string;
  skills: Skill[];
}
export function Skills({ title, skills }: SkillsProps) {
  const categories = [
  'Frontend',
  'Frameworks',
  'Styling',
  'Tools',
  'Other'] as
  const;
  const getSkillsByCategory = (category: (typeof categories)[number]) => {
    return skills.filter((skill) => skill.category === category);
  };
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading centered>{title}</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;
            return (
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: categoryIndex * 0.1
                }}>
                
                <GlassCard hover>
                  <h3 className="text-xl font-display font-semibold text-white mb-6">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) =>
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.1 + index * 0.05} />

                    )}
                  </div>
                </GlassCard>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
function SkillBar({ skill, delay }: {skill: Skill;delay: number;}) {
  const [inView, setInView] = useState(false);
  return (
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
              threshold: 0.5
            }
          );
          observer.observe(ref);
        }
      }}
      initial={{
        opacity: 0,
        x: -20
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay
      }}>
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-300">{skill.name}</span>
        {/* <span className="text-xs text-zinc-500">{skill.proficiency}%</span> */}
      </div>
      {/* <div className="h-2 bg-dark-surface dark:bg-dark-elevated rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full"
          initial={{
            width: 0
          }}
          animate={
          inView ?
          {
            width: `${skill.proficiency}%`
          } :
          {
            width: 0
          }
          }
          transition={{
            duration: 1,
            delay: delay + 0.2,
            ease: 'easeOut'
          }} />
        
      </div> */}
    </motion.div>);

}