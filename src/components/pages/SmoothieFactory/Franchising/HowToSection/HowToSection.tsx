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
      'Our Smoothies, Super-food Power Bowls, juices, toast, salads, soups and more, are all prepared with nutrient-rich whole fruit and vegetables.',
    title: '100% real fruit and vegetables',
  },
  {
    description:
      'Curated menu, that reflects the flavors of the season. Enjoy summer with Cold Avocado Cucumber Soup, embrace fall with Pumpkin & Black Beans Soup, warm up in winter with Curried Squash Soup and welcome Spring with Mint & Pea Soup.',
    title: 'Follow the seasons',
  },
  {
    description:
      'Our social content showcases creative and appealing product images, that are relatable to Millennials and Gen Z. Using up to date on trends that boost engagement.',
    title: 'Social media',
  },
  {
    description:
      'Smoothie Factory + Kitchen concept can be formatted to operate in Food Courts, Airports, Universities, Hospitals, Kiosks, and Popular Operations (Mobile Kitchens).',
    title: 'Avant-guard interior design',
  },
];

const HowToSection: FC = () => (
  <BackgroundContainer>
    <Container>
      <TitlePartOne>What is</TitlePartOne>
      <TitlePartTwo>SMOOTHIE FACTORY</TitlePartTwo>

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
