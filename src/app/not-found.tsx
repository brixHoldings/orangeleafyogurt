'use client';

import { Container, FlexWrapper, StyledFloatingImage, Title, SubTitle } from './not-found.style';

import type { FC } from 'react';
import Link from 'next/link';

import { ButtonOutlined } from '@components/pages/OrangeLeaf/common/ButtonOutlined/ButtonOutlined';

const NotFound: FC = () => (
  <Container>
    <StyledFloatingImage
      alt="background"
      height="718.21px"
      right="0"
      src="/images/slice30.png"
      style={{ zIndex: -1 }}
      top="4.29vw"
      width="709.1px"
      renderInBody
    />
    <FlexWrapper>
      <Title>Error 404</Title>
      <SubTitle>Page not found!</SubTitle>
      <Link href="/orange-leaf/">
        <ButtonOutlined>Go back home</ButtonOutlined>
      </Link>
    </FlexWrapper>
  </Container>
);

export default NotFound;
