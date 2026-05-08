import React, { Component } from 'react';
import { motion } from 'framer-motion';
interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}
export function GradientButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href
}: GradientButtonProps) {
  const baseClasses =
  'px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group';
  const variantClasses =
  variant === 'primary' ?
  'bg-gradient-to-r from-accent-violet to-accent-cyan hover:shadow-lg hover:shadow-accent-violet/50' :
  'glass-effect hover:bg-white/10';
  const Component = href ? 'a' : motion.button;
  const props = href ?
  {
    href,
    target: '_blank',
    rel: 'noopener noreferrer'
  } :
  {
    onClick
  };
  return (
    <Component
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      {...props}>
      
      <span className="relative z-10">{children}</span>
      {variant === 'primary' &&
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false} />

      }
    </Component>);

}