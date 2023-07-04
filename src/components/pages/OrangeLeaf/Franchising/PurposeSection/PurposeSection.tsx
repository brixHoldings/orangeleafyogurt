import Image from 'next/image';

import { CircularDiv, Container, ContentContainer, Text, Title, ImageContainer } from './PurposeSection.styles';

import type { FC } from 'react';

const PurposeSection: FC = () => (
  <Container>
    <ContentContainer>
      <Title>Our Purpose</Title>

      <Text>Orange Leaf Frozen Yogurt inspires people to recapture the joy of creative expression.</Text>

      <CircularDiv />
    </ContentContainer>

    <ImageContainer>
      <Image alt="GummyWormsImage" layout="fill" src="/images/GummyWormsTopdown.png" />
    </ImageContainer>
    <ImageContainer isBottom>
      <Image alt="GreenFrostingImage" layout="fill" src="/images/GreenFrosting.png" />
    </ImageContainer>
  </Container>
);

export default PurposeSection;
