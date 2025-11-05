/**
 * Performance monitoring utilities for tracking Core Web Vitals
 * and custom performance metrics in production
 */

// Report Web Vitals to analytics
export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    const { name, value, id } = metric;
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics endpoint
    if (typeof window !== 'undefined') {
      navigator.sendBeacon?.('/api/analytics', JSON.stringify({
        metric: name,
        value,
        id,
        timestamp: Date.now(),
      }));
    }
  }
}

// Performance marks for custom measurements
export function markPerformance(name: string) {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(name);
  }
}

export function measurePerformance(name: string, startMark: string, endMark: string) {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`⚡ ${name}: ${measure.duration.toFixed(2)}ms`);
      }
      
      return measure.duration;
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }
}

// Detect slow network conditions
export function isSlowConnection(): boolean {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    return (
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g' ||
      connection?.saveData === true
    );
  }
  return false;
}

// Get device memory if available
export function getDeviceMemory(): number | undefined {
  if (typeof navigator !== 'undefined' && 'deviceMemory' in navigator) {
    return (navigator as any).deviceMemory;
  }
  return undefined;
}

// Check if device is low-end
export function isLowEndDevice(): boolean {
  const memory = getDeviceMemory();
  return memory !== undefined && memory < 4;
}

// Adaptive loading: Check if should load high-quality resources
export function shouldLoadHighQuality(): boolean {
  return !isSlowConnection() && !isLowEndDevice();
}
