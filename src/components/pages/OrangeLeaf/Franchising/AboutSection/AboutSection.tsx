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
import { FranchisingAboutSectionSlice } from 'prismicio-types';

const AboutSection: FC<{ slice: FranchisingAboutSectionSlice }> = ({
  slice: {
    primary: {
      title,
      section_1_title,
      section_1_text,
      section_2_title,
      section_2_text,
      section_3_title,
      section_3_text,
    },
  },
}) => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  return (
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: section_1_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: section_1_text as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={401} src="/images/about_1.jpg" width={572} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <Image alt="first-row-image" height={400} src="/images/about_2.jpg" width={570} />
        </ImageContainer>
        <ContentRight>
          <Subtitle dangerouslySetInnerHTML={{ __html: section_2_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: section_2_text as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentRight>
      </Row>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: section_3_title as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: section_3_text as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={400} src="/images/about_3.jpg" width={570} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default AboutSection;
