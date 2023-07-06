'use client';

import {
  Container,
  Description,
  MainTitle,
  SideImage,
  SideText,
  SplashImage,
  TinyTitle,
  Title,
} from './WhatsNew.styles';

import type { FC } from 'react';
import Image from 'next/image';

import { ButtonRound } from '../Classics/Classics.styles';
import Link from 'next/link';

const WhatsNew: FC = () => (
  <>
    <MainTitle>What&apos;s new?</MainTitle>
    <Container>
      <SideImage>
        <Image alt="whats new" src="/images/ol-whatsnew.jpg" style={{ objectFit: 'cover' }} fill />
      </SideImage>
      <SideText>
        <TinyTitle>SUMMER IS HERE</TinyTitle>
        <Title>WATERMELON FROYO</Title>
        <Description>
          Satisfy your summer cravings with our irresistible Watermelon Froyo. Experience the delightful blend of real
          watermelon and creamy frozen yogurt, delivering a burst of refreshing flavors. Beat the heat and indulge in
          this guilt-free treat that will keep you coming back for more.
        </Description>
        <Link href="/menu">
          <ButtonRound>See the menu</ButtonRound>
        </Link>
      </SideText>
      <SplashImage alt="YogurtSplashImage" height={348} src="/images/yogurt_splash_2.png" width={365} />
    </Container>
  </>
);

export default WhatsNew;
