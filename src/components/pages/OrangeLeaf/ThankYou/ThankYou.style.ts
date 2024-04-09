import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';

export const Container = styled(MaxWidthWrapper)`
  position: relative;
  padding-top: clamp(180px, 24.27vw, 367px);
  padding-bottom: clamp(163px, 14.88vw, 225px);
`;

export const Title = styled.h1`
  font-size: clamp(35px, 5.29vw, 80px);
  line-height: clamp(45px, 5.68vw, 86px);
  margin-bottom: 7px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  max-width: 567px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
