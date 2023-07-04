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

const HowToOrangeLeaf: FC = () => (
  <>
    <Wrapper>
      <Title>More Than Just Froyo</Title>
      <Subtitle>...It’s a place where... </Subtitle>
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
        <CardText>
          ...you can express your flavor freedom and enjoy a delicious treat with your friends and family.
        </CardText>
      </Card>
    </Circle>
  </>
);

export default HowToOrangeLeaf;
