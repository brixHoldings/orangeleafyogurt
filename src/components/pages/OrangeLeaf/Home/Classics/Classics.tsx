'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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

const sliders = [
  {
    circle: 'linear-gradient(180deg, #D9D32F 0%, rgba(217, 211, 47, 0) 100%);',
    color: '#D9D32F',
    description:
      "Our froyo flavors are the best, because we make them that way. No really, we do. Each flavor recipe is uniquely ours and you can't get it anywhere else!",
    height: 'clamp(224px,44.17vw, 668px)',
    image: '/images/home-slider1.png',
    left: '-17%',
    name: 'Frozen yogurt',
    title: 'Creative delight',
    top: '35%',
    wave: wave1,
    width: 'clamp(166px,32.80vw, 496px)',
  },
  {
    circle: 'linear-gradient(180deg, #8BA726 0%, rgba(139, 167, 38, 0) 100%);',
    color: '#8BA726',
    description:
      'Super Food Bowls are not only tasty, but also good for you. They provide you with energy, vitamins, minerals, and antioxidants to support your health and wellness.',
    height: 'clamp(179px,32.87vw, 497px)',
    image: '/images/home-slider2.png',
    left: '-9%',
    name: 'Bowls',
    title: 'Super Food Bowls',
    top: '53%',
    wave: wave2,
    width: 'clamp(206px ,37.96vw, 574px)',
  },
  {
    circle: 'linear-gradient(180deg, #FF8A0C 0%, rgba(255, 152, 40, 0) 100%);',
    color: '#FF8A0C',
    description:
      'Made fresh to order, just for you. Choose from our menu of favorites or create a masterpiece of your own. Flavor freedom is yours.',
    height: 'clamp(259px,49.4vw, 747px)',
    image: '/images/home-slider3.png',
    left: '-19%',
    name: 'Smoothies & shakes',
    title: 'Flavor freedom',
    top: '21%',
    wave: wave3,
    width: 'clamp(184px ,34.92vw, 528px)',
  },
  {
    circle: 'linear-gradient(180deg, #FFDB31 0%, rgba(255, 219, 49, 0) 100%);',
    color: '#FFDB31',
    description:
      'Make your next event extraordinary! Choose from one of our four signature froyo cakes or customize your own with your favorite froyo flavors and toppings.',
    height: 'clamp(234px,55.15vw, 834px)',
    image: '/images/home-slider4.png',
    left: '-5%',
    name: 'Cakes',
    title: 'Froyo cake?!',
    top: '24%',
    wave: wave4,
    width: 'clamp(311px ,41.66vw, 630px)',
  },
  {
    circle: 'linear-gradient(180deg, #FF6034 0%, rgba(255, 96, 52, 0) 100%);',
    color: '#FF6034',
    description:
      'Say hello to the Pop-Up Party Box. Perfect for birthday parties, school fundraisers and meet ups with friends. The box offers froyo lovers a convenient and easy way to enjoy Orange Leaf at home, at play or even at school—whether it is 12, 25 or 50 8oz cups of froyo (plus toppings).',
    height: 'clamp(171px,38.29vw, 579px)',
    image: '/images/home-slider5.png',
    left: '-30%',
    mobileImage: '/images/image31.png',
    name: 'Pop UP Party Boxes',
    title: 'Bring fun home',
    top: '46%',
    wave: wave5,
    width: 'clamp(241px,77.57vw, 1173px)',
  },
];

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const Classics: FC = () => {
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
    sliders.map((slider, index) => (
      <MaxWidthWrapper key={slider.name} style={{ position: 'relative' }}>
        <LottieWrapper>
          <Lottie animationData={slider.wave} />
        </LottieWrapper>
        <MobileSliderContent>
          <SliderName style={{ color: slider.color }}>{slider.name}</SliderName>
          <SliderTitle>{slider.title}</SliderTitle>
          <SliderDescription>{slider.description}</SliderDescription>
          <Link href="/menu" style={{ marginLeft: index % 2 ? 'initial' : 'auto' }}>
            <ButtonRound>See the menu</ButtonRound>
          </Link>
          <MobileCircle background={slider.circle} isRightAligned={Boolean(index % 2)}>
            <FloatingImage
              alt={slider.name}
              bottom="-19px"
              height={slider.height}
              src={slider.mobileImage ?? slider.image}
              width={slider.width}
              {...(index % 2 ? { left: '0px' } : { right: '-44px' })}
            />
          </MobileCircle>
        </MobileSliderContent>
      </MaxWidthWrapper>
    ))
  ) : (
    <>
      <MaxWidthWrapper>
        <Title>... or try the classics</Title>
        <SliderContent>
          <SliderName style={{ color: sliders[activeSliderIndex].color }}>{sliders[activeSliderIndex].name}</SliderName>
          <SliderTitle>{sliders[activeSliderIndex].title}</SliderTitle>
          <SliderDescription>{sliders[activeSliderIndex].description}</SliderDescription>
          <Link href="/menu">
            <ButtonRound>See the menu</ButtonRound>
          </Link>
        </SliderContent>
      </MaxWidthWrapper>
      <LottieWrapper>
        <Lottie animationData={sliders[activeSliderIndex].wave} />
      </LottieWrapper>
      <SideContent>
        {sliders.map((slider, index) => (
          <Image
            key={index}
            alt={slider.title}
            height={slider.height}
            isActive={index === activeSliderIndex}
            left={slider.left}
            src={slider.image}
            style={{ zIndex: 1 }}
            top={slider.top}
            width={slider.width}
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
