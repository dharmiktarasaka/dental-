import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackIcon,
  ...props 
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div 
        className={`bg-gradient-to-tr from-dental-sky/30 via-dental-aqua/10 to-dental-sky/10 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        style={{ minHeight: '120px' }}
      >
        <div className="w-12 h-12 bg-white/90 text-dental-aqua rounded-2xl flex items-center justify-center shadow-sm mb-3">
          {fallbackIcon || <Stethoscope className="w-6 h-6 animate-pulse" />}
        </div>
        <span className="text-[10px] font-bold text-dental-navy/80 uppercase tracking-widest leading-normal max-w-[80%]">
          {alt || 'Dental Clinic Care'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
}
