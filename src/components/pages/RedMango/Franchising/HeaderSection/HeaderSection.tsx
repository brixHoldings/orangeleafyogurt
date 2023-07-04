import { useCallback } from 'react';

import Button from '@components/pages/RedMango/Button';
import MobileContainer from '@components/ui/MobileContainer';

import {
  BottomContentContainer,
  CardsContainer,
  CardText,
  ContentContainer,
  FullWidthCircularDiv,
  FullWidthContentContainer,
  MainContentImage,
  CardContentContainer,
  MainText,
  SectionContainer,
  Text,
  TextContent,
  StyledSVG,
} from './HeaderSection.styles';

import type { FC } from 'react';

const HeaderSection: FC = () => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  const cardContentMap = [
    { id: 1, text: 'Since 2007' },
    { id: 2, text: '200+ locations' },
    { id: 3, text: '50+ menu items' },
  ];

  return (
    <SectionContainer>
      <FullWidthContentContainer>
        <MobileContainer>
          <ContentContainer>
            <TextContent>
              <MainText>Award winning frozen yogurt!</MainText>
              <Text>
                First to be certified by the Yogurt Asso-ciation&apos;s Live and Active Culture Seal. 100% all-natural
                and nonfat. Certified Gluten Free and Kosher.
              </Text>

              <Button label="Become a part of the family" onClick={onClickHandle} variant="secondary" />
            </TextContent>

            <MainContentImage alt="main-content-image" src="/images/RedMangoHeaderSectionMain.png" />
          </ContentContainer>

          <FullWidthCircularDiv />
        </MobileContainer>
      </FullWidthContentContainer>

      <BottomContentContainer>
        <MobileContainer>
          <CardsContainer>
            {cardContentMap.map(({ id, text }) => (
              <CardContentContainer key={id}>
                <StyledSVG
                  fill="none"
                  height="306"
                  viewBox="0 0 315 306"
                  width="315"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M111.75 0C115.789 0 119.828 0 123.868 0C125.529 0.21327 127.183 0.483411 128.844 0.6327C141.906 1.79147 154.96 3.02843 168.029 4.0308C175.419 4.59241 182.809 5.02606 189.964 7.10188C211.623 13.4004 232.734 21.1279 252.838 31.4715C260.299 35.3104 266.809 40.3435 272.686 46.2298C287.381 60.9312 297.383 78.5543 304.553 97.9192C310.565 114.156 313.788 130.962 314.633 148.222C315.691 169.855 314.697 191.303 308.535 212.274C304.737 225.213 299.399 237.433 291.981 248.708C283.193 262.059 272.984 274.158 260.59 284.36C249.338 293.616 236.88 300.39 222.562 303.426C210.153 306.056 197.588 306.668 185.016 305.274C177.009 304.386 169.03 303.021 161.129 301.428C154.627 300.12 148.06 298.698 141.87 296.402C132.251 292.826 123.662 287.139 115.143 281.473C105.453 275.018 96.0333 268.137 86.2299 261.867C66.8928 249.511 48.9826 235.514 33.7132 218.267C22.5113 205.613 12.935 191.985 7.28442 175.862C4.08997 166.756 1.15108 157.557 0.363111 147.917C-0.659112 135.49 0.561877 123.135 2.96126 110.922C5.75108 96.7107 10.8125 83.2249 16.5838 70.0093C20.5165 61.0094 24.6551 52.1089 30.5187 44.0971C35.3459 37.507 41.4295 32.2037 47.2079 26.5663C51.5737 22.308 56.4008 18.7606 61.5616 15.5118C73.9916 7.6706 87.8484 4.07345 101.996 1.25118C105.205 0.611373 108.499 0.405212 111.75 0Z"
                    fill="white"
                  />
                </StyledSVG>

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
