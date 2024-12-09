import React, { useState } from 'react';
import { useIntersectionObserver } from '../../utils/performance';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
}

const LazyImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#1f2937',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: placeholderColor, width, height }}
    >
      {isIntersecting && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;