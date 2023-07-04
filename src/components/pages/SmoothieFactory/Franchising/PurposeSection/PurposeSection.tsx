import { Container, ContentContainer, Text, StyledLogo } from './PurposeSection.styles';

import type { FC } from 'react';

const PurposeSection: FC = () => (
  <Container>
    <ContentContainer>
      <StyledLogo alt="logo image" src="/images/sf-logo.png" />

      <Text>
        Smoothie Factory is committed to helping health conscious customers choose more nutritious options. The smoothie
        menu features more whole fruits and vegetables, more natural options for sweeteners, and more vegan and
        non-dairy options than ever before!
      </Text>
    </ContentContainer>
  </Container>
);

export default PurposeSection;
