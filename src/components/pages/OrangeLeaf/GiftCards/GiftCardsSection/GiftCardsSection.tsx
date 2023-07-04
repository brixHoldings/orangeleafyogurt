'use client';

import Image from 'next/image';
import Lottie from 'lottie-react';

import {
  HeaderBg,
  ImageWrapper,
  HeaderPaper,
  HeaderTitle,
  HeaderPaperWrapper,
  GiftCardsMaxWidthWrapper,
  HeaderText,
  Button,
  YellowBar,
  Cards,
  ChoseFromMultipleDesigns,
  FloatingCard,
  CardWrapper,
  FloatingShakeImage,
  CircleRelativeWRapper,
  AlreadyHaveAGiftCard,
  AlreadyHaveAGiftCardWrapper,
  AlreadyHaveAGiftCardTitle,
  PinkBg,
  AlreadyHaveAGiftCardText,
  FloatingIconImage,
  LottieWrapper,
} from './GiftCardsSection.style';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import card from '../../../../../../public/lottie/cards-anim.json';
import wave1 from '../../../../../../public/lottie/wave1.json';

import type { FC } from 'react';

const GiftCardsSection: FC = () => (
  <>
    <HeaderBg>
      <ImageWrapper>
        <Image alt="background" src="/images/image42.jpg" style={{ objectFit: 'cover' }} fill priority />
      </ImageWrapper>
      <HeaderPaperWrapper>
        <GiftCardsMaxWidthWrapper>
          <HeaderPaper>
            <HeaderTitle>Gift an EXPERIENCE!</HeaderTitle>
            <HeaderText>
              Unlock a world of delightful experiences with Orange Leaf gift cards. Treat yourself or a loved one to the
              ultimate creative treat—customizable frozen yogurt creations that tantalize your taste buds. The gift of
              Orange Leaf is a ticket to a blissful journey of flavors and toppings. It&apos;s the tastiest gift idea!
            </HeaderText>
            <a href="https://orangeleaf.myguestaccount.com/guest/egift?page=cardInfo" target="_blank">
              <Button>Get a gift card!</Button>
            </a>
          </HeaderPaper>
        </GiftCardsMaxWidthWrapper>
      </HeaderPaperWrapper>
      <YellowBar />
    </HeaderBg>
    <GiftCardsMaxWidthWrapper>
      <ChoseFromMultipleDesigns>
        Choose from
        <br /> multiple designs...
      </ChoseFromMultipleDesigns>
    </GiftCardsMaxWidthWrapper>
    <Cards>
      <CardWrapper>
        <FloatingShakeImage alt="shake" height="704px" left="-53%" src="/images/image45.png" top="-10%" width="631px" />
        <FloatingCard>
          <Lottie animationData={card} />
        </FloatingCard>
        <CircleRelativeWRapper>
          <Image alt="card" src="/images/E-Gift Card OL_Paytronix_cropped.png" style={{ objectFit: 'contain' }} fill />
        </CircleRelativeWRapper>
      </CardWrapper>
    </Cards>
    <PinkBg>
      <AlreadyHaveAGiftCardWrapper>
        <AlreadyHaveAGiftCard>
          <AlreadyHaveAGiftCardTitle>Already have a giftcard?</AlreadyHaveAGiftCardTitle>
          <AlreadyHaveAGiftCardText>
            It’s easy to check your balance and review <br /> transactions.
          </AlreadyHaveAGiftCardText>
          <a href="https://orangeleaf.myguestaccount.com/guest/nologin/account-balance" target="_blank">
            <Button>Check your balance</Button>
          </a>
        </AlreadyHaveAGiftCard>
        <FloatingImage
          alt="gummy worms"
          bottom="25%"
          height="clamp(76px,11.83vw, 179px)"
          right="42%"
          src="/images/image28.png"
          width="clamp(248px, 38.69vw, 585px)"
        />
        <FloatingIconImage
          alt="card icon"
          height="clamp(72px,9.85vw, 149px)"
          src="/images/Group99.svg"
          width="clamp(72px, 9.85vw, 149px)"
        />
      </AlreadyHaveAGiftCardWrapper>
    </PinkBg>
    <LottieWrapper>
      <Lottie animationData={wave1} />
    </LottieWrapper>
  </>
);

export default GiftCardsSection;
