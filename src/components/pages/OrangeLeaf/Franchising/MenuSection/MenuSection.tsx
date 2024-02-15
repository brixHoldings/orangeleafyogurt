'use client';

import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  CircularDiv,
  Container,
  CopyrightContainer,
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
import { FranchisingMenuSectionSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

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

const MenuSection: FC<{ slice: FranchisingMenuSectionSlice }> = ({
  slice: {
    primary: { title, partners_title },
    items,
  },
}) => {
  const { width } = useWindowSize();
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSliderTitle, setActiveSliderTitle] = useState(items[0].title);

  const isDesktop = useMemo(() => (width ? width >= theme.breakpoints.desktop : false), [width]);
  const isTablet = width <= theme.breakpoints.tablet;

  const changeSlide = useCallback(() => {
    setActiveSliderTitle((previousValue) => {
      if (previousValue === items[items.length - 1].title) {
        return items[0].title;
      }

      const previousValueIndex = items.findIndex((sliderInfo) => sliderInfo.title === previousValue);

      return items[previousValueIndex + 1].title;
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
        <CopyrightTitle dangerouslySetInnerHTML={{ __html: title as string }}></CopyrightTitle>
      </CopyrightContainer>

      <SliderContainer>
        <SliderImageContainer>
          {items.map((item, index) => {
            if (index === 0) {
              return (
                <SliderFirstImageWrapper key={item.title} isActive={item.title === activeSliderTitle}>
                  {isDesktop ? null : (
                    <SliderImageContent>
                      <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle color={item.color as string}>{item.title}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>
                    </SliderImageContent>
                  )}

                  <SliderImageRelativeContainer>
                    <PrismicImage
                      height={654}
                      sizes="100vw"
                      field={item.image}
                      style={{
                        height: 'auto',
                        width: '100%',
                      }}
                      width={1512}
                    />
                  </SliderImageRelativeContainer>

                  {isTablet ? null : (
                    <SliderImageContent>
                      <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle color={item.color as string}>{item.title}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>
                    </SliderImageContent>
                  )}
                </SliderFirstImageWrapper>
              );
            }

            return (
              <SliderAbsoluteContentWrapper key={item.title} isActive={item.title === activeSliderTitle}>
                {isDesktop ? null : (
                  <SliderImageContent>
                    <SliderImageContentMainText>{item.text}</SliderImageContentMainText>

                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle color={item.color as string}>{item.title}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>
                  </SliderImageContent>
                )}

                <SliderImageRelativeContainer>
                  <PrismicImage
                    height={654}
                    sizes="100vw"
                    field={item.image}
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    width={1512}
                  />
                </SliderImageRelativeContainer>

                {isDesktop ? (
                  <SliderImageContent>
                    <SliderImageContentMainText>{item.text}</SliderImageContentMainText>

                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle color={item.color as string}>{item.title}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>
                  </SliderImageContent>
                ) : null}
              </SliderAbsoluteContentWrapper>
            );
          })}
          <SliderButtonsContainer>
            {items.map(({ title }) => (
              <SliderButton
                key={title}
                id={title as string}
                isActive={title === activeSliderTitle}
                onClick={handleSliderButtonClick as MouseEventHandler<HTMLButtonElement> & (() => void)}
              />
            ))}
          </SliderButtonsContainer>
        </SliderImageContainer>
      </SliderContainer>

      <PartnersText dangerouslySetInnerHTML={{ __html: partners_title as string }}></PartnersText>

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
