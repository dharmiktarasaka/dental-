import React, { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before Treatment", 
  afterLabel = "After Treatment",
  className = "" 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Add global window listeners for drag endings to prevent sticky drags
  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('pointerup', handleGlobalUp);
      window.addEventListener('pointercancel', handleGlobalUp);
    }
    return () => {
      window.removeEventListener('pointerup', handleGlobalUp);
      window.removeEventListener('pointercancel', handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-slate-100 ba-slider select-none cursor-ew-resize bg-slate-100"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-dental-navy/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm z-10 select-none">
          {afterLabel}
        </div>

        {/* Before Image (Overlay clipped with polygon mask) */}
        <div 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
          <div className="absolute top-4 left-4 bg-dental-aqua/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm z-10 select-none">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Separator Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable button icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-premium flex items-center justify-center border border-slate-100 hover:scale-110 active:scale-95 transition-transform duration-150 select-none">
            <div className="flex items-center space-x-0.5 text-dental-aqua">
              <span className="text-sm font-extrabold select-none">‹</span>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="text-sm font-extrabold select-none">›</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-slate-400 text-xs mt-3 text-center italic">
        *Drag the slider to compare results. Disclaimer: Individual dental outcomes may vary.
      </p>
    </div>
  );
}
