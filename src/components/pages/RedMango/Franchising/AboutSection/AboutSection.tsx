import Image from 'next/image';
import { useCallback } from 'react';

import Button from '@components/pages/RedMango/Button';

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
          <Subtitle>In business for yourself, not by yourself</Subtitle>
          <Description>
            You start by on location training and after we offer ongoing operation support, quality assurance visits and
            professional marketing support. We do ongoing product and menu development and system and technology
            support.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={499} src="/images/rm-about-1.png" width={640} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <Image alt="first-row-image" height={620} src="/images/rm-about-2.png" width={640} />
        </ImageContainer>
        <ContentRight>
          <Subtitle>A business within a business...</Subtitle>
          <Description>
            Within a business; Red Mango is more than 1 business; it has a collection of offers: Smoothies, fruit and
            vegetable juices, comprehensive line of probiotics, bubble tea, wellness bowls, grilled paninis, wraps,
            salads, seasonal soups and much more. Our multi menu categories allow for pricing elasticity.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentRight>
      </Row>
      <Row>
        <ContentLeft>
          <Subtitle>Simplicity</Subtitle>
          <Description>
            No need for kitchen hood, exhaust system, fryers, fire suppression system and other expensive equipment. Our
            gourmet style recipes easily executed by unskilled labor, as it requires minimal amount of food and beverage
            preparation.
          </Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={620} src="/images/rm-about-3.png" width={640} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default AboutSection;
