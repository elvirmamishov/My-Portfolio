import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, XIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Project } from '../../types';
interface ProjectsProps {
  title: string;
  projects: Project[];
  filters: {
    all: string;
    banking: string;
    government: string;
    corporate: string;
    other: string;
  };
  viewLive: string;
  viewCode: string;
}
export function Projects({
  title,
  projects,
  filters,
  viewLive,
  viewCode
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>(
    'All'
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects =
  activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.category === activeFilter);
  const filterButtons: Array<{
    label: string;
    value: 'All' | Project['category'];
  }> = [
  {
    label: filters.all,
    value: 'All'
  },
  {
    label: filters.banking,
    value: 'Banking'
  },
  {
    label: filters.government,
    value: 'Government'
  },
  {
    label: filters.corporate,
    value: 'Corporate'
  },
  {
    label: filters.other,
    value: 'Other'
  }];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading centered>{title}</SectionHeading>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
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
          }}>
          
          {filterButtons.map((filter) =>
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-2 rounded-full font-body transition-all ${activeFilter === filter.value ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white' : 'glass-effect text-zinc-300 hover:bg-white/10'}`}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>
            
              {filter.label}
            </motion.button>
          )}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) =>
            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05
              }}>
              
                <GlassCard hover>
                  <motion.button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left"
                  whileHover={{
                    y: -4
                  }}>
                  
                    <div
                    className={`h-40 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 relative overflow-hidden`}>
                    
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/80 text-6xl font-display font-bold">
                          {project.name.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-accent-violet/20 text-accent-violet">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) =>
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-dark-surface dark:bg-dark-elevated text-zinc-300">
                      
                          {tech}
                        </span>
                    )}
                      {project.tech.length > 3 &&
                    <span className="text-xs px-2 py-1 rounded-md bg-dark-surface dark:bg-dark-elevated text-zinc-400">
                          +{project.tech.length - 3}
                        </span>
                    }
                    </div>
                  </motion.button>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject &&
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          viewLive={viewLive}
          viewCode={viewCode} />

        }
      </AnimatePresence>
    </section>);

}
function ProjectModal({
  project,
  onClose,
  viewLive,
  viewCode





}: {project: Project;onClose: () => void;viewLive: string;viewCode: string;}) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        onClick={onClose} />
      
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-50 px-4"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        layoutId={project.id}>
        
        <GlassCard className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close">
            
            <XIcon className="w-5 h-5 text-zinc-400" />
          </button>

          <div
            className={`h-64 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 relative overflow-hidden`}>
            
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/80 text-8xl font-display font-bold">
                {project.name.charAt(0)}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <span className="text-sm px-4 py-1.5 rounded-full bg-accent-violet/20 text-accent-violet">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl font-display font-bold text-white mb-4">
            {project.name}
          </h2>

          <p className="text-zinc-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) =>
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-dark-surface dark:bg-dark-elevated text-zinc-300">
                
                  {tech}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            {project.url &&
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-violet/50 transition-shadow"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}>
              
                <ExternalLinkIcon className="w-4 h-4" />
                {viewLive}
              </motion.a>
            }
            {project.github &&
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-effect text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}>
              
                <GithubIcon className="w-4 h-4" />
                {viewCode}
              </motion.a>
            }
          </div>
        </GlassCard>
      </motion.div>
    </>);

}