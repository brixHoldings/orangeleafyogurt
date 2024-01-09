'use client';

import Image from 'next/image';

import { CircularDiv, Container, ContentContainer, Text, Title, ImageContainer } from './PurposeSection.styles';

import type { FC } from 'react';
import { FranchisingPurposeSectionSlice } from 'prismicio-types';

const PurposeSection: FC<{ slice: FranchisingPurposeSectionSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => (
  <Container>
    <ContentContainer>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
      <CircularDiv />
    </ContentContainer>
    <ImageContainer>
      <Image fill alt="GummyWormsImage" src="/images/GummyWormsTopdown.png" />
    </ImageContainer>
    <ImageContainer isBottom>
      <Image fill alt="GreenFrostingImage" src="/images/GreenFrosting.png" />
    </ImageContainer>
  </Container>
);

export default PurposeSection;
