import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  priority = false,
  quality = 85,
  sizes = '(max-width: 375px) 100vw, (max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={false}
      quality={quality}
      priority={priority}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
} 