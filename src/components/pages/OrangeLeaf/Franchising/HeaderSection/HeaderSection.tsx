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

const HeaderSection: FC = () => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');

    contactElement?.scrollIntoView();
  }, []);

  const cardContentMap = [
    { color: '#FF9828', text: 'Thriving Since 2008' },
    { color: '#FFDB31', text: '67 locations across US' },
    { color: '#D9D32F', text: '10% YoY sales growth' },
  ];

  return (
    <SectionContainer>
      <FullWidthContentContainer>
        <MobileContainer>
          <ContentContainer>
            <TextContent>
              <MainText>
                We don&apos;t sell yogurt,
                <span> we sell experience!</span>
              </MainText>
              <Text>
                Orange Leaf is a self-serve, choose-your-own-toppings frozen yogurt and treat franchise. Orange Leaf
                offers a multitude of traditional and unique flavors, including no-sugar-added, gluten-free, and
                dairy-free alternatives.
              </Text>

              <Button label="Become a part of the family" onClick={onClickHandle} size="s" />
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
            {cardContentMap.map(({ color, text }) => (
              <Card key={color}>
                <CardContentContainer>
                  <CardText color={color}>{text}</CardText>
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
