'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  JoinClubContainer,
  GiftCardContainer,
  Title,
  Subtitle,
  ClubMailIconWrapper,
  MainContentWrapper,
  CardContentWrapper,
  FlexWrapper,
  Button,
  CardPalaceHolder,
  CardSubtitle,
  FloatingCakeImage,
} from './Promo.styles';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import type { FC } from 'react';

const Promo: FC = () => {
  const { width } = useWindowSize();

  const isTablet = width <= theme.breakpoints.tablet;

  const card = (
    <CardContentWrapper>
      <Image alt="card" src="/images/E-Gift Card OL_Paytronix_cropped.png" style={{ objectFit: 'contain' }} fill />
    </CardContentWrapper>
  );

  return (
    <Container>
      <FloatingCakeImage
        alt="cake"
        bottom="0"
        height="clamp(168px, 44.51vw, 673px)"
        right="6px"
        src="/images/OrangeLeafPromoCakeImage.png"
        style={{ zIndex: 2 }}
        top="0"
        width="clamp(162px, 42.92vw, 649px)"
      />
      <JoinClubContainer>
        <Title>Join our club</Title>
        <FlexWrapper>
          <Subtitle>to get special offers</Subtitle>
          <Link href="/e-club">
            <Button>JOIN E-CLUB</Button>
          </Link>
        </FlexWrapper>

        <ClubMailIconWrapper>
          <FloatingCakeImage
            alt="mail icon"
            height="clamp(64px, 8.79vw, 133px)"
            src="/images/EClub.svg"
            width="clamp(64px, 8.79vw, 133px)"
          />
        </ClubMailIconWrapper>
      </JoinClubContainer>
      <GiftCardContainer>
        <MainContentWrapper>
          <CardSubtitle>... or get a</CardSubtitle>
          <Title>Gift card</Title>
        </MainContentWrapper>
        {isTablet ? card : <CardPalaceHolder>{card}</CardPalaceHolder>}
      </GiftCardContainer>
    </Container>
  );
};

export default Promo;
