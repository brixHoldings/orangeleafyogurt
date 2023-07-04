import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  CircularDiv,
  Container,
  CopyrightContainer,
  CopyrightSubtitle,
  CopyrightTitle,
  Icon,
  PartnerIconsLocation,
  PartnersText,
  SliderAbsoluteContentWrapper,
  SliderButton,
  SliderButtonsContainer,
  SliderContainer,
  SliderFirstImageWrapper,
  SliderImageContainer,
  SliderImageContent,
  SliderImageContentMainText,
  SliderImageContentTitle,
  SliderImageContentTitleContainer,
  SliderImageRelativeContainer,
} from './MenuSection.styles';

import type { FC, MouseEventHandler } from 'react';

type SliderInfo = {
  imageAlt: string;
  imagePath: string;
  menuTitle: string;
  sliderText: string;
  titleColor: string;
};

const sliderInfoArray: SliderInfo[] = [
  {
    imageAlt: 'menuImage',
    imagePath: '/images/Smoothies_menu.png',
    menuTitle: 'Smoothies',
    sliderText:
      'Made fresh to order, just for you. Choose from our menu of favorites or create a masterpiece of your own. Flavor freedom is yours.',
    titleColor: '#D9D32F',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/Yogurt_menu.png',
    menuTitle: 'Froyo',
    sliderText:
      "Our froyo flavors are the best, because we make them that way. No really, we do. Each flavor recipe is uniquely ours and you can't get it anywhere else!",
    titleColor: '#D9D32F',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/Shakes_menu.png',
    menuTitle: 'Shakes',
    sliderText:
      "Shake it up with this creamy decadent dessert beverage. That's right, DESSERT beverage. You choose the froyo, you choose the toppings, we'll do the rest.",
    titleColor: '#D9D32F',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/Cakes_menu.png',
    menuTitle: 'Cakes',
    sliderText:
      'Make your next event extraordinary! Choose from one of our four signature froyo cakes or customize your own with your favorite froyo flavors and toppings.',
    titleColor: '#D9D32F',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/PartyBoxes_menu.png',
    menuTitle: 'Party boxes',
    sliderText:
      'Say hello to the Pop-Up Party Box. Perfect for birthday parties, school fundraisers and meet ups with friends.',
    titleColor: '#D9D32F',
  },
];

