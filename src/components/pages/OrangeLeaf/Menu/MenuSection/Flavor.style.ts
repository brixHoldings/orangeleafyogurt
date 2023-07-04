import { motion } from 'framer-motion';
import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

export const FlavorCard = styled.div`
  position: relative;
  width: fit-content;
`;
export const StrawberryImage = styled(FloatingImage)`
  z-index: 1;
`;
export const FlavorWrapper = styled(motion.div)`
  width: calc(25% - 20px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: 33.33333%;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const FlavorTitle = styled.span<{ marginTop: string }>`
  font-size: clamp(18px, 1.58vw, 24px);
  line-height: clamp(24px, 2.11vw, 32px);
  color: #421b00;
  text-align: center;
  display: inline-block;
  font-family: var(--gotham-ultra);
  position: relative;
  z-index: -2;
  max-width: 283px;

  margin-top: ${({ marginTop }): string => marginTop};
`;

export const BgImageWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  inset: 0;
  align-items: center;
  justify-content: center;
`;

export const BgeImageRelativeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -3;
`;

export const FlavorDescription = styled(motion.div)`
  position: absolute;
  padding: 32px;
  min-width: 283px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
`;

export const FlavorDescriptionTitle = styled.span`
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const FlavorDescriptionSubtitle = styled.h1`
  text-transform: capitalize;
  font-size: 18px;
  line-height: 25px;
`;
