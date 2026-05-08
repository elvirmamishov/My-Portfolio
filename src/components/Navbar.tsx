import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
  Volume2Icon,
  VolumeXIcon } from
'lucide-react';
import { Monogram } from './ui/Monogram';
import { Theme, Language } from '../types';
interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  navItems: {
    label: string;
    href: string;
  }[];
}
export function Navbar({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  navItems
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : ''}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}>
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('#home')}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="focus:outline-none"
            aria-label="Home">
            
            <Monogram size="sm" />
          </motion.button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) =>
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-zinc-300 hover:text-white dark:text-zinc-400 dark:hover:text-white transition-colors font-body"
              initial={{
                opacity: 0,
                y: -20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.1
              }}
              whileHover={{
                y: -2
              }}>
              
                {item.label}
              </motion.button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleLanguage}
              className="text-zinc-300 hover:text-white dark:text-zinc-400 dark:hover:text-white transition-colors font-body text-sm font-semibold"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              aria-label="Toggle language">
              
              {language.toUpperCase()}
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              aria-label="Toggle theme">
              
              {theme === 'dark' ?
              <SunIcon className="w-5 h-5 text-zinc-300" /> :

              <MoonIcon className="w-5 h-5 text-zinc-600" />
              }
            </motion.button>

            <motion.button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors hidden md:block"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              aria-label="Toggle sound">
              
              {soundEnabled ?
              <Volume2Icon className="w-5 h-5 text-zinc-300 dark:text-zinc-400" /> :

              <VolumeXIcon className="w-5 h-5 text-zinc-300 dark:text-zinc-400" />
              }
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass-effect"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              aria-label="Toggle menu">
              
              {isOpen ?
              <XIcon className="w-6 h-6 text-zinc-300" /> :

              <MenuIcon className="w-6 h-6 text-zinc-300" />
              }
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen &&
          <motion.div
            className="md:hidden mt-4 pb-4"
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
            }}>
            
              {navItems.map((item) =>
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-3 text-zinc-300 hover:text-white dark:text-zinc-400 dark:hover:text-white transition-colors font-body"
              whileHover={{
                x: 8
              }}>
              
                  {item.label}
                </motion.button>
            )}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.nav>);

}