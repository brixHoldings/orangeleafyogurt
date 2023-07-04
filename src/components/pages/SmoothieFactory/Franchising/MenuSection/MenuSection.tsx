import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  CircularImage,
  Container,
  CopyrightContainer,
  CopyrightTitle,
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
};

const sliderInfoArray: SliderInfo[] = [
  {
    imageAlt: 'menuImage',
    imagePath: '/images/SFPowerBowls.png',
    menuTitle: 'POWER BOWLS',
    sliderText:
      'Superfood Power Bowls prepared with nutrient-rich whole fruit and an array of your favorite toppings. A delicious alternative known for their health benefits that increase energy and vitality.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/SFSmoothies.png',
    menuTitle: 'SMOOTHIES',
    sliderText:
      'Our Smoothies feature 100% real fruit and vegetables with unique blends of delicious, beneficial ingredients blending nutrition with great taste.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/SFFruits.png',
    menuTitle: 'FRUITS AND VEGETABLES JUICES',
    sliderText:
      'All-natural fresh-squeezed juices loaded with vitamins and minerals designed to cleanse and nourish the body. Available in over 10 different varieties.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/SFOasts.png',
    menuTitle: 'LITE GOODIES',
    sliderText:
      'Wholesome ingredients come together in a variety of ways, some following seasonal rotation. Color, texture, flavor, the cornerstone of each creation. Every item is designed for speed and ease of execution.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/RMJuice.png',
    menuTitle: 'BUBBLE TEA',
    sliderText: 'We stay true to its Taiwanese roots. We prepare them super cold, frothy, and shaken with flavors.',
  },
];

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const MenuSection: FC = () => {
  const { width } = useWindowSize();
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSliderTitle, setActiveSliderTitle] = useState(sliderInfoArray[0].menuTitle);

  const isDesktop = useMemo(() => (width ? width >= theme.breakpoints.desktop : false), [width]);

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
        <CopyrightTitle>Our product pillars</CopyrightTitle>
      </CopyrightContainer>

      <SliderContainer>
        <SliderImageContainer>
          {sliderInfoArray.map((sliderInfo, index) => {
            if (index === 0) {
              return (
                <SliderFirstImageWrapper
                  key={sliderInfo.menuTitle}
                  isActive={sliderInfo.menuTitle === activeSliderTitle}
                >
                  {isDesktop ? null : (
                    <SliderImageContent>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle>{sliderInfo.menuTitle}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>

                      <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
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
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle>{sliderInfo.menuTitle}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>

                      <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
                    </SliderImageContent>
                  ) : null}
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
                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle>{sliderInfo.menuTitle}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>

                    <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
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
                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle>{sliderInfo.menuTitle}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>

                    <SliderImageContentMainText>{sliderInfo.sliderText}</SliderImageContentMainText>
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

      <CircularImage alt="main-content-image" src="/images/SmoothieFactorySliderBackground.png" />
    </Container>
  );
};

export default MenuSection;
