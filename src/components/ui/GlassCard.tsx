import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hover = false
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-effect rounded-2xl p-6 ${className}`}
      whileHover={
      hover ?
      {
        y: -4,
        scale: 1.02
      } :
      undefined
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}>
      
      {children}
    </motion.div>);

}