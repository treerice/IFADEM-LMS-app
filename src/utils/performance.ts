import { useEffect, useState, useRef } from 'react';

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '50px' }
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [targetRef, isIntersecting] as const;
};

// Performance metrics tracking
export const trackPageLoadMetrics = () => {
  if (window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const metrics = {
      dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcpConnection: navigation.connectEnd - navigation.connectStart,
      timeToFirstByte: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
      fullPageLoad: navigation.loadEventEnd - navigation.navigationStart
    };
    return metrics;
  }
  return null;
};

// Resource hint generation
export const generateResourceHints = (resources: string[]) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    const isImage = resource.match(/\.(jpg|jpeg|png|gif|webp)$/i);
    
    if (isImage) {
      link.rel = 'prefetch';
      link.as = 'image';
    } else {
      link.rel = 'preload';
      link.as = 'script';
    }
    
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Image optimization utilities
export const getOptimizedImageUrl = (url: string, width: number, quality = 75) => {
  // Check if the URL is from an image CDN that supports optimization
  if (url.includes('images.unsplash.com')) {
    return `${url}&w=${width}&q=${quality}&auto=format`;
  }
  return url;
};

// Component load timing
export const useComponentLoadTiming = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.debug(`${componentName} render time: ${endTime - startTime}ms`);
    };
  }, [componentName]);
};

// Cache management
type CacheOptions = {
  maxAge?: number; // in milliseconds
  maxSize?: number; // in items
};

export class ClientCache {
  private cache: Map<string, { value: any; timestamp: number }>;
  private maxAge: number;
  private maxSize: number;

  constructor(options: CacheOptions = {}) {
    this.cache = new Map();
    this.maxAge = options.maxAge || 5 * 60 * 1000; // 5 minutes default
    this.maxSize = options.maxSize || 100; // 100 items default
  }

  set(key: string, value: any): void {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = Array.from(this.cache.entries())
        .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0][0];
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  clear(): void {
    this.cache.clear();
  }
}

// Create singleton cache instance
export const globalCache = new ClientCache();