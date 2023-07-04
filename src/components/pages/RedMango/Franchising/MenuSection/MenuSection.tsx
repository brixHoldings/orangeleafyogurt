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
    imagePath: '/images/RMSandwiches.png',
    menuTitle: 'Signature sandwiches',
    sliderText:
      'Our Flatbread and line of Gourmet PB&J sandwiches are and excellence combination of texture and flavors from around the world.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/RMYogurt.png',
    menuTitle: 'Frozen Yogurt',
    sliderText:
      "First to be certified by the Yogurt Association's Live and Active Culture Seal. 100% all-natural and nonfat. Certified Gluten Free and Kosher.",
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/RMBowl.png',
    menuTitle: 'Wellness bowls',
    sliderText:
      "A great source of antioxidants, vitamins, minerals and fiber, and garnished with a variety of colorful and tasty top- pings. It's full of superfoods, and 100% vegan",
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/RMSmoothie.png',
    menuTitle: 'Superior smoothies',
    sliderText: 'No syrups, no concentrates, no purees, from the menu or customizable.',
  },
  {
    imageAlt: 'menuImage',
    imagePath: '/images/RMJuice.png',
    menuTitle: 'Fruits and vegetables juices',
    sliderText:
      'Freshly made off the menu or to order. Available as Daily Detox, Simple Juice, Easy Greens, Raw6 Categories format.',
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

      <CircularImage alt="main-content-image" src="/images/MenuSectionCircular.png" />
    </Container>
  );
};

export default MenuSection;
