import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {
    damping: 25,
    stiffness: 400
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, input, textarea, [role="button"]'
      );
      setIsHovering(!!isInteractive);
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }
  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%'
        }} />
      
      <motion.div
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%'
        }} />
      
    </>);

}