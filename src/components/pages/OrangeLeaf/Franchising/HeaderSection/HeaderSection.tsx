'use client';

import {
  CardsContainer,
  CardText,
  CardContentContainer,
  SectionContainer,
  Text,
  Title,
  YellowBg,
  Content,
  TextColumn,
} from './HeaderSection.styles';

import type { FC } from 'react';
import { FranchisingHeaderSlice } from 'prismicio-types';
import FormSection from '../FormSection';
import FloatingImage from '../../common/FloatingImage/FloatingImage';

const HeaderSection: FC<{ slice: FranchisingHeaderSlice }> = ({
  slice: {
    items,
    primary: { title, text },
  },
}) => {
  return (
    <SectionContainer id="contact">
      <Content>
        <YellowBg />
        <TextColumn>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        </TextColumn>
        <FormSection />
        <FloatingImage
          alt="bottom-main-backgroun-image"
          src="/images/Colorful_flakes_topdown.png"
          width="clamp(391px,28.10vw, 425px)"
          height="clamp(446px,32.07vw, 485px)"
          left="0%"
          bottom="73%"
          style={{ zIndex: -1 }}
        />
      </Content>
      <CardsContainer>
        {items.map(({ color, text }) => (
          <CardContentContainer key={text}>
            <CardText color={color as string}>{text}</CardText>
          </CardContentContainer>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default HeaderSection;
