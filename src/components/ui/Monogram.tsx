import React, { Component } from 'react';
import { motion } from 'framer-motion';
interface MonogramProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}
export function Monogram({
  size = 'md',
  className = '',
  animated = false
}: MonogramProps) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-20 h-20 text-3xl'
  };
  const Component = animated ? motion.div : 'div';
  const animationProps = animated ?
  {
    initial: {
      scale: 0,
      rotate: -180
    },
    animate: {
      scale: 1,
      rotate: 0
    },
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  } :
  {};
  return (
    <Component
      className={`${sizes[size]} rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center font-display font-bold text-white shadow-lg ${className}`}
      {...animationProps}>
      
      EM
    </Component>);

}