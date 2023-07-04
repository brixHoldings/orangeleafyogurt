import {
  BackgroundContainer,
  Container,
  StepContainer,
  StepContent,
  StepDescription,
  StepNumber,
  StepTitle,
  TitlePartOne,
  TitlePartTwo,
} from './HowToSection.styles';

import type { FC } from 'react';

const steps = [
  {
    description:
      "Award winning yogurt - First to be certified by the Yogurt Association's Live and Active Culture Seal; 100% all-natural and nonfat; Certified Gluten Free and Kosher.",
    title: 'Unbeatable products',
  },
  {
    description:
      "A great yogurt is much about toppings. To elevate the experience from simple to special, we offer a variety of toppings from four flavor categories. Wellness doesn't require deprivation or lack of flavor.",
    title: 'Flavor tour',
  },
  {
    description:
      'Our social content showcases creative and appealing product images, that are relatable to Millennials and Gen Z. Using up to date on trends that boost engagement.',
    title: 'Social media',
  },
  {
    description:
      'Red Mango concept can also be formatted to operate in Food Courts, Airports, Universities, Hospitals, Kiosks, and Podular Operation (Mobile Kitchens).',
    title: 'Avant-guard interior design',
  },
];

const HowToSection: FC = () => (
  <BackgroundContainer>
    <Container>
      <TitlePartOne>What is</TitlePartOne>
      <TitlePartTwo>Red Mango</TitlePartTwo>

      {steps.map(({ title, description }, index) => (
        <StepContainer key={index}>
          <StepNumber>{index + 1}.</StepNumber>
          <StepContent>
            <StepTitle>{title}</StepTitle>
            <StepDescription dangerouslySetInnerHTML={{ __html: description }} />
          </StepContent>
        </StepContainer>
      ))}
    </Container>
  </BackgroundContainer>
);

export default HowToSection;
