'use client';

import { useAnimate, motion } from 'framer-motion';

import {
  FlavorCard,
  StrawberryImage,
  FlavorWrapper,
  FlavorTitle,
  BgImageWrapper,
  BgeImageRelativeWrapper,
  FlavorDescription,
  FlavorDescriptionTitle,
  FlavorDescriptionSubtitle,
} from './Flavor.style';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import type { FC } from 'react';

type ImageStyle = {
  transform?: string;
};

type DescriptionStyle = {
  background?: string;
  bottom?: string;
  transform?: string;
  zIndex?: number;
};

type Description = {
  style?: DescriptionStyle;
  subtitle: string;
  subtitleStyle?: {
    color: string;
  };
  title: string;
  titleStyle?: {
    color: string;
  };
};

type Image = {
  alt: string;
  height: string;
  src: string;
  style?: ImageStyle;
  width: string;
  top?: string;
};

type FlavorType = {
  bgImage: Image;
  description: Description;
  mainImage: Image;
  marginTop: string;
  sideImage: Image & {
    bottom: string;
    right: string;
  };
  title: string;
};

const Flavor: FC<{ flavor: FlavorType }> = ({ flavor }) => {
  const [flavorImageRef, animateFlavorImage] = useAnimate();
  const [sideImageRef, animateSideImage] = useAnimate();
  const [bgImageRef, animateBgImageRef] = useAnimate();
  const { width } = useWindowSize();
  const isMobile = width <= theme.breakpoints.mobile;
  const { title, mainImage, sideImage, marginTop, bgImage, description } = flavor;

  const onMouseEnter = (): void => {
    if (isMobile) {
      return;
    }
    void animateFlavorImage(
      flavorImageRef.current,
      {
        scale: 1.1,
        y: -25,
      },
      { duration: 0.3 },
    );
    void animateSideImage(sideImageRef.current, { x: 50, y: -25 }, { duration: 0.1 });
    void animateBgImageRef(bgImageRef.current, { opacity: 1 }, { duration: 0.3 });
  };

  const onMouseLeave = (): void => {
    if (isMobile) {
      return;
    }
    void animateFlavorImage(flavorImageRef.current, { scale: 1, y: 0 });
    void animateSideImage(sideImageRef.current, { x: 0, y: 0 });
    void animateBgImageRef(bgImageRef.current, { opacity: 0 });
  };

  return (
    <FlavorWrapper key={title} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <FlavorCard>
        <BgImageWrapper ref={bgImageRef} initial={{ opacity: isMobile ? 1 : 0 }}>
          <BgeImageRelativeWrapper>
            <FloatingImage
              alt={bgImage.alt}
              height={bgImage.height}
              src={bgImage.src}
              style={bgImage.style}
              top={bgImage.top}
              width={bgImage.width}
            />
          </BgeImageRelativeWrapper>
          <FlavorDescription style={description.style}>
            <FlavorDescriptionTitle style={description.titleStyle}>{description.title}</FlavorDescriptionTitle>
            <FlavorDescriptionSubtitle style={description.subtitleStyle}>
              {description.subtitle}
            </FlavorDescriptionSubtitle>
          </FlavorDescription>
        </BgImageWrapper>
        <motion.div ref={flavorImageRef} initial={{ y: 0 }}>
          <FloatingImage
            alt={mainImage.alt}
            height={mainImage.height}
            src={mainImage.src}
            style={mainImage.style}
            width={mainImage.width}
          />
        </motion.div>
        <motion.div ref={sideImageRef} initial={{ x: 0, y: 0 }}>
          <StrawberryImage
            alt={sideImage.alt}
            bottom={sideImage.bottom}
            height={sideImage.height}
            right={sideImage.right}
            src={sideImage.src}
            style={sideImage.style}
            width={sideImage.width}
          />
        </motion.div>
      </FlavorCard>
      <FlavorTitle marginTop={marginTop}>{title}</FlavorTitle>
    </FlavorWrapper>
  );
};

export default Flavor;
