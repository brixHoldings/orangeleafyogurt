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

import { ButtonRound } from '../Classics/Classics.styles';
import Link from 'next/link';
import { WhatsNewSlice } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';

const WhatsNew: FC<{ slice: WhatsNewSlice }> = ({
  slice: {
    primary: { title, card_subtitle, card_text, card_title, card_button, image },
  },
}) => (
  <>
    <MainTitle dangerouslySetInnerHTML={{ __html: title as string }}></MainTitle>
    <Container>
      <SideImage>
        <PrismicNextImage field={image} style={{ objectFit: 'cover' }} fill />
      </SideImage>
      <SideText>
        <TinyTitle dangerouslySetInnerHTML={{ __html: card_subtitle as string }}></TinyTitle>
        <Title dangerouslySetInnerHTML={{ __html: card_title as string }}></Title>
        <Description dangerouslySetInnerHTML={{ __html: card_text as string }}></Description>
        <Link href="/menu">
          <ButtonRound dangerouslySetInnerHTML={{ __html: card_button as string }}></ButtonRound>
        </Link>
      </SideText>
      <SplashImage alt="YogurtSplashImage" height={348} src="/images/yogurt_splash_2.png" width={365} />
    </Container>
  </>
);

export default WhatsNew;
