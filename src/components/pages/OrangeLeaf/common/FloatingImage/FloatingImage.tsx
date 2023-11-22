import Image from 'next/image';
import { createPortal } from 'react-dom';
import { PrismicNextImage } from '@prismicio/next';

import { ImageOuterWrapper, ImageWrapper } from './FloatingImage.styles';

import type { CSSProperties, FC } from 'react';
import { ImageFieldImage } from '@prismicio/client';

const FloatingImage: FC<{
  src?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  height: string;
  width: string;
  alt?: string;
  hideUnder?: number;
  renderInBody?: boolean;
  priority?: boolean;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  field?: ImageFieldImage | null | undefined;
}> = ({
  src,
  top,
  left,
  height,
  width,
  right,
  bottom,
  hideUnder,
  alt,
  renderInBody = false,
  imageStyle,
  priority = false,
  field,
  ...rest
}) => {
  const content = (
    <ImageOuterWrapper bottom={bottom} hideUnder={hideUnder} left={left} right={right} top={top} {...rest}>
      <ImageWrapper className="image-wrapper" height={height} width={width}>
        {field === undefined && alt && src ? (
          <Image
            alt={alt}
            className="image"
            priority={priority}
            src={src}
            style={{ objectFit: 'contain', ...imageStyle }}
            fill
          />
        ) : (
          <PrismicNextImage
            className="image"
            priority={priority}
            style={{ objectFit: 'contain', ...imageStyle }}
            fill
            field={field}
          />
        )}
      </ImageWrapper>
    </ImageOuterWrapper>
  );
  return renderInBody && typeof window === 'object' ? createPortal(content, document.body) : content;
};

export default FloatingImage;
