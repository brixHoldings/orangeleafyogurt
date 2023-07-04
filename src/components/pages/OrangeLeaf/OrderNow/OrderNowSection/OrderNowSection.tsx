'use client';

import Image from 'next/image';

import theme from '@styles/theme';

import {
  Title,
  Container,
  TextContainer,
  SubTitle,
  Cards,
  Card,
  ImageWrapper,
  StyledFloatingImage,
  StyledFloatingYellowBarImage,
} from './OrderNowSection.style';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import type { FC } from 'react';

const OrderNowSection: FC = () => (
  <>
    <style global jsx>{`
      body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      main {
        flex: 1;
      }
    `}</style>
    <Container>
      <StyledFloatingYellowBarImage
        alt="background"
        bottom="-8px"
        height="clamp(357px, 31.94vw, 483px)"
        left="0"
        src="/images/order-now-rectangle.png"
        style={{ zIndex: -1 }}
        width="clamp(691px, 61.83vw, 935px)"
        priority
        renderInBody
      />
      <FloatingImage
        alt="background"
        bottom="clamp(-101px, -9.39vw, -142px)"
        height="clamp(235px, 17.65vw, 267px)"
        hideUnder={theme.breakpoints.smallScreen}
        left="4.62vw"
        src="/images/White_frosting_splash_topdown.png"
        style={{ zIndex: -1 }}
        width="clamp(244px, 18.32vw, 277px)"
        priority
        renderInBody
      />
      <StyledFloatingImage
        alt="background"
        height="718.21px"
        right="0"
        src="/images/slice30.png"
        style={{ zIndex: -1 }}
        top="4.29vw"
        width="709.1px"
        priority
        renderInBody
      />
      <TextContainer>
        <Title>Frozen yogurt cravings?</Title>
        <SubTitle>Order now</SubTitle>
      </TextContainer>
      <Cards>
        <a href="https://www.grubhub.com/food/orange_leaf_frozen_yogurt" target="_blank">
          <Card>
            <ImageWrapper>
              <Image alt="Grubhub logo" src="/images/Grubhub-logo.png" style={{ objectFit: 'cover' }} fill priority />
            </ImageWrapper>
          </Card>
        </a>
        <a href="https://www.doordash.com/business/orange-leaf-frozen-yogurt-10891/" target="_blank">
          <Card>
            <ImageWrapper>
              <Image
                alt="DoorDash logo"
                src="/images/DoorDash-Emblem.png"
                style={{ objectFit: 'cover' }}
                fill
                priority
              />
            </ImageWrapper>
          </Card>
        </a>
        <a href="https://www.ubereats.com/brand/orange-leaf" target="_blank">
          <Card>
            <ImageWrapper>
              <Image
                alt="Uber Eats logo"
                src="/images/Uber-Eats-Logo.png"
                style={{ objectFit: 'cover' }}
                fill
                priority
              />
            </ImageWrapper>
          </Card>
        </a>
      </Cards>
    </Container>
  </>
);

export default OrderNowSection;
