import React from 'react';
import { motion } from 'framer-motion';

export default function DentalFloatingBg() {
  // SVG Path for an outlined tooth
  const toothPath = "M25 35 C25 15, 45 15, 50 25 C55 15, 75 15, 75 35 C75 55, 70 70, 68 85 C67 90, 60 90, 58 78 C55 68, 45 68, 42 78 C40 90, 33 90, 32 85 C30 72, 25 58, 25 35 Z";
  
  // SVG Path for an outlined sparkle
  const sparklePath = "M50 15 L53 38 L75 41 L53 44 L50 67 L47 44 L25 41 L47 38 Z";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 1. Large Tooth Outline - Top Left */}
      <motion.div
        className="absolute top-12 left-[10%] text-dental-sky/10 w-24 h-24 hidden md:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
          <path d={toothPath} />
        </svg>
      </motion.div>

      {/* 2. Sparkle - Left Mid (Behind descriptions) */}
      <motion.div
        className="absolute top-1/2 left-[5%] text-dental-mint/10 w-12 h-12"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 45, 90, 135, 180]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3">
          <path d={sparklePath} />
        </svg>
      </motion.div>

      {/* 3. Small Tooth Outline - Bottom Left (Behind stats) */}
      <motion.div
        className="absolute bottom-16 left-[25%] text-dental-turquoise/8 w-16 h-16 hidden sm:block"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -6, 6, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
          <path d={toothPath} />
        </svg>
      </motion.div>

      {/* 4. Large Tooth Outline - Top Right (Behind photo frame) */}
      <motion.div
        className="absolute top-8 right-[8%] text-dental-sky/8 w-32 h-32 hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
          <path d={toothPath} />
        </svg>
      </motion.div>

      {/* 5. Sparkle - Right Mid */}
      <motion.div
        className="absolute top-1/3 right-[32%] text-dental-aqua/10 w-10 h-10 hidden md:block"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
          y: [0, 8, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3">
          <path d={sparklePath} />
        </svg>
      </motion.div>

      {/* 6. Soft Glow Circle - Center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-dental-sky/5 to-transparent blur-3xl z-[-5]"></div>

    </div>
  );
}
