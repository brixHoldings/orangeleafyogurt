import styled, { css } from 'styled-components';

import type { CSSProp } from 'styled-components';

export const MainContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  jsutify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h2<{ step: 0 | 1 | 2 | 3 | 4 | 5 }>`
  line-height: 88px;
  font-size: 70px;
  color: #421b00;
  margin-top: 40px;
  z-index: 1;

  ${({ step }): string => (step === 0 ? 'margin-bottom: 96px;' : '')}
`;

export const ScrollChangeContent = styled.div`
  display: flex;
  align-items: center;
  width: 920px;
  height: 920px;
  background-image: url('/images/OrangeLeafHomeTopCircle.png');
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 1;
  position: relative;
`;

export const TopTitleImage = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/images/OrangeLeafHomeTitleImage.png');
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
`;

export const Subtitle = styled.p`
  font-size: 32px;
  margin-bottom: 64px;
  line-height: 32px;
  color: #ff6034;
`;

export const ImageSubtext = styled.p`
  font-size: 36px;
  line-height: 36px;
  color: #ff6034;
`;

export const BucketContainer = styled.div`
  position: absolute;
  bottom: 284px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Bucket = styled.div<{ fullBucket?: boolean }>`
  width: 399px;
  height: 294px;
  position: relative;
  background-image: url('/images/OrangeLeadHomeTopStep0Image.png');
  background-repeat: no-repeat;
  background-position: center;

  ${({ fullBucket }): CSSProp | string =>
    fullBucket
      ? css`
          width: 448px;
          height: 330px;
          background-image: url('/images/OrangeLeafHomeTopFullBucket.png');
          background-repeat: no-repeat;
          background-position: center;
        `
      : ''}
`;

export const EmptyBucketCircleText = styled.div`
  width: 223px;
  height: 223px;
  background-image: url('/images/OrangeLeadHomeTopStep0Image2.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -149px;
`;

export const EmptyBucketTextContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 20px;
`;

export const EmptyBucketBottomContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SmallText = styled.p`
  font-size: 24px;
  line-height: 32px;
  white-space: nowrap;
`;

export const ArrowIcon = styled.div`
  width: 18px;
  height: 32px;
  background-image: url('/images/arrow-down.png');
  background-repeat: no-repeat;
  background-position: center;
`;

export const FullBucketLogo = styled.div`
  width: 80px;
  height: 81px;
  background-image: url('/images/OrangeLeafHomeTopLogo.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 106px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Icecream = styled.div`
  width: 406px;
  height: 590px;
  background-image: url('/images/OrangeLeafHomeTopIcecream.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Cereals = styled.div`
  width: 571px;
  height: 703px;
  background-image: url('/images/OrangeLeafHomeTopToppings.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 244px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Froyo = styled.div`
  width: 434px;
  height: 589px;
  background-image: url('/images/OrangeLeafHomeTopUnleashMain.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 166px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Popcorn = styled.div`
  width: 510px;
  height: 141px;
  background-image: url('/images/OrangeLeafHomeTopPopcorn.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 141px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TextWithoutHeart = styled.div`
  width: 244px;
  height: 244px;
  background-image: url('/images/OrangeLeafHomeTopCircleText.png');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  right: 87px;
`;

export const LastStepText = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  line-height: 48px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 48px 16% 0;
  box-sizing: border-box;
  text-align: center;
`;
