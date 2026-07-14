import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CuteInteractiveTooth() {
  const [expression, setExpression] = useState('smile'); // smile, sad, surprised, wink, happy
  const [isBlinking, setIsBlinking] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [tipIndex, setTipIndex] = useState(0);

  const dentalTips = [
    "Brush twice a day! 🪥",
    "Floss like a boss! 💎",
    "Keep smiling! 😁",
    "Visit us every 6 months! 🦷",
    "Painless care here! ✨",
    "Drink lots of water! 💧",
    "Sugar causes cavities! 🍭"
  ];

  // Rotate dental tips every 7 seconds
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % dentalTips.length);
    }, 7000);
    return () => clearInterval(tipInterval);
  }, []);

  // Blinking loop (blinks for 200ms every 5 seconds)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 200);
    }, 5000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Random expression changes every 6 seconds
  useEffect(() => {
    const expressionsList = ['smile', 'surprised', 'wink', 'happy', 'sad'];
    const expressionInterval = setInterval(() => {
      // Pick a random expression different from the current one
      const currentIdx = expressionsList.indexOf(expression);
      let nextIdx = Math.floor(Math.random() * expressionsList.length);
      if (nextIdx === currentIdx) {
        nextIdx = (nextIdx + 1) % expressionsList.length;
      }
      setExpression(expressionsList[nextIdx]);
    }, 6000);
    return () => clearInterval(expressionInterval);
  }, [expression]);

  const handleInteraction = () => {
    // Cycles expression immediately on click and refreshes speech bubble
    const expressionsList = ['smile', 'happy', 'surprised', 'wink', 'sad'];
    const currentIdx = expressionsList.indexOf(expression);
    const nextIdx = (currentIdx + 1) % expressionsList.length;
    setExpression(expressionsList[nextIdx]);
    
    // Pick next tip
    setTipIndex((prev) => (prev + 1) % dentalTips.length);
    setShowSpeechBubble(true);
  };

  return (
    <div className="relative flex flex-col items-center select-none cursor-pointer">
      {/* 1. Interactive Speech Bubble */}
      <AnimatePresence>
        {showSpeechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-20 bg-white text-dental-navy border border-slate-100 px-3.5 py-1.5 rounded-2xl shadow-lg text-[10px] font-bold text-center z-30 whitespace-nowrap"
          >
            {dentalTips[tipIndex]}
            {/* Speech bubble pointer tip */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive SVG Tooth Character */}
      <motion.div
        onClick={handleInteraction}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-36 h-36 relative z-20"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-md"
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="cheekGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>

          {/* Tooth shadow under body */}
          <ellipse cx="50" cy="92" rx="20" ry="3" fill="#E2E8F0" />

          {/* Waving Right Hand */}
          <motion.path
            d="M 75 48 C 82 45, 84 38, 86 35 C 88 38, 83 48, 77 54 Z"
            fill="#F1F5F9"
            stroke="#E2E8F0"
            strokeWidth="1"
            animate={{ rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ originX: '75px', originY: '48px' }}
          />

          {/* Left Hand */}
          <path
            d="M 25 48 C 18 50, 15 54, 13 58 C 12 56, 17 48, 23 44 Z"
            fill="#F1F5F9"
            stroke="#E2E8F0"
            strokeWidth="1"
          />

          {/* Tooth Main Body */}
          <path
            d="M 25 35 
               C 25 12, 45 12, 50 22 
               C 55 12, 75 12, 75 35 
               C 75 58, 70 72, 68 85 
               C 67 90, 60 90, 58 78 
               C 55 68, 45 68, 42 78 
               C 40 90, 33 90, 32 85 
               C 30 72, 25 58, 25 35 Z"
            fill="url(#toothGrad)"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />

          {/* Eyes (Two black circles or blinking lines) */}
          {isBlinking ? (
            <>
              {/* Closed Eye Left */}
              <path d="M 33 38 Q 37 41 41 38" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Closed Eye Right */}
              <path d="M 59 38 Q 63 41 67 38" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </>
          ) : (
            <>
              {/* Open Eye Left */}
              {expression === 'wink' ? (
                <path d="M 33 38 Q 37 41 41 38" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              ) : (
                <g>
                  <circle cx="37" cy="38" r="4.5" fill="#0F172A" />
                  <circle cx="35.5" cy="36.5" r="1.5" fill="#FFFFFF" />
                </g>
              )}

              {/* Open Eye Right */}
              <g>
                <circle cx="63" cy="38" r="4.5" fill="#0F172A" />
                <circle cx="61.5" cy="36.5" r="1.5" fill="#FFFFFF" />
              </g>
            </>
          )}

          {/* Cheeks (Blushing pink) */}
          {expression !== 'sad' && (
            <>
              <circle cx="31" cy="43" r="3" fill="url(#cheekGrad)" opacity="0.6" />
              <circle cx="69" cy="43" r="3" fill="url(#cheekGrad)" opacity="0.6" />
            </>
          )}

          {/* Mouth expressions */}
          {expression === 'smile' && (
            <path d="M 44 47 Q 50 53 56 47" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
          )}

          {expression === 'happy' && (
            <path d="M 44 47 Q 50 57 56 47 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="1.5" />
          )}

          {expression === 'wink' && (
            <path d="M 44 47 Q 50 55 56 47 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="1.5" />
          )}

          {expression === 'surprised' && (
            <circle cx="50" cy="49" r="3" fill="#0F172A" />
          )}

          {expression === 'sad' && (
            <path d="M 45 51 Q 50 46 55 51" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
          )}
        </svg>

        {/* Small floating shine sparkles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute top-2 right-2 text-dental-sky"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}
