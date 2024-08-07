'use client';

import {
  Barrier,
  Item,
  Lane,
  Logo,
  Photo,
  PhotoDescription,
  PhotoTitle,
  Slider,
  Wrapper,
  TextContainer,
  Title,
  StyledLink,
} from './PressRelease.styles';

import type { FC } from 'react';
import { PrismicImage } from '@prismicio/react';
import { PressReleaseSectionSlice } from 'prismicio-types';
import { asLink } from '@prismicio/client';
import { MaxWidthWrapper } from '@styles/common';

const PressRelease: FC<{ slice: PressReleaseSectionSlice }> = ({
  slice: {
    items,
    primary: { title },
  },
}) => (
  <Wrapper>
    <TextContainer>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
    </TextContainer>
    <Slider>
      <Barrier>
        <Lane>
          {[...items, ...items, ...items].map((release, index) => (
            <Item key={index}>
              <StyledLink href={asLink(release.link) as string} target="_blank">
                <Photo>
                  <PrismicImage field={release.image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />

                  <Logo>
                    <svg fill="none" height="55" viewBox="0 0 53 55" width="53" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M53 26.9434L52.9367 0L25.7207 0.064458L25.6891 0.0966878C19.1699 0.290062 12.6824 2.93283 7.7139 8.02501C-2.60285 18.5961 -2.5712 35.6775 7.80884 46.1841C18.1889 56.6907 34.9615 56.6585 45.2783 46.0874C50.405 40.8341 53 33.9693 53 27.0723V27.0401V26.9434ZM43.063 33.3892C42.2086 36.322 40.7528 38.7714 38.6642 40.7052C38.0629 41.2531 37.3983 41.7687 36.7021 42.2522C32.5564 45.0883 28.0309 46.0229 23.1257 45.0561C21.4168 44.7338 19.8345 44.1859 18.3471 43.4446C18.1256 43.3157 17.9041 43.1868 17.6825 43.0901C16.7964 42.6067 15.9736 42.0588 15.2141 41.382C13.8533 40.254 12.6191 38.8681 11.5748 37.2567C8.78988 33.0347 7.87213 28.4259 8.82153 23.4627C9.77092 18.4672 12.3343 14.5353 16.4483 11.6991C19.4231 9.63646 22.5877 8.60513 25.9423 8.50844C29.3601 8.5729 32.2716 9.41086 34.6451 11.0223C35.183 11.4735 35.6261 11.8603 35.9109 12.247C36.1957 12.6015 36.4805 13.085 36.7021 13.6651C36.9236 14.2774 36.8919 14.8253 36.6388 15.341C36.5438 15.5021 36.4489 15.631 36.354 15.76C35.8476 16.3401 34.1703 16.5012 31.3222 16.2112C29.6133 16.05 28.5373 16.0178 28.0309 16.05C26.6385 16.1789 25.5625 16.4045 24.7081 16.6946C21.7016 17.7582 19.4547 19.7241 17.999 22.5603C17.6825 23.2693 17.4294 24.0428 17.2711 24.913C16.7648 27.5558 17.2711 29.9729 18.7269 32.229C20.2143 34.4528 22.2396 35.8386 24.8346 36.322C25.6891 36.4832 26.4803 36.5476 27.3031 36.5154C28.9487 36.4187 30.531 35.8708 32.0184 34.8395C33.4741 33.8404 34.5818 32.5835 35.278 31.0365C35.4046 30.7786 35.5312 30.4886 35.6261 30.1985C35.7843 29.7796 35.9109 29.3606 36.0375 28.9738C36.1641 28.5549 36.2907 27.9103 36.4489 27.0401C36.6071 26.1699 36.7021 25.3964 36.8287 24.7196C36.9236 24.0428 36.9869 23.6883 36.9869 23.6238C36.9869 23.5271 37.1451 22.657 37.4299 21.0133C37.5249 20.3365 37.6515 19.7886 37.7464 19.3051C38.1895 17.597 38.7591 16.4045 39.5186 15.6633C39.5502 15.631 39.5819 15.5988 39.6135 15.5666C40.0249 15.2121 40.4047 15.1798 40.6895 15.4699C40.8161 15.5988 40.911 15.8244 40.9743 16.0822C41.0376 16.3723 41.1326 16.7913 41.3225 17.3714C41.4807 17.9515 41.7022 18.6606 41.9554 19.563L42.525 21.4645C42.62 21.9157 42.7465 22.3347 42.8731 22.7536C42.9997 23.1726 43.1263 23.6883 43.2845 24.3651C43.3478 24.7196 43.4428 25.2353 43.5377 25.9443C43.8542 28.8127 43.6959 31.2621 43.063 33.3892Z"
                        fill="#FF9828"
                      />
                    </svg>
                  </Logo>
                </Photo>
                <PhotoTitle dangerouslySetInnerHTML={{ __html: release.title as string }}></PhotoTitle>
                <PhotoDescription dangerouslySetInnerHTML={{ __html: release.text as string }}></PhotoDescription>
              </StyledLink>
            </Item>
          ))}
        </Lane>
      </Barrier>
    </Slider>
  </Wrapper>
);

export default PressRelease;
