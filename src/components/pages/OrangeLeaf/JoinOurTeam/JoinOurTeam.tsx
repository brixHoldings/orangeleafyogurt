'use client';

import { MaxWidthWrapper } from '@styles/common';
import type { FC } from 'react';
import { Wrapper, Title, Text, Disclaimer } from './JoinOurTeam.style';
import Image from 'next/image';
import Button from '../common/Button';
import { JoinOurTeamSectionSlice } from 'prismicio-types';
import FloatingImage from '../common/FloatingImage/FloatingImage';

const JoinOurTeam: FC<{ slice: JoinOurTeamSectionSlice }> = ({
  slice: {
    primary: { title, text, button, button_link, disclaimer },
  },
}) => {
  return (
    <MaxWidthWrapper style={{ marginTop: 'clamp(112px,16.73vw, 253px)', marginBottom: 'clamp(115px,17.12vw, 259px)' }}>
      <Wrapper>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        <a
          href={button_link as string}
          target="_blank"
          style={{
            maxWidth: '410px',
            width: '100%',
          }}
        >
          <Button
            label={button as string}
            style={{
              backgroundColor: '#77BC1F',
              border: '2px solid #77BC1F',
              marginBottom: '40px',
              width: '100%',
            }}
          ></Button>
        </a>
        <Disclaimer dangerouslySetInnerHTML={{ __html: disclaimer as string }}></Disclaimer>
        <FloatingImage
          top="20%"
          right="-2%"
          alt="team"
          height="682px"
          width="497px"
          src="/images/2022_01_18_OrangeLeaf_008_5_ 2.png"
          renderInBody
          style={{ zIndex: -1 }}
          hideUnder={1024}
        />
        <FloatingImage
          top="23%"
          right="10%"
          alt="team"
          height="741px"
          width="741px"
          src="/images/Ellipse 11.png"
          renderInBody
          style={{ zIndex: -2, height: 0 }}
          hideUnder={1024}
        />
      </Wrapper>
    </MaxWidthWrapper>
  );
};

export default JoinOurTeam;
