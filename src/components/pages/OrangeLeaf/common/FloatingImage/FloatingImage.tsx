import Image from 'next/image';
import { createPortal } from 'react-dom';

import { ImageOuterWrapper, ImageWrapper } from './FloatingImage.styles';

import type { CSSProperties, FC } from 'react';

const FloatingImage: FC<{
  src: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  height: string;
  width: string;
  alt: string;
  hideUnder?: number;
  renderInBody?: boolean;
  priority?: boolean;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
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
  ...rest
}) => {
  const content = (
    <ImageOuterWrapper bottom={bottom} hideUnder={hideUnder} left={left} right={right} top={top} {...rest}>
      <ImageWrapper className="image-wrapper" height={height} width={width}>
        <Image
          alt={alt}
          className="image"
          priority={priority}
          src={src}
          style={{ objectFit: 'contain', ...imageStyle }}
          fill
        />
      </ImageWrapper>
    </ImageOuterWrapper>
  );
  return renderInBody && typeof window === 'object' ? createPortal(content, document.body) : content;
};

export default FloatingImage;
