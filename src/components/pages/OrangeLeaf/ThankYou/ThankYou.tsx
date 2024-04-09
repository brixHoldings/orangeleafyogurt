'use client';

import { Container, FlexWrapper, Title, Text } from './ThankYou.style';

import type { FC } from 'react';
import FloatingImage from '@components/pages/OrangeLeaf/common/FloatingImage/FloatingImage';
import { ThankYouSlice } from 'prismicio-types';

const ThankYou: FC<{ slice: ThankYouSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => (
  <Container>
    <FloatingImage
      alt="background"
      height="clamp(391px, 51.71vw, 782px)"
      right="0"
      src="/images/Group 24.png"
      style={{ zIndex: -1 }}
      top="0"
      width="clamp(278px, 36.77vw, 556px)"
    />
    <FlexWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
    </FlexWrapper>
  </Container>
);

export default ThankYou;
