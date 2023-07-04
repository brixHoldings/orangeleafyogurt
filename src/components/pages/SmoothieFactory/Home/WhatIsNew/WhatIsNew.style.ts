import styled from 'styled-components';
import theme from '@styles/theme';

export const WhatsNewWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: clamp(72px, 15.01vw, 227px);
  gap: clamp(58px, 9.78vw, 148px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const WhatsNewTitle = styled.h1`
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  margin-bottom: clamp(21px, 2.11vw, 32px);
  color: #ed6c32;
`;

export const WhatsNewSubtitle = styled.h2`
  font-size: clamp(21px, 1.85vw, 28px);
  line-height: clamp(28px, 2.64vw, 40px);
  margin-bottom: clamp(12px, 1.05vw, 16px);
`;

export const WhatsNewText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #474747;
  max-width: 433px;
  margin-bottom: clamp(21px, 2.11vw, 32px);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const CtaButton = styled.button`
  font-size: clamp(15px, 1.05vw, 16px);
  line-height: clamp(22px, 1.58vw, 24px);
  text-align: center;
  background-color: #23aa5d;
  padding: 8px clamp(12px, 1.58vw, 24px);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;