const partnerIconsArray = [
  {
    imageAlt: 'DoordashIcon',
    imageHeight: 63,
    imagePath: '/images/DoordashIcon.png',
    imageWidth: 113,
  },
  {
    imageAlt: 'UberEatsIcon',
    imageHeight: 59,
    imagePath: '/images/UberEatsIcon.png',
    imageWidth: 106,
  },
  {
    imageAlt: 'GrubHubIcon',
    imageHeight: 24,
    imagePath: '/images/GrubHubIcon.png',
    imageWidth: 114,
  },
];

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const MenuSection: FC = () => {
  const { width } = useWindowSize();
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSliderTitle, setActiveSliderTitle] = useState(sliderInfoArray[0].menuTitle);

  const isDesktop = useMemo(() => (width ? width >= theme.breakpoints.desktop : false), [width]);
  const isTablet = width <= theme.breakpoints.tablet;

  const changeSlide = useCallback(() => {
    setActiveSliderTitle((previousValue) => {
      if (previousValue === sliderInfoArray[sliderInfoArray.length - 1].menuTitle) {
        return sliderInfoArray[0].menuTitle;
      }

      const previousValueIndex = sliderInfoArray.findIndex(
        (sliderInfo: SliderInfo) => sliderInfo.menuTitle === previousValue,
      );

      return sliderInfoArray[previousValueIndex + 1].menuTitle;
    });
  }, []);

  const startSliderInterval = useCallback(
    (timeout = sliderDefaultInterval) => {
      intervalReference.current = setInterval(() => {
        changeSlide();

        if (timeout === sliderAfterClickInterval) {
          if (intervalReference.current) {
            clearInterval(intervalReference.current);
          }

          startSliderInterval(sliderDefaultInterval);
        }
      }, timeout);
    },
    [changeSlide],
  );

  const handleSliderButtonClick = useCallback(
    (event: MouseEvent) => {
      const { target } = event;
      const { id } = target as Element;

      if (id !== activeSliderTitle) {
        setActiveSliderTitle(id);
      }

      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }

      startSliderInterval(sliderAfterClickInterval);
    },
    [activeSliderTitle, startSliderInterval],
  );

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  return (
    <Container>
      <CopyrightContainer>
        <CopyrightTitle>
          Orange Leaf &nbsp;&#174;&nbsp;
          <CopyrightSubtitle>menu</CopyrightSubtitle>
        </CopyrightTitle>
      </CopyrightContainer>

      <SliderContainer>
        <SliderImageContainer>
          jjjjjj
          {sliderInfoArray.map((sliderInfo, index) => {
            if (index === 0) {
              return (
                <SliderFirstImageWrapper
                  key={sliderInfo.menuTitle}
                  isActive={sliderInfo.menuTitle === activeSliderTitle}
                >
                  {isDesktop ? null : (
                    <SliderImageContent>
                      <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle color={sliderInfo.titleColor}>
                          {sliderInfo.menuTitle}
                        </SliderImageContentTitle>
                      </SliderImageContentTitleContainer>
                    </SliderImageContent>
                  )}

                  <SliderImageRelativeContainer>
                    <Image
                      alt={sliderInfo.imageAlt}
                      height={654}
                      sizes="100vw"
                      src={sliderInfo.imagePath}
                      style={{
                        height: 'auto',
                        width: '100%',
                      }}
                      width={1512}
                    />
                  </SliderImageRelativeContainer>

                  {isTablet ? null : (
                    <SliderImageContent>
                      <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle color={sliderInfo.titleColor}>
                          {sliderInfo.menuTitle}
                        </SliderImageContentTitle>
                      </SliderImageContentTitleContainer>
                    </SliderImageContent>
                  )}
                </SliderFirstImageWrapper>
              );
            }

            return (
              <SliderAbsoluteContentWrapper
                key={sliderInfo.menuTitle}
                isActive={sliderInfo.menuTitle === activeSliderTitle}
              >
                {isDesktop ? null : (
                  <SliderImageContent>
                    <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>

                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle color={sliderInfo.titleColor}>
                        {sliderInfo.menuTitle}
                      </SliderImageContentTitle>
                    </SliderImageContentTitleContainer>
                  </SliderImageContent>
                )}

                <SliderImageRelativeContainer>
                  <Image
                    alt={sliderInfo.imageAlt}
                    height={654}
                    sizes="100vw"
                    src={sliderInfo.imagePath}
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    width={1512}
                  />
                </SliderImageRelativeContainer>

                {isDesktop ? (
                  <SliderImageContent>
                    <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>

                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle color={sliderInfo.titleColor}>
                        {sliderInfo.menuTitle}
                      </SliderImageContentTitle>
                    </SliderImageContentTitleContainer>
                  </SliderImageContent>
                ) : null}
              </SliderAbsoluteContentWrapper>
            );
          })}
        </SliderImageContainer>

        <SliderButtonsContainer>
          {sliderInfoArray.map(({ menuTitle }) => (
            <SliderButton
              key={menuTitle}
              id={menuTitle}
              isActive={menuTitle === activeSliderTitle}
              onClick={handleSliderButtonClick as MouseEventHandler<HTMLButtonElement> & (() => void)}
            />
          ))}
        </SliderButtonsContainer>
      </SliderContainer>

      <PartnersText>We have partnered with:</PartnersText>

      <PartnerIconsLocation>
        {partnerIconsArray.map(({ imageAlt, imageHeight, imagePath, imageWidth }) => (
          <Icon key={imageAlt}>
            <Image alt={imageAlt} height={imageHeight} src={imagePath} width={imageWidth} />
          </Icon>
        ))}
      </PartnerIconsLocation>

      <CircularDiv />
    </Container>
  );
};

export default MenuSection;
