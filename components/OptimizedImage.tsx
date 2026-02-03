
import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = "", alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Skeleton Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse z-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-yellow-400 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual Image */}
      <img
        alt={alt}
        className={`${className} relative z-10 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'
        }`}
        onLoad={(e) => {
            setIsLoaded(true);
            if (props.onLoad) props.onLoad(e);
        }}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </>
  );
};
