import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { Monogram } from '../ui/Monogram';
interface FooterProps {
  rights: string;
  backToTop: string;
}
export function Footer({ rights, backToTop }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Monogram size="sm" />
            <p className="text-zinc-400 text-sm">{rights}</p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-effect hover:bg-white/10 transition-colors text-zinc-300 hover:text-white"
            whileHover={{
              y: -4
            }}
            whileTap={{
              scale: 0.95
            }}>
            
            <span className="font-body">{backToTop}</span>
            <ArrowUpIcon className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>);

}