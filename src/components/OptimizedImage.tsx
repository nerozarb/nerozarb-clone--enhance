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
  placeholder = 'blur',
  blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      quality={quality}
      loading={priority ? undefined : 'lazy'}
      placeholder={props.src.toString().startsWith('http') ? 'blur' : placeholder}
      blurDataURL={props.src.toString().startsWith('http') ? blurDataURL : props.blurDataURL}
      {...props}
    />
  );
}
