'use client';

import Lottie from 'lottie-react';

import {
  Title,
  Headline,
  HeaderImagesWrapper,
  HeaderImage,
  Circle,
  GummyBears,
  HeaderSection,
  HeadlineWrapper,
  Caption,
  StyledMaxWidthWrapper,
  FlavoursTitle,
  FlavorsContainer,
  NumberOfToppings,
  NumberOfToppingsContainer,
  ToppingsTitle,
  SuperStarOfTheMonth,
  GrayArea,
  TextWrapper,
  CardTitle,
  CardParagraph,
  CardCircle,
  FloatingCreamImage,
  FloatingFroyoImage,
  MenuPageMaxWidthWrapper,
  SmoothiesAndShakes,
  BigTitle,
  TextTitle,
  Paragraph,
  SmoothiesAndShakesCircle,
  RoundImage,
  AcaiBowls,
  AcaiBowlsCircle,
  ColoredBar,
  FlexWrapper,
  CakesCircle,
  Cakes,
  RelativeWrapper,
  LottieWrapper,
} from './MenuSection.style';
import Flavor from './Flavor';
import { flavors } from './flavors';

import FloatingImage from '../../common/FloatingImage/FloatingImage';

import type { FC } from 'react';

import wave1 from '../../../../../../public/lottie/wave1.json';
import { MenuHeaderSlice } from 'prismicio-types';

