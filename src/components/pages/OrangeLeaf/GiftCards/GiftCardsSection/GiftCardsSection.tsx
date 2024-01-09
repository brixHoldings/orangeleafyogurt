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
import { GiftCardsPageSlice } from 'prismicio-types';

const GiftCardsSection: FC<{ slice: GiftCardsPageSlice }> = ({
  slice: {
    primary: { header_title, header_text, header_button, section_title, card_button, card_text, card_title },
  },
}) => (
  <>
    <HeaderBg>
      <ImageWrapper>
        <Image alt="background" src="/images/image42.jpg" style={{ objectFit: 'cover' }} fill priority />
      </ImageWrapper>
      <HeaderPaperWrapper>
        <GiftCardsMaxWidthWrapper>
          <HeaderPaper>
            <HeaderTitle dangerouslySetInnerHTML={{ __html: header_title as string }}></HeaderTitle>
            <HeaderText dangerouslySetInnerHTML={{ __html: header_text as string }}></HeaderText>
            <a href="https://orangeleaf.myguestaccount.com/guest/egift?page=cardInfo" target="_blank">
              <Button dangerouslySetInnerHTML={{ __html: header_button as string }}></Button>
            </a>
          </HeaderPaper>
        </GiftCardsMaxWidthWrapper>
      </HeaderPaperWrapper>
      <YellowBar />
    </HeaderBg>
    <GiftCardsMaxWidthWrapper>
      <ChoseFromMultipleDesigns
        dangerouslySetInnerHTML={{ __html: section_title as string }}
      ></ChoseFromMultipleDesigns>
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
          <AlreadyHaveAGiftCardTitle
            dangerouslySetInnerHTML={{ __html: card_title as string }}
          ></AlreadyHaveAGiftCardTitle>
          <AlreadyHaveAGiftCardText
            dangerouslySetInnerHTML={{ __html: card_text as string }}
          ></AlreadyHaveAGiftCardText>
          <a href="https://orangeleaf.myguestaccount.com/guest/nologin/account-balance" target="_blank">
            <Button dangerouslySetInnerHTML={{ __html: card_button as string }}></Button>
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
