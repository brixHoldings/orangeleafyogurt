'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { isEmpty } from 'lodash';

import { MaxWidthWrapper } from '@styles/common';

import {
  Circle,
  Image,
  Wrapper,
  SideContent,
  SliderButton,
  SliderButtonsContainer,
  SliderContent,
  SliderDescription,
  SliderName,
  SliderTitle,
  ButtonRound,
  Title,
  MobileSliderContent,
  MobileCircle,
  LottieWrapper,
} from './Classics.styles';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import type { FC, MouseEventHandler } from 'react';
import FloatingImage from '../../common/FloatingImage/FloatingImage';
import Lottie from 'lottie-react';

import wave1 from '../../../../../../public/lottie/wave1.json';
import wave2 from '../../../../../../public/lottie/wave2.json';
import wave3 from '../../../../../../public/lottie/wave3.json';
import wave4 from '../../../../../../public/lottie/wave4.json';
import wave5 from '../../../../../../public/lottie/wave5.json';
import { HomeGallerySlice } from 'prismicio-types';

const sliders = [
  {
    circle: 'linear-gradient(180deg, #D9D32F 0%, rgba(217, 211, 47, 0) 100%);',
    color: '#D9D32F',
    height: 'clamp(224px,44.17vw, 668px)',
    left: '-17%',
    top: '35%',
    wave: wave1,
    width: 'clamp(166px,32.80vw, 496px)',
  },
  {
    circle: 'linear-gradient(180deg, #8BA726 0%, rgba(139, 167, 38, 0) 100%);',
    color: '#8BA726',
    height: 'clamp(179px,32.87vw, 497px)',
    left: '-9%',
    top: '53%',
    wave: wave2,
    width: 'clamp(206px ,37.96vw, 574px)',
  },
  {
    circle: 'linear-gradient(180deg, #FF8A0C 0%, rgba(255, 152, 40, 0) 100%);',
    color: '#FF8A0C',
    height: 'clamp(259px,49.4vw, 747px)',
    left: '-19%',
    top: '21%',
    wave: wave3,
    width: 'clamp(184px ,34.92vw, 528px)',
  },
  {
    circle: 'linear-gradient(180deg, #FFDB31 0%, rgba(255, 219, 49, 0) 100%);',
    color: '#FFDB31',
    height: 'clamp(234px,55.15vw, 834px)',
    left: '-5%',
    top: '24%',
    wave: wave4,
    width: 'clamp(311px ,41.66vw, 630px)',
  },
  {
    circle: 'linear-gradient(180deg, #FF6034 0%, rgba(255, 96, 52, 0) 100%);',
    color: '#FF6034',
    height: 'clamp(171px,38.29vw, 579px)',
    left: '-30%',
    top: '46%',
    wave: wave5,
    width: 'clamp(241px,77.57vw, 1173px)',
  },
];

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const Classics: FC<{ slice: HomeGallerySlice }> = ({
  slice: {
    items,
    primary: { title },
  },
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= theme.breakpoints.mobile;
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback(() => {
    setActiveSliderIndex((currentIndex) => {
      if (currentIndex === sliders.length - 1) {
        return 0;
      }

      return currentIndex + 1;
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

  const handleSliderButtonClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const { target } = event;
      const { id } = target as Element;

      if (id !== activeSliderIndex.toString()) {
        setActiveSliderIndex(Number(id));
      }

      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }

      startSliderInterval(sliderAfterClickInterval);
    },
    [activeSliderIndex, startSliderInterval],
  );

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  const content = isMobile ? (
    items.map((slider, index) => (
      <MaxWidthWrapper key={slider.title} style={{ position: 'relative' }}>
        <LottieWrapper>
          <Lottie animationData={sliders[index].wave} />
        </LottieWrapper>
        <MobileSliderContent>
          <SliderName
            style={{ color: sliders[index].color }}
            dangerouslySetInnerHTML={{ __html: slider.subtitle as string }}
          ></SliderName>
          <SliderTitle dangerouslySetInnerHTML={{ __html: slider.title as string }}></SliderTitle>
          <SliderDescription dangerouslySetInnerHTML={{ __html: slider.text as string }}></SliderDescription>
          <Link href="/menu" style={{ marginLeft: index % 2 ? 'initial' : 'auto' }}>
            <ButtonRound>See the menu</ButtonRound>
          </Link>
          <MobileCircle background={sliders[activeSliderIndex].circle} isRightAligned={Boolean(index % 2)}>
            <FloatingImage
              bottom="-19px"
              height={sliders[index].height}
              field={isEmpty(slider.mobile_image) ? slider.image : slider.mobile_image}
              width={sliders[index].width}
              {...(index % 2 ? { left: '0px' } : { right: '-44px' })}
            />
          </MobileCircle>
        </MobileSliderContent>
      </MaxWidthWrapper>
    ))
  ) : (
    <>
      <MaxWidthWrapper>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <SliderContent>
          <SliderName
            style={{ color: sliders[activeSliderIndex].color }}
            dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].subtitle as string }}
          ></SliderName>
          <SliderTitle dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].title as string }}></SliderTitle>
          <SliderDescription
            dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].text as string }}
          ></SliderDescription>
          <Link href="/menu">
            <ButtonRound>See the menu</ButtonRound>
          </Link>
        </SliderContent>
      </MaxWidthWrapper>
      <LottieWrapper>
        <Lottie animationData={sliders[activeSliderIndex].wave} />
      </LottieWrapper>
      <SideContent>
        {items.map((slider, index) => (
          <Image
            key={index}
            field={slider.image}
            height={sliders[index].height}
            isActive={index === activeSliderIndex}
            left={sliders[index].left}
            style={{ zIndex: 1 }}
            top={sliders[index].top}
            width={sliders[index].width}
          />
        ))}
        <Circle background={sliders[activeSliderIndex].circle} />
        <SliderButtonsContainer>
          {sliders.map((x, index) => (
            <SliderButton
              key={index}
              activeColor={sliders[index].color}
              id={index.toString()}
              isActive={index === activeSliderIndex}
              onClick={handleSliderButtonClick}
            />
          ))}
        </SliderButtonsContainer>
      </SideContent>
    </>
  );

  return <Wrapper>{content}</Wrapper>;
};

export default Classics;
