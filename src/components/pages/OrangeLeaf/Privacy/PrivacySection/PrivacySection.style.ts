import styled from 'styled-components';
import theme from '@styles/theme';

const minBannerHeight = '220px';
const maxBannerHeight = '463px';
const maxWidth = '1153px';

export const Container = styled.div`
  position: relative;
  height: clamp(${minBannerHeight}, 30.62vw, ${maxBannerHeight});
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const Paper = styled.section`
  width: 100%;
  margin-inline: auto;
  max-width: ${maxWidth};
  position: relative;
  padding-top: clamp(24px, 7.07vw, 107px);
  &::before {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: -1;
    width: 100%;
    height: calc((clamp(${minBannerHeight}, 30.62vw, ${maxBannerHeight}) / 2) + 1px);
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding-inline: clamp(32px, 7.67vw, 116px);
    transform: translateY(calc(clamp(${minBannerHeight}, 30.62vw, ${maxBannerHeight}) / -2));
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(24px, 3.43vw, 52px);
  line-height: clamp(32px, 4.76vw, 72px);
  margin-bottom: clamp(24px, 2.11vw, 32px);
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 24px;
`;
