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
import { HomePromoSlice } from 'prismicio-types';

const Promo: FC<{ slice: HomePromoSlice }> = ({
  slice: {
    primary: { title_1, subtitle_1, button_1, title_2, subtitle_2 },
  },
}) => {
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
        <Title dangerouslySetInnerHTML={{ __html: title_1 as string }}></Title>
        <FlexWrapper>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle_1 as string }}></Subtitle>
          <Link href="/e-club-signup">
            <Button dangerouslySetInnerHTML={{ __html: button_1 as string }}></Button>
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
          <CardSubtitle dangerouslySetInnerHTML={{ __html: subtitle_2 as string }}></CardSubtitle>
          <Title dangerouslySetInnerHTML={{ __html: title_2 as string }}></Title>
        </MainContentWrapper>
        {isTablet ? card : <CardPalaceHolder>{card}</CardPalaceHolder>}
      </GiftCardContainer>
    </Container>
  );
};

export default Promo;
