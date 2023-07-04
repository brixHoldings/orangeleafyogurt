import { useCallback } from 'react';

import Button from '@components/pages/SmoothieFactory/Button';
import MobileContainer from '@components/ui/MobileContainer';

import {
  BottomContentContainer,
  CardsContainer,
  CardText,
  ContentContainer,
  FullWidthCircularDiv,
  FullWidthContentContainer,
  MainContentImage,
  MainContentCircularImage,
  CardContentContainer,
  MainText,
  SectionContainer,
  Text,
  TextContent,
  StyledSVG,
  LeafImage,
} from './HeaderSection.styles';

import type { FC } from 'react';

const HeaderSection: FC = () => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  const cardContentMap = [
    { id: 1, text: 'since 1996' },
    { id: 2, text: '20+ locations' },
    { id: 3, text: 'new concept + kitchen' },
  ];

  return (
    <SectionContainer>
      <FullWidthContentContainer>
        <MobileContainer>
          <ContentContainer>
            <TextContent>
              <MainText>
                Founded by olympic athlete!
                <LeafImage alt="main-content-image" src="/images/SmoothieFactoryLeafImage.png" />
              </MainText>
              <Text>
                James Villasana founded Smoothie Factory in 1996. As a high-level athlete, James needed healthy food
                options made with only the highest quality ingredients to fuel his body. He carefully created smoothies
                with nutrition, taste, and overall health in mind.
              </Text>

              <Button label="Become a part of the family" onClick={onClickHandle} />
            </TextContent>

            <MainContentImage alt="main-content-image" src="/images/smoothieFactoryHeaderMainImage.png" />
            <MainContentCircularImage alt="main-content-image" src="/images/SmoothieFactoryHeaderCircular.png" />
          </ContentContainer>

          <FullWidthCircularDiv />
        </MobileContainer>
      </FullWidthContentContainer>

      <BottomContentContainer>
        <MobileContainer>
          <CardsContainer>
            {cardContentMap.map(({ id, text }) => (
              <CardContentContainer key={id}>
                <StyledSVG />
                <CardText>{text}</CardText>
              </CardContentContainer>
            ))}
          </CardsContainer>
        </MobileContainer>
      </BottomContentContainer>
    </SectionContainer>
  );
};

export default HeaderSection;
