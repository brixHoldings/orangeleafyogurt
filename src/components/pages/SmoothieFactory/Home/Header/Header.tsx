'use client';

import Image from 'next/image';

import { HeaderArea, CtaArea, HeaderTitle, HeaderText, HeaderButton, FloatingGlassImage } from './Header.style';

import type { FC } from 'react';
import FloatingImage from '@components/pages/OrangeLeaf/common/FloatingImage/FloatingImage';

const Header: FC = () => (
  <HeaderArea>
    <Image alt="bg" src="/smoothie-factory/images/header-area-image2.jpg" style={{ objectFit: 'cover' }} fill />
    <CtaArea>
      <FloatingImage
        alt="header icon"
        height="clamp(90px,7.80vw, 118px)"
        src="/smoothie-factory/images/header-icon.svg"
        style={{ marginBottom: 'clamp(26px,1.98vw, 30px)' }}
        width="clamp(90px,7.80vw, 118px)"
      />
      <HeaderTitle>building a better you</HeaderTitle>
      <HeaderText>
        Smoothie Factory is for both athletes and those who want to pursue a more active lifestyle, and are looking for
        a snack or light meal to provide energy and nutrition of fruits and vegetables without added preservatives or
        sugar.
      </HeaderText>
      <HeaderButton>Become a part of the family</HeaderButton>
    </CtaArea>
    <FloatingGlassImage
      alt="glass of smoothie"
      height="clamp(180px,21.23vw, 321px)"
      src="/smoothie-factory/images/header-glass.png"
      width="clamp(249px,29.43vw, 445px)"
    />
  </HeaderArea>
);

export default Header;
