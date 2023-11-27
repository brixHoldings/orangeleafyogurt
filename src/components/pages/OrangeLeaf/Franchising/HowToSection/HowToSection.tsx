'use client';

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
import { FranchisingHowToSectionSlice } from 'prismicio-types';

const HowToSection: FC<{ slice: FranchisingHowToSectionSlice }> = ({
  slice: {
    primary: {
      title_first_part,
      title_second_part,
      step_1_title,
      step_1_text,
      step_2_title,
      step_2_text,
      step_3_title,
      step_3_text,
    },
  },
}) => (
  <Container>
    <TitlePartOne dangerouslySetInnerHTML={{ __html: title_first_part as string }}></TitlePartOne>
    <TitlePartTwo dangerouslySetInnerHTML={{ __html: title_second_part as string }}></TitlePartTwo>
    <StepContainer>
      <StepNumber>1.</StepNumber>
      <StepContent>
        <StepTitle dangerouslySetInnerHTML={{ __html: step_1_title as string }}></StepTitle>
        <StepDescription dangerouslySetInnerHTML={{ __html: step_1_text as string }} />
      </StepContent>
    </StepContainer>
    <StepContainer>
      <StepNumber>2.</StepNumber>
      <StepContent>
        <StepTitle dangerouslySetInnerHTML={{ __html: step_2_title as string }}></StepTitle>
        <StepDescription dangerouslySetInnerHTML={{ __html: step_2_text as string }} />
      </StepContent>
    </StepContainer>
    <StepContainer>
      <StepNumber>3.</StepNumber>
      <StepContent>
        <StepTitle dangerouslySetInnerHTML={{ __html: step_3_title as string }}></StepTitle>
        <StepDescription dangerouslySetInnerHTML={{ __html: step_3_text as string }} />
      </StepContent>
    </StepContainer>

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
