import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'loading' | 'quality'> {
  quality?: number;
  priority?: boolean;
}

/**
 * Optimized Image component with sensible defaults for performance
 * - Automatic format selection (AVIF/WebP)
 * - Lazy loading by default
 * - Quality optimization
 * - Blur placeholder support
 */
export default function OptimizedImage({
  quality = 75,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const isExternal = typeof props.src === 'string' && props.src.startsWith('http');
  
  return (
    <Image
      quality={quality}
      loading={priority ? undefined : 'lazy'}
      placeholder={isExternal ? 'empty' : props.placeholder}
      {...props}
    />
  );
}
