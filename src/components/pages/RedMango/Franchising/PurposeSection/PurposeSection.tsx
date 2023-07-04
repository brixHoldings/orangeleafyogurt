import {
  Container,
  ContentContainer,
  Text,
  StyledLogo,
  StyledLeftCircle,
  StyledRightCircle,
  StledDivider,
} from './PurposeSection.styles';

import type { FC } from 'react';

const PurposeSection: FC = () => (
  <Container>
    <ContentContainer>
      <StyledLogo alt="circularImage" src="/images/PurposeSectionMainLogo.png" />

      <Text>
        Our name, Red Mango, is a symbol of our commitment to using only the best all-natural ingredients for our frozen
        yogurt, smoothies and parfaits.
      </Text>

      <StyledLeftCircle alt="circularBackgroundDecoration" src="/images/PurposeSectionLeftVector.png" />
      <StyledRightCircle alt="circularBackgroundDecoration" src="/images/PurposeSectionRightVector.png" />
    </ContentContainer>

    <StledDivider alt="BackgroundDivider" src="/images/DividerMenuPurposeSection.png" />
  </Container>
);

export default PurposeSection;
