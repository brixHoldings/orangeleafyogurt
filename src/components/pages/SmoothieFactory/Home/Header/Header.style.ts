import styled from 'styled-components';
import FloatingImage from '@components/pages/OrangeLeaf/common/FloatingImage/FloatingImage';

export const HeaderArea = styled.section`
  width: 100%;
  height: clamp(652px, 55.95vw, 846px);
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: clamp(217px, 31.61vw, 478px);
`;

export const CtaArea = styled.div`
  position: relative;
  z-index: 1;
  margin-top: clamp(80px, 9.85vw, 149px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 32px;
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(32px, 3.96vw, 60px);
  line-height: clamp(41px, 4.62vw, 70px);
  text-align: center;
  color: #fff;
  margin-bottom: clamp(8px, 1.05vw, 16px);
  text-transform: uppercase;
`;

export const HeaderText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
  max-width: 639px;
`;

export const HeaderButton = styled.button`
  font-size: clamp(15px, 1.05vw, 16px);
  line-height: clamp(22px, 1.58vw, 24px);
  text-align: center;
  background-color: #23aa5d;
  padding: clamp(8px, 1.25vw, 19px) clamp(12px, 3.1vw, 47px);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

export const FloatingGlassImage = styled(FloatingImage)`
  position: absolute;
  bottom: clamp(-51px, -7.73vw, -117px);
`;
