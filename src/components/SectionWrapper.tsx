import React from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
export function SectionWrapper({
  children,
  id,
  className = ''
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}>
      
      {children}
    </motion.section>);

}