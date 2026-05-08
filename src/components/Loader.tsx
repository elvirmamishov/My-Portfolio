import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monogram } from './ui/Monogram';
interface LoaderProps {
  onComplete: () => void;
}
export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const duration = 1200;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration * 100, 100);
      setProgress(newProgress);
      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 300);
      }
    };
    animate();
  }, [onComplete]);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg dark:bg-dark-bg"
        initial={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.5
        }}>
        
        <Monogram size="lg" animated />

        <motion.div
          className="mt-8 w-64 h-1 bg-dark-surface rounded-full overflow-hidden"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.3
          }}>
          
          <motion.div
            className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan"
            initial={{
              width: 0
            }}
            animate={{
              width: `${progress}%`
            }}
            transition={{
              duration: 0.1
            }} />
          
        </motion.div>

        <motion.p
          className="mt-4 text-zinc-400 font-body"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.5
          }}>
          
          {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>);

}