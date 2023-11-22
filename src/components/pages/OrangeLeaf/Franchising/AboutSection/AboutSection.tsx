'use client';
import Image from 'next/image';
import { useCallback } from 'react';

import Button from '@components/pages/OrangeLeaf/common/Button';

import {
  Container,
  ContentLeft,
  ContentRight,
  Description,
  ImageContainer,
  Row,
  Subtitle,
  Title,
} from './AboutSection.styles';

import type { FC } from 'react';

const AboutSection: FC = () => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  return (
    <Container>
      <Title>Why us?</Title>
      <Row>
        <ContentLeft>
          <Subtitle>Outstanding product innovation and variety</Subtitle>
          <Description>
            Mixing and mashing up bites, flavors, toppings and more - this opportunity offers an experience that&apos;s
            as fun and unique as you are.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={401} src="/images/about_1.png" width={572} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <Image alt="first-row-image" height={400} src="/images/about_2.png" width={570} />
        </ImageContainer>
        <ContentRight>
          <Subtitle>Flexible real estate options</Subtitle>
          <Description>
            Flexible platforms to fit most retails sizes that offer modern and fun retail experience for traditional and
            non-traditional locations.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentRight>
      </Row>
      <Row>
        <ContentLeft>
          <Subtitle>Investing options</Subtitle>
          <Description>
            We have attractive labor models compared to other concepts and offer operational simplicity.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={400} src="/images/about_3.png" width={570} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default AboutSection;