const MenuSection: FC<{ slice: MenuHeaderSlice }> = ({
  slice: {
    primary: {
      title,
      headline,
      caption,
      title_2,
      number_of_toppings,
      number_of_toppings_subtitle,
      card_title,
      card_text,
      menu_items_main_title,
      menu_item_text_1,
      menu_item_text_2,
      menu_item_text_3,
      menu_item_text_4,
      menu_item_title_1,
      menu_item_title_2,
      menu_item_title_3,
      menu_item_title_4,
    },
  },
}) => (
  <>
    <HeaderSection>
      <GummyBears
        alt="gummy-bears"
        height="clamp(294px, 41.26vw, 624px)"
        imageStyle={{ objectFit: 'contain' }}
        right="0"
        src="/images/GummyWormsTopdown.png"
        top="0"
        width="clamp(196px, 27.51vw, 416px)"
        renderInBody
      />
      <StyledMaxWidthWrapper>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <HeadlineWrapper>
          <HeaderImagesWrapper>
            <HeaderImage>
              <Circle align="top" color="linear-gradient(180deg, #FF6034 0%, rgba(255, 96, 52, 0) 100%)" />
              <FloatingImage
                alt="froyo1"
                height="clamp(234px, 31.01vw, 469px)"
                imageStyle={{ objectFit: 'contain' }}
                src="/images/froyo1.png"
                width="clamp(176px, 23.28vw, 352px)"
                priority
              />
            </HeaderImage>
            <HeaderImage>
              <Circle align="bottom" color="linear-gradient(180deg, #D9D32F 0%, rgba(217, 211, 47, 0) 100%)" />
              <FloatingImage
                alt="froyo2"
                height="clamp(232px, 30.75vw,  465px)"
                imageStyle={{ objectFit: 'contain' }}
                src="/images/froyo2.png"
                width="clamp(194px, 25.72vw, 389px)"
                priority
              />
            </HeaderImage>
            <HeaderImage>
              <Circle align="top" color="linear-gradient(180deg, #FFDB31 0%, rgba(255, 219, 49, 0) 100%)" />
              <FloatingImage
                alt="froyo3"
                height="clamp(235px, 31.15vw, 471px)"
                imageStyle={{ objectFit: 'contain' }}
                src="/images/froyo3.png"
                width="clamp(192px,25.46vw, 385px)"
                priority
              />
            </HeaderImage>
            <HeaderImage>
              <Circle align="bottom" color=" linear-gradient(180deg, #FF8A0C 0%, rgba(255, 152, 40, 0) 109.05%)" />
              <FloatingImage
                alt="froyo4"
                height="clamp(235px, 31.15vw, 471px)"
                imageStyle={{ objectFit: 'contain' }}
                src="/images/froyo4.png"
                width="clamp(179px, 23.74vw, 359px)"
                priority
              />
            </HeaderImage>
          </HeaderImagesWrapper>
          <Headline dangerouslySetInnerHTML={{ __html: headline as string }}></Headline>
        </HeadlineWrapper>
        <Caption dangerouslySetInnerHTML={{ __html: caption as string }}></Caption>
      </StyledMaxWidthWrapper>
    </HeaderSection>
    <MenuPageMaxWidthWrapper>
      <FlavoursTitle dangerouslySetInnerHTML={{ __html: title_2 as string }}></FlavoursTitle>
      <FlavorsContainer>
        {flavors.map((flavor) => (
          <Flavor key={flavor.title} flavor={flavor} />
        ))}
      </FlavorsContainer>
    </MenuPageMaxWidthWrapper>
    <MenuPageMaxWidthWrapper>
      <NumberOfToppingsContainer>
        <FloatingImage
          alt="oranges"
          height="clamp(111px, 26.58vw, 402px)"
          left="-35%"
          src="/images/image51.png"
          style={{ zIndex: -1 }}
          top="-57%"
          width="clamp(122px, 29.03vw, 439px)"
        />

        <FloatingImage
          alt="green beans"
          height="clamp(264px, 62.89vw, 951px)"
          right="52%"
          src="/images/image53.png"
          style={{ zIndex: 1 }}
          top="-46%"
          width="clamp(166px, 39.55vw, 598px)"
        />
        <FloatingImage
          alt="choco"
          height="clamp(101px, 24.14vw, 365px)"
          right="-35%"
          src="/images/image50.png"
          style={{ zIndex: -1 }}
          top="-22%"
          width="clamp(113px,27.11vw, 410px)"
        />
        <FloatingImage
          alt="nuts"
          bottom="-22%"
          height="clamp(80px, 19.17vw, 290px)"
          left="51%"
          src="/images/image52.png"
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', zIndex: 1 }}
          width="clamp(79px, 18.98vw, 287px)"
        />
        <FloatingImage
          alt="gummy bears"
          bottom="67%"
          height="clamp(124px, 29.69vw, 449px)"
          left="-68%"
          src="/images/image48.png"
          style={{ zIndex: 1 }}
          width="clamp(116px, 27.77vw, 420px)"
        />
        <FloatingImage
          alt="popcorn"
          bottom="85%"
          height="clamp(150px, 35.78vw, 541px)"
          left="38%"
          src="/images/image15.png"
          style={{ zIndex: 1 }}
          width="clamp(148px, 35.25vw, 533px)"
        />
        <FloatingImage
          alt="almonds"
          bottom="98%"
          height="clamp(66px, 15.74vw, 238px)"
          right="-107%"
          src="/images/almonds-noBG.png"
          style={{ zIndex: 1 }}
          width="clamp(70px, 16.73vw, 253px)"
        />
        <FloatingImage
          alt="strawberries"
          bottom="45%"
          height="clamp(99px, 23.61vw, 357px)"
          right="41%"
          src="/images/image49.png"
          style={{ zIndex: -1 }}
          width="clamp(92px, 22.08vw, 334px)"
        />
        <NumberOfToppings dangerouslySetInnerHTML={{ __html: number_of_toppings as string }}></NumberOfToppings>
      </NumberOfToppingsContainer>
      <ToppingsTitle dangerouslySetInnerHTML={{ __html: number_of_toppings_subtitle as string }}></ToppingsTitle>
    </MenuPageMaxWidthWrapper>
    <MenuPageMaxWidthWrapper>
      <SuperStarOfTheMonth>
        <GrayArea>
          <CardCircle />
          <FloatingFroyoImage
            alt="froyo"
            height="clamp(458px, 43.32vw, 655px)"
            imageStyle={{ objectFit: 'contain' }}
            left="2%"
            src="/images/image-froyo.png"
            top="-29%"
            width="clamp(387px, 36.64vw, 554px)"
          />
          <FloatingCreamImage
            alt="cream"
            height="clamp(294px, 27.84vw, 421px)"
            right="30%"
            src="/images/cream.png"
            top="-89%"
            width="clamp(227px ,21.49vw, 325px)"
          />
          <TextWrapper>
            <CardTitle dangerouslySetInnerHTML={{ __html: card_title as string }}></CardTitle>
            <CardParagraph dangerouslySetInnerHTML={{ __html: card_text as string }}></CardParagraph>
          </TextWrapper>
        </GrayArea>
      </SuperStarOfTheMonth>
    </MenuPageMaxWidthWrapper>
    <MenuPageMaxWidthWrapper>
      <SmoothiesAndShakes>
        <SmoothiesAndShakesCircle>
          <RoundImage
            alt="smoothie"
            height="clamp(378px, 35.71vw, 540px)"
            imageStyle={{ objectFit: 'cover' }}
            src="/images/slice5.jpg"
            width="clamp(378px, 35.71vw, 540px)"
          />
        </SmoothiesAndShakesCircle>

        <FlexWrapper>
          <BigTitle dangerouslySetInnerHTML={{ __html: menu_items_main_title as string }}></BigTitle>
          <TextTitle dangerouslySetInnerHTML={{ __html: menu_item_title_1 as string }}></TextTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: menu_item_text_1 as string }}></Paragraph>
          {/* <ButtonsWrapper>
            <Button>See the menu</Button>
            <ButtonOutlined>See Nutrition info</ButtonOutlined>
          </ButtonsWrapper> */}
        </FlexWrapper>
      </SmoothiesAndShakes>
      <AcaiBowls>
        <AcaiBowlsCircle>
          <ColoredBar color="background: linear-gradient(180deg, #ffdb31 0%, rgba(255, 219, 49, 0) 100%)" />
          <FloatingImage
            alt="frosting"
            height="clamp(331px, 31.28vw, 473px)"
            imageStyle={{ objectFit: 'cover' }}
            right="0%"
            src="/images/White_frosting_splash_topdown.png"
            style={{ zIndex: -1 }}
            top="-15%"
            width="clamp(343px, 32.40vw, 490px)"
          />
          <RoundImage
            alt="smoothie"
            height="clamp(378px, 35.71vw, 540px)"
            imageStyle={{ objectFit: 'cover' }}
            src="/images/slice24.jpg"
            width="clamp(378px, 35.71vw, 540px)"
            noBorder
          />
        </AcaiBowlsCircle>
        <FlexWrapper>
          <TextTitle dangerouslySetInnerHTML={{ __html: menu_item_title_2 as string }}></TextTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: menu_item_text_2 as string }}></Paragraph>
          {/* <ButtonsWrapper>
            <Button>See the menu</Button>
            <ButtonOutlined>See Nutrition info</ButtonOutlined>
          </ButtonsWrapper> */}
        </FlexWrapper>
      </AcaiBowls>
      <Cakes>
        <CakesCircle>
          <ColoredBar color="background: linear-gradient(180deg, #D9D32F 0%, rgba(217, 211, 47, 0) 100%)" />
          <FloatingImage
            alt="popcorn"
            bottom="7%"
            height="clamp(431px, 40.74vw, 616px)"
            imageStyle={{ objectFit: 'cover' }}
            right="-16%"
            src="/images/Popcorn_topdown.png"
            style={{ zIndex: -1 }}
            width="clamp(420px, 40.34vw, 610px)"
          />
          <RoundImage
            alt="cake"
            height="clamp(378px, 35.71vw, 540px)"
            imageStyle={{ objectFit: 'cover' }}
            src="/images/slice4.jpg"
            width="clamp(378px, 35.71vw, 540px)"
            noBorder
          />
        </CakesCircle>
        <FlexWrapper>
          <TextTitle dangerouslySetInnerHTML={{ __html: menu_item_title_3 as string }}></TextTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: menu_item_text_3 as string }}></Paragraph>
          {/* <ButtonsWrapper>
            <Button>See the menu</Button>
            <ButtonOutlined>See Nutrition info</ButtonOutlined>
          </ButtonsWrapper> */}
        </FlexWrapper>
      </Cakes>
      <AcaiBowls>
        <AcaiBowlsCircle>
          <ColoredBar color="background: linear-gradient(180deg, #FFDB31 0%, rgba(255, 219, 49, 0) 100%)" />
          <FloatingImage
            alt="frosting"
            height="clamp(331px, 31.28vw, 473px)"
            imageStyle={{ objectFit: 'cover' }}
            right="0%"
            src="/images/White_frosting_splash_topdown.png"
            style={{ zIndex: -1 }}
            top="-15%"
            width="clamp(343px, 32.40vw, 490px)"
          />
          <RoundImage
            alt="cup"
            height="clamp(378px, 35.71vw, 540px)"
            imageStyle={{ objectFit: 'cover' }}
            src="/images/slice25.jpg"
            width="clamp(378px, 35.71vw, 540px)"
            noBorder
          />
        </AcaiBowlsCircle>
        <FlexWrapper>
          <TextTitle dangerouslySetInnerHTML={{ __html: menu_item_title_4 as string }}></TextTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: menu_item_text_4 as string }}></Paragraph>
          {/* <ButtonsWrapper>
            <Button>See the menu</Button>
            <ButtonOutlined>See Nutrition info</ButtonOutlined>
          </ButtonsWrapper> */}
        </FlexWrapper>
      </AcaiBowls>
    </MenuPageMaxWidthWrapper>
    <RelativeWrapper>
      <LottieWrapper>
        <Lottie animationData={wave1} />
      </LottieWrapper>
    </RelativeWrapper>
  </>
);

export default MenuSection;
