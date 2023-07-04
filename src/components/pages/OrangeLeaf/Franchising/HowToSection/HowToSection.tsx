import Image from 'next/image';

import {
  Container,
  MinorSidePill,
  SidePill,
  Splash,
  SplashPill,
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
      'Froyo, Mix It & Go, Froyo Cakes & Slices, Smoothies, Shakes, Waffle Cones, Acai Bowls and Party Boxes.',
    title: 'Menu variety',
  },
  { description: "Clear cups to show off the customer's masterpiece.", title: 'Cups' },
  {
    description:
      '8 flavors of yogurt, including rotating seasonal flavors.<br/>Over 20 toppings and flavors - textures, colors and more!',
    title: 'Layers',
  },
  { description: 'From square footage to orange furniture.', title: 'Space / Layout' },
];

const HowToSection: FC = () => (
  <Container>
    <TitlePartOne>#How to</TitlePartOne>
    <TitlePartTwo>ORANGE LEAF</TitlePartTwo>

    {steps.map(({ title, description }, index) => (
      <StepContainer key={index}>
        <StepNumber>{index + 1}.</StepNumber>
        <StepContent>
          <StepTitle>{title}</StepTitle>
          <StepDescription dangerouslySetInnerHTML={{ __html: description }} />
        </StepContent>
      </StepContainer>
    ))}

    <Splash>
      <Image alt="splash-image" height={447} src="/images/yogurt_splash.png" width={439} />
      <SplashPill />
    </Splash>

    <SidePill>
      <MinorSidePill />
      <Image alt="side-product-image" height={742} src="/images/how_to.png" width={473} />
    </SidePill>
  </Container>
);

export default HowToSection;
