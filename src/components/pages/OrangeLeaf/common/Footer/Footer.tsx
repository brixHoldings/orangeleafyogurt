'use client';

import { useRef, useEffect } from 'react';

import useDimension from '@hooks/useDimension';
import { useStore } from '@context/StoreProvider';

import {
  Container,
  Disclaimer,
  Link,
  SocialLink,
  Separator,
  SocialLinks,
  Wrapper,
  Copyright,
  CopyrightSection,
  Trademark,
  TermsAndConditions,
  FloatingIceCreamImage,
  OuterWrapper,
  LinksWrapper,
  NativeLink,
} from './Footer.styles';

import type { FC } from 'react';

const Footer: FC = () => {
  const ref = useRef<HTMLElement>(null);

  const { setFooterHeight } = useStore();

  const { height } = useDimension(ref);

  useEffect(() => {
    setFooterHeight(height);
  }, [height, setFooterHeight]);

  return (
    <OuterWrapper ref={ref}>
      <Wrapper>
        <FloatingIceCreamImage
          alt="cone"
          height="clamp(100px, 10.38vw, 157px)"
          src="/images/footer-cone.png"
          top="0"
          width="clamp(121px, 8.59vw, 130px)"
        />
        <Container>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/orangeleaf" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="white" r="16" />
                <path
                  d="M19.7188 17L20.1562 14.125H17.375V12.25C17.375 11.4375 17.75 10.6875 19 10.6875H20.2812V8.21875C20.2812 8.21875 19.125 8 18.0312 8C15.75 8 14.25 9.40625 14.25 11.9062V14.125H11.6875V17H14.25V24H17.375V17H19.7188Z"
                  fill="#FF6034"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/orangeleaf" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="#fff" r="16" />
                <path
                  d="M22.3438 12.75c.625-.4688 1.1874-1.0312 1.625-1.6875-.5626.25-1.2188.4375-1.875.5.6874-.4063 1.1874-1.0313 1.4374-1.8125-.625.375-1.3437.6562-2.0624.8125-.625-.65625-1.4688-1.03125-2.4063-1.03125-1.8125 0-3.2813 1.46875-3.2813 3.28125 0 .25.0313.5.0938.75-2.7188-.1563-5.1562-1.4687-6.78125-3.4375-.28125.4688-.4375 1.0312-.4375 1.6562 0 1.125.5625 2.125 1.46875 2.7188-.53125-.0312-1.0625-.1562-1.5-.4062v.0312c0 1.5938 1.125 2.9062 2.625 3.2188-.25.0624-.5625.125-.8438.125-.2187 0-.4062-.0313-.62495-.0626.40625 1.3126 1.62495 2.25 3.06255 2.2813-1.125.875-2.5313 1.4063-4.06255 1.4063-.28125 0-.53125-.0313-.78125-.0626 1.4375.9376 3.1562 1.4688 5.0312 1.4688 6.0313 0 9.3126-4.9688 9.3126-9.3125V12.75Z"
                  fill="#FF6034"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/orangeleaf/" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="#fff" r="16" />
                <path
                  d="M16 12.4062c-2 0-3.5938 1.625-3.5938 3.5938 0 2 1.5938 3.5938 3.5938 3.5938 1.9688 0 3.5938-1.5938 3.5938-3.5938 0-1.9688-1.625-3.5938-3.5938-3.5938Zm0 5.9376c-1.2812 0-2.3438-1.0313-2.3438-2.3438 0-1.2812 1.0313-2.3125 2.3438-2.3125 1.2812 0 2.3125 1.0313 2.3125 2.3125 0 1.3125-1.0313 2.3438-2.3125 2.3438Zm4.5625-6.0626c0-.4687-.375-.8437-.8437-.8437-.4688 0-.8438.375-.8438.8437 0 .4688.375.8438.8438.8438.4687 0 .8437-.375.8437-.8438Zm2.375.8438C22.875 12 22.625 11 21.8125 10.1875S20 9.125 18.875 9.0625C17.7188 9 14.25 9 13.0938 9.0625c-1.125.0625-2.0938.3125-2.9376 1.125C9.34375 11 9.09375 12 9.03125 13.125c-.0625 1.1562-.0625 4.625 0 5.7812.0625 1.125.3125 2.0938 1.12495 2.9376.8438.8124 1.8126 1.0624 2.9376 1.125 1.1562.0624 4.625.0624 5.7812 0 1.125-.0626 2.125-.3126 2.9375-1.125.8125-.8438 1.0625-1.8126 1.125-2.9376.0625-1.1562.0625-4.625 0-5.7812Zm-1.5 7c-.2187.625-.7187 1.0938-1.3125 1.3438-.9375.375-3.125.2812-4.125.2812-1.0312 0-3.2188.0938-4.125-.2812-.625-.25-1.0938-.7188-1.3438-1.3438-.375-.9062-.2812-3.0938-.2812-4.125 0-1-.0938-3.1875.2812-4.125.25-.5938.7188-1.0625 1.3438-1.3125.9062-.375 3.0938-.2813 4.125-.2813 1 0 3.1875-.0937 4.125.2813.5938.2187 1.0625.7187 1.3125 1.3125.375.9375.2813 3.125.2813 4.125 0 1.0312.0937 3.2188-.2813 4.125Z"
                  fill="#FF6034"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@orangeleaf.mc" target="_blank">
              <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" fill="#fff" r="16" />
                <path
                  d="M23 14.5625v-2.7187h-.0312c-.75 0-1.4688-.2188-2.0626-.625-.875-.5626-1.5-1.4688-1.6874-2.50005-.0626-.21875-.0626-.4375-.0626-.65625V8h-2.75v10.9375c0 1.2813-1.0624 2.3437-2.3437 2.3437s-2.3437-1.0624-2.3437-2.3437 1.0624-2.3437 2.3437-2.3437c.25 0 .4687.0312.7187.125v-2.8126c-.25-.0312-.4687-.0624-.7187-.0624C11.25 13.8438 9 16.125 9 18.9375S11.25 24 14.0625 24s5.0937-2.25 5.0937-5.0625v-5.5937c1.0626.7812 2.375 1.2187 3.8126 1.2187H23Z"
                  fill="#FF6034"
                />
              </svg>
            </SocialLink>
          </SocialLinks>
          <CopyrightSection>
            <Disclaimer>
              <Copyright>© 2020 - 2023 Orange Leaf, LLC. All Rights Reserved</Copyright>
              <Trademark>ORANGE LEAF name, design and related marks are trademarks of Orange Leaf, LLC</Trademark>
            </Disclaimer>
          </CopyrightSection>

          <TermsAndConditions>
            <LinksWrapper>
              <Link href="/about-us#contact-us" style={{ color: '#421B00' }}>
                Contact
              </Link>
              <Separator style={{ background: '#421B00' }} />
              <Link href="/careers" style={{ color: '#421B00' }}>
                Join our team
              </Link>
            </LinksWrapper>
            <LinksWrapper>
              <Link href="/privacy">Privacy</Link>
              <Separator />
              <Link href="/terms-of-use">Terms & Conditions</Link>
              <Separator />
              <NativeLink download href="/files/Orange Leaf - Nutritional Chart 2024.pdf">
                Nutritional Info
              </NativeLink>
              <Separator />
              <Link href="/accessibility-statement">Accessibility Statement</Link>
            </LinksWrapper>
          </TermsAndConditions>
        </Container>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Footer;
