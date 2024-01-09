'use client';

import Lottie from 'lottie-react';

import type { FC } from 'react';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import {
  Subtitle,
  Title,
  Wrapper,
  Circle,
  ImageOuterWrapper,
  ImageWrapper,
  Card,
  CardText,
  LottieRotatingWords,
} from './HowToOrangeLeaf.style';

import froyo from '../../../../../../public/lottie/froyo-anim.json';
import sloganRotate from '../../../../../../public/lottie/slogan-rotate.json';
import { HomeHeadingSlice } from 'prismicio-types';

const HowToOrangeLeaf: FC<{ slice: HomeHeadingSlice }> = ({
  slice: {
    primary: { title, subtitle, subtitle_2 },
  },
}) => (
  <>
    <Wrapper>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle as string }}></Subtitle>
    </Wrapper>
    <FloatingImage
      alt="background"
      height="clamp(258px, 33.73vw, 510px)"
      imageStyle={{ objectFit: 'cover' }}
      right="0"
      src="/images/OrangeLeafHomeTitleImage.png"
      top="0"
      width="100vw"
      priority
      renderInBody
    />
    <Circle>
      <LottieRotatingWords>
        <Lottie animationData={sloganRotate} />
      </LottieRotatingWords>
      <ImageOuterWrapper>
        <ImageWrapper>
          <Lottie animationData={froyo} />
        </ImageWrapper>
      </ImageOuterWrapper>
      <Card>
        <CardText dangerouslySetInnerHTML={{ __html: subtitle_2 as string }}></CardText>
      </Card>
    </Circle>
  </>
);

export default HowToOrangeLeaf;
