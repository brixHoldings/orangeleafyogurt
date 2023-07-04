'use client';

import {
  WhatsNewWrapper,
  WhatsNewTitle,
  WhatsNewSubtitle,
  TextContainer,
  WhatsNewText,
  RelativeWrapper,
  CtaButton,
} from './WhatIsNew.style';

import FloatingImage from '@components/pages/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';

const WhatIsNew: FC = () => (
  <MaxWidthWrapper>
    <WhatsNewWrapper>
      <RelativeWrapper>
        <FloatingImage
          alt="smoothie kitchen"
          height="clamp(330px,38.88vw, 588px)"
          src="/smoothie-factory/images/smoothie-kitchen.png"
          width="clamp(302px,35.58vw, 538px)"
        />
        <FloatingImage
          alt="kiwi"
          bottom="-13%"
          height="clamp(163px,19.24vw, 291px)"
          left="-3%"
          src="/smoothie-factory/images/kiwi.png"
          width="clamp(195px,23.01vw, 348px)"
        />
      </RelativeWrapper>
      <TextContainer>
        <WhatsNewTitle>What is new?</WhatsNewTitle>
        <WhatsNewSubtitle>SMOOTHIE + KITCHEN</WhatsNewSubtitle>
        <WhatsNewText>
          Introducing Smoothie + Kitchen, the newest addition to Smoothie Factory! Enjoy delicious, healthy smoothies
          and freshly made wraps, salads, and more!
        </WhatsNewText>
        <CtaButton>SEE OUR OFFERS</CtaButton>
      </TextContainer>
    </WhatsNewWrapper>
  </MaxWidthWrapper>
);

export default WhatIsNew;
