import { useState, useCallback, useEffect, useRef } from 'react';

import {
  MainContentWrapper,
  Title,
  ScrollChangeContent,
  TopTitleImage,
  Subtitle,
  ImageSubtext,
  BucketContainer,
  Bucket,
  EmptyBucketCircleText,
  EmptyBucketTextContainer,
  EmptyBucketBottomContent,
  SmallText,
  Cereals,
  ArrowIcon,
  FullBucketLogo,
  Icecream,
  TextWithoutHeart,
  Froyo,
  Popcorn,
  LastStepText,
} from './TopScrollContent.styles';

import type { FC } from 'react';

type Steps = 0 | 1 | 2 | 3 | 4 | 5;

const stepsWithContent = [
  {
    imageSubtext: 'Creativity pending...',
    title: 'How to orange leaf',
  },
  {
    subtitle: 'To capture the fun',
    title: 'Take a cup!',
  },
  {
    subtitle: '20 to choose from!',
    title: 'Pick a flavor!',
  },
  {
    subtitle: '60 amazing ones!',
    title: 'Add topings!',
  },
  {
    subtitle: 'creative freedom!',
    title: 'Unleash',
  },
  {
    subtitle: "...It's a place where...",
    title: 'More Than Just Froyo',
  },
];

const TopScrollContent: FC = () => {
  const circleDivRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = useState<Steps>(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [preventScrollState, setPreventScrollState] = useState(false);
  // eslint-disable-next-line prefer-destructuring
  const { title, subtitle, imageSubtext } = stepsWithContent[currentStep];

  const preventScroll = (): void => {
    setPreventScrollState(true);
    window.scrollTo({
      behavior: 'smooth',
      top: 10,
    });
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      document.body.style.overflow = 'auto';
      setPreventScrollState(false);
    }, 2000);
  };

  const checkIfNeedToDoSOmething = useCallback(() => {
    // eslint-disable-next-line prefer-destructuring
    const { scrollTop } = document.documentElement;
    if (circleDivRef.current && scrollTop <= 20) {
      const isScrollDirectionDown = lastScrollPosition <= (window.pageYOffset || document.documentElement.scrollTop);

      if (isScrollDirectionDown && currentStep < 5 && !preventScrollState) {
        preventScroll();
        setCurrentStep((previousStep) => (previousStep + 1) as Steps);
      } else if (!isScrollDirectionDown && currentStep > 0 && !preventScrollState) {
        preventScroll();
        setCurrentStep((previousStep) => (previousStep - 1) as Steps);
      }

      setLastScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    }
  }, [lastScrollPosition, currentStep, preventScrollState]);

  useEffect(() => {
    window.addEventListener('scroll', checkIfNeedToDoSOmething);

    return () => {
      window.removeEventListener('scroll', checkIfNeedToDoSOmething);
    };
  }, [checkIfNeedToDoSOmething]);

  return (
    <MainContentWrapper>
      <TopTitleImage />

      <Title step={currentStep}>{title}</Title>

      {Boolean(subtitle) && <Subtitle>{subtitle}</Subtitle>}

      <ScrollChangeContent ref={circleDivRef} id="changeable-content">
        {currentStep === 0 || currentStep === 1 ? (
          <BucketContainer>
            <Bucket fullBucket={currentStep === 1}>
              {currentStep === 0 ? (
                <>
                  <EmptyBucketCircleText />

                  <EmptyBucketTextContainer>
                    {Boolean(imageSubtext) && <ImageSubtext>{imageSubtext}</ImageSubtext>}
                  </EmptyBucketTextContainer>

                  <EmptyBucketBottomContent>
                    <SmallText>Scroll to fill the cup</SmallText>
                    <ArrowIcon />
                  </EmptyBucketBottomContent>
                </>
              ) : null}

              {currentStep === 1 ? <FullBucketLogo /> : null}
            </Bucket>
          </BucketContainer>
        ) : null}

        {currentStep === 2 ? <Icecream /> : null}

        {currentStep === 3 ? <Cereals /> : null}

        {currentStep === 4 || currentStep === 5 ? (
          <>
            <Froyo />
            <Popcorn />
            <TextWithoutHeart />

            {currentStep === 5 && (
              <LastStepText>
                ...you can express your flavor freedom and enjoy a delicious treat with your friends and family.
              </LastStepText>
            )}
          </>
        ) : null}
      </ScrollChangeContent>
    </MainContentWrapper>
  );
};

export default TopScrollContent;
