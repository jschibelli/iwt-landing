import { useState, useEffect } from 'react';

export const useReducedMotion = (): boolean => {
  // Default to false to ensure animations run server-side on first render
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } 
    // Older browsers
    else {
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, []);
  
  return prefersReducedMotion;
}; 