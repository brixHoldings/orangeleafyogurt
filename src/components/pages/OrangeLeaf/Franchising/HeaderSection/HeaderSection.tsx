'use client';

import { useCallback } from 'react';

import Button from '@components/pages/OrangeLeaf/common/Button';
import Card from '@components/ui/Card';
import MobileContainer from '@components/ui/MobileContainer';

import {
  BottomContentContainer,
  BottomContentImage,
  CardsContainer,
  CardText,
  CircularDiv,
  ContentContainer,
  FullWidthCircularDiv,
  FullWidthContentContainer,
  MainContentImage,
  CardContentContainer,
  MainText,
  SectionContainer,
  Text,
  TextContent,
} from './HeaderSection.styles';

import type { FC } from 'react';
import { FranchisingHeaderSlice } from 'prismicio-types';

const HeaderSection: FC<{ slice: FranchisingHeaderSlice }> = ({
  slice: {
    items,
    primary: { title, text, button },
  },
}) => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');

    contactElement?.scrollIntoView();
  }, []);

  return (
    <SectionContainer>
      <FullWidthContentContainer>
        <MobileContainer>
          <ContentContainer>
            <TextContent>
              <MainText dangerouslySetInnerHTML={{ __html: title as string }}></MainText>
              <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>

              <Button label={button as string} onClick={onClickHandle} size="s" />
            </TextContent>

            <MainContentImage alt="main-content-image" src="/images/Hero_playful_cup.png" />
          </ContentContainer>

          <FullWidthCircularDiv />

          <CircularDiv />
        </MobileContainer>
      </FullWidthContentContainer>

      <BottomContentContainer>
        <MobileContainer>
          <BottomContentImage alt="bottom-main-backgroun-image" src="/images/Colorful_flakes_topdown.png" />
          <CardsContainer>
            {items.map(({ color, text }) => (
              <Card key={color}>
                <CardContentContainer>
                  <CardText color={color as string}>{text}</CardText>
                </CardContentContainer>
              </Card>
            ))}
          </CardsContainer>
        </MobileContainer>
      </BottomContentContainer>
    </SectionContainer>
  );
};

export default HeaderSection;
