'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAnimate } from 'framer-motion';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  Container,
  Link,
  Section,
  Separator,
  OuterContainer,
  LinkSection,
  Button,
  MobileWrapper,
  HamburgerButton,
  HamburgerMenu,
  CloseButton,
  HomeLink,
  ButtonLink,
  ButtonLinkAsAnchor,
} from './Header.styles';

import type { FC } from 'react';
import { useStore } from '@context/StoreProvider';
import useDimension from '@hooks/useDimension';

const Header: FC = () => {
  const { width } = useWindowSize();
  const [ref, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { setNavigationHeight } = useStore();
  const mobileNavigationRef = useRef<HTMLElement>(null);
  const desktopNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }
  }, [isOpen]);

  const isMobile = width <= theme.breakpoints.smallScreen;

  const { height } = useDimension(isMobile ? mobileNavigationRef : desktopNavigationRef);

  useEffect(() => {
    setNavigationHeight(height);
  }, [height, setNavigationHeight]);

  const onHamburgerClick = (): void => {
    void animate(ref.current, { opacity: 1, x: 0 }, { duration: 0.3 });
    setIsOpen(true);
  };

  const onClose = (href: string): void => {
    void animate(ref.current, { opacity: 0, x: 20 });
    router.push(href);
    setIsOpen(false);
  };

  return isMobile ? (
    <>
      <HamburgerMenu ref={ref} data-is-open={isOpen} initial={{ opacity: 0, x: 20 }}>
        <CloseButton
          onClick={(): void => {
            void animate(ref.current, { opacity: 0, x: 20 });
            setIsOpen(false);
          }}
        >
          <svg fill="none" height="32" viewBox="0 0 22 22" width="20">
            <path
              d="M20.375 4.4375c.8125-.75.8125-2.0625 0-2.8125-.75-.8125-2.0625-.8125-2.8125 0L11 8.1875 4.375 1.625c-.75-.8125-2.0625-.8125-2.8125 0-.8125.75-.8125 2.0625 0 2.8125L8.125 11l-6.5625 6.625c-.8125.75-.8125 2.0625 0 2.8125.75.8125 2.0625.8125 2.8125 0L11 13.875l6.5625 6.5625c.75.8125 2.0625.8125 2.8125 0 .8125-.75.8125-2.0625 0-2.8125L13.8125 11l6.5625-6.5625Z"
              fill="#421B00"
            />
          </svg>
        </CloseButton>
        <ButtonLink
          onClick={(): void => {
            onClose('/');
          }}
        >
          <svg fill="none" height="53" viewBox="0 0 53 55" width="53" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M53 26.9434L52.9367 0L25.7207 0.064458L25.6891 0.0966878C19.1699 0.290062 12.6824 2.93283 7.7139 8.02501C-2.60285 18.5961 -2.5712 35.6775 7.80884 46.1841C18.1889 56.6907 34.9615 56.6585 45.2783 46.0874C50.405 40.8341 53 33.9693 53 27.0723V27.0401V26.9434ZM43.063 33.3892C42.2086 36.322 40.7528 38.7714 38.6642 40.7052C38.0629 41.2531 37.3983 41.7687 36.7021 42.2522C32.5564 45.0883 28.0309 46.0229 23.1257 45.0561C21.4168 44.7338 19.8345 44.1859 18.3471 43.4446C18.1256 43.3157 17.9041 43.1868 17.6825 43.0901C16.7964 42.6067 15.9736 42.0588 15.2141 41.382C13.8533 40.254 12.6191 38.8681 11.5748 37.2567C8.78988 33.0347 7.87213 28.4259 8.82153 23.4627C9.77092 18.4672 12.3343 14.5353 16.4483 11.6991C19.4231 9.63646 22.5877 8.60513 25.9423 8.50844C29.3601 8.5729 32.2716 9.41086 34.6451 11.0223C35.183 11.4735 35.6261 11.8603 35.9109 12.247C36.1957 12.6015 36.4805 13.085 36.7021 13.6651C36.9236 14.2774 36.8919 14.8253 36.6388 15.341C36.5438 15.5021 36.4489 15.631 36.354 15.76C35.8476 16.3401 34.1703 16.5012 31.3222 16.2112C29.6133 16.05 28.5373 16.0178 28.0309 16.05C26.6385 16.1789 25.5625 16.4045 24.7081 16.6946C21.7016 17.7582 19.4547 19.7241 17.999 22.5603C17.6825 23.2693 17.4294 24.0428 17.2711 24.913C16.7648 27.5558 17.2711 29.9729 18.7269 32.229C20.2143 34.4528 22.2396 35.8386 24.8346 36.322C25.6891 36.4832 26.4803 36.5476 27.3031 36.5154C28.9487 36.4187 30.531 35.8708 32.0184 34.8395C33.4741 33.8404 34.5818 32.5835 35.278 31.0365C35.4046 30.7786 35.5312 30.4886 35.6261 30.1985C35.7843 29.7796 35.9109 29.3606 36.0375 28.9738C36.1641 28.5549 36.2907 27.9103 36.4489 27.0401C36.6071 26.1699 36.7021 25.3964 36.8287 24.7196C36.9236 24.0428 36.9869 23.6883 36.9869 23.6238C36.9869 23.5271 37.1451 22.657 37.4299 21.0133C37.5249 20.3365 37.6515 19.7886 37.7464 19.3051C38.1895 17.597 38.7591 16.4045 39.5186 15.6633C39.5502 15.631 39.5819 15.5988 39.6135 15.5666C40.0249 15.2121 40.4047 15.1798 40.6895 15.4699C40.8161 15.5988 40.911 15.8244 40.9743 16.0822C41.0376 16.3723 41.1326 16.7913 41.3225 17.3714C41.4807 17.9515 41.7022 18.6606 41.9554 19.563L42.525 21.4645C42.62 21.9157 42.7465 22.3347 42.8731 22.7536C42.9997 23.1726 43.1263 23.6883 43.2845 24.3651C43.3478 24.7196 43.4428 25.2353 43.5377 25.9443C43.8542 28.8127 43.6959 31.2621 43.063 33.3892Z"
              fill="#FF9828"
            />
          </svg>
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/menu'}
          onClick={(): void => {
            onClose('/menu');
          }}
        >
          Menu
        </ButtonLink>
        <ButtonLinkAsAnchor
          data-is-active={
            typeof window !== 'undefined' && window.location.origin.includes('https://locations.orangeleafyogurt.com')
          }
          href="https://locations.orangeleafyogurt.com/"
        >
          Locations
        </ButtonLinkAsAnchor>
        <ButtonLink
          data-is-active={pathname === '/e-club-signup'}
          onClick={(): void => {
            onClose('/e-club-signup');
          }}
        >
          E-club
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/gift-cards'}
          onClick={(): void => {
            onClose('/gift-cards');
          }}
        >
          Gift cards
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/about-us'}
          onClick={(): void => {
            onClose('/about-us');
          }}
        >
          About us
        </ButtonLink>
        <Button
          onClick={(): void => {
            onClose('/order');
          }}
          style={{ marginTop: '4px' }}
        >
          Order now
        </Button>
      </HamburgerMenu>
      <MobileWrapper ref={mobileNavigationRef}>
        <HomeLink href="/">
          <svg fill="none" height="32" viewBox="0 0 32 33">
            <path
              d="M31.3842 16.1784 31.3467.100586 15.2306.13905l-.0187.019232C11.3516.273673 7.50993 1.85068 4.56782 4.8893c-6.10911 6.308-6.09037 16.5009.05622 22.7704 6.14656 6.2696 16.07856 6.2504 22.18766-.0577 3.0358-3.1347 4.5725-7.2311 4.5725-11.3467v-.0769Zm-5.8843 3.8463c-.5059 1.7501-1.3679 3.2117-2.6048 4.3656-.356.327-.7495.6347-1.1618.9232-2.4549 1.6924-5.1347 2.2501-8.0393 1.6731-1.0119-.1923-1.9489-.5192-2.8297-.9616-.1312-.0769-.2623-.1538-.3935-.2115-.52472-.2885-1.01195-.6154-1.4617-1.0193-.8058-.6731-1.53664-1.5001-2.15505-2.4617-1.64909-2.5193-2.19253-5.2695-1.63035-8.2312.56219-2.9809 2.0801-5.32718 4.51625-7.01958 1.76155-1.23083 3.63545-1.84625 5.62185-1.90394 2.0239.03846 3.7479.53849 5.1534 1.50008.3186.26924.5809.50002.7496.7308.1687.21155.3373.50003.4685.8462.1312.36541.1124.69235-.0375 1.00006-.0562.09615-.1124.17308-.1687.25001-.2998.34617-1.293.44233-2.9795.26924-1.012-.09616-1.6491-.11539-1.949-.09615-.8245.07692-1.4617.21155-1.9676.38468-1.7803.6346-3.1108 1.8077-3.9728 3.5001-.1874.4231-.3373.8847-.431 1.404-.29986 1.577 0 3.0193.862 4.3656.8808 1.327 2.0801 2.1539 3.6167 2.4424.506.0962.9745.1346 1.4617.1154.9745-.0577 1.9115-.3846 2.7922-1.0001.862-.5961 1.5179-1.3462 1.9302-2.2693.075-.1539.1499-.3269.2061-.5.0937-.25.1687-.5001.2437-.7308.0749-.2501.1499-.6347.2436-1.1539.0937-.5193.1499-.9809.2248-1.3847.0563-.4039.0937-.6155.0937-.6539 0-.0577.0937-.577.2624-1.5578.0562-.4039.1312-.7308.1874-1.0193.2623-1.0193.5997-1.73084 1.0494-2.17317.0187-.01923.0375-.03846.0562-.05769.2436-.21155.4685-.23078.6372-.0577.0749.07693.1311.21155.1686.36541.0375.17308.0937.42305.2062.76925.0937.3462.2248.7693.3748 1.3078l.3373 1.1347c.0562.2692.1311.5192.2061.7692.075.25.1499.5577.2436.9616.0375.2116.0937.5193.1499.9424.1874 1.7116.0937 3.1732-.2811 4.4425Z"
              fill="#FF9828"
            />
          </svg>
        </HomeLink>

        <HamburgerButton onClick={onHamburgerClick}>
          <svg fill="none" height="18" viewBox="0 0 21 18">
            <path
              d="M0 1.5C0 .703125.65625 0 1.5 0h18c.7969 0 1.5.703125 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 3 0 2.34375 0 1.5ZM0 9c0-.79688.65625-1.5 1.5-1.5h18c.7969 0 1.5.70312 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 10.5 0 9.84375 0 9Zm19.5 9h-18C.65625 18 0 17.3438 0 16.5c0-.7969.65625-1.5 1.5-1.5h18c.7969 0 1.5.7031 1.5 1.5 0 .8438-.7031 1.5-1.5 1.5Z"
              fill="#421B00"
            />
          </svg>
        </HamburgerButton>
      </MobileWrapper>
    </>
  ) : (
    <OuterContainer ref={desktopNavigationRef}>
      <MaxWidthWrapper>
        <Container>
          <Section>
            <Link href="/">
              <svg fill="none" height="53" viewBox="0 0 53 55" width="53" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M53 26.9434L52.9367 0L25.7207 0.064458L25.6891 0.0966878C19.1699 0.290062 12.6824 2.93283 7.7139 8.02501C-2.60285 18.5961 -2.5712 35.6775 7.80884 46.1841C18.1889 56.6907 34.9615 56.6585 45.2783 46.0874C50.405 40.8341 53 33.9693 53 27.0723V27.0401V26.9434ZM43.063 33.3892C42.2086 36.322 40.7528 38.7714 38.6642 40.7052C38.0629 41.2531 37.3983 41.7687 36.7021 42.2522C32.5564 45.0883 28.0309 46.0229 23.1257 45.0561C21.4168 44.7338 19.8345 44.1859 18.3471 43.4446C18.1256 43.3157 17.9041 43.1868 17.6825 43.0901C16.7964 42.6067 15.9736 42.0588 15.2141 41.382C13.8533 40.254 12.6191 38.8681 11.5748 37.2567C8.78988 33.0347 7.87213 28.4259 8.82153 23.4627C9.77092 18.4672 12.3343 14.5353 16.4483 11.6991C19.4231 9.63646 22.5877 8.60513 25.9423 8.50844C29.3601 8.5729 32.2716 9.41086 34.6451 11.0223C35.183 11.4735 35.6261 11.8603 35.9109 12.247C36.1957 12.6015 36.4805 13.085 36.7021 13.6651C36.9236 14.2774 36.8919 14.8253 36.6388 15.341C36.5438 15.5021 36.4489 15.631 36.354 15.76C35.8476 16.3401 34.1703 16.5012 31.3222 16.2112C29.6133 16.05 28.5373 16.0178 28.0309 16.05C26.6385 16.1789 25.5625 16.4045 24.7081 16.6946C21.7016 17.7582 19.4547 19.7241 17.999 22.5603C17.6825 23.2693 17.4294 24.0428 17.2711 24.913C16.7648 27.5558 17.2711 29.9729 18.7269 32.229C20.2143 34.4528 22.2396 35.8386 24.8346 36.322C25.6891 36.4832 26.4803 36.5476 27.3031 36.5154C28.9487 36.4187 30.531 35.8708 32.0184 34.8395C33.4741 33.8404 34.5818 32.5835 35.278 31.0365C35.4046 30.7786 35.5312 30.4886 35.6261 30.1985C35.7843 29.7796 35.9109 29.3606 36.0375 28.9738C36.1641 28.5549 36.2907 27.9103 36.4489 27.0401C36.6071 26.1699 36.7021 25.3964 36.8287 24.7196C36.9236 24.0428 36.9869 23.6883 36.9869 23.6238C36.9869 23.5271 37.1451 22.657 37.4299 21.0133C37.5249 20.3365 37.6515 19.7886 37.7464 19.3051C38.1895 17.597 38.7591 16.4045 39.5186 15.6633C39.5502 15.631 39.5819 15.5988 39.6135 15.5666C40.0249 15.2121 40.4047 15.1798 40.6895 15.4699C40.8161 15.5988 40.911 15.8244 40.9743 16.0822C41.0376 16.3723 41.1326 16.7913 41.3225 17.3714C41.4807 17.9515 41.7022 18.6606 41.9554 19.563L42.525 21.4645C42.62 21.9157 42.7465 22.3347 42.8731 22.7536C42.9997 23.1726 43.1263 23.6883 43.2845 24.3651C43.3478 24.7196 43.4428 25.2353 43.5377 25.9443C43.8542 28.8127 43.6959 31.2621 43.063 33.3892Z"
                  fill="#FF9828"
                />
              </svg>
            </Link>
            <Separator />
            <ButtonLinkAsAnchor
              data-is-active={
                typeof window !== 'undefined' &&
                window.location.origin.includes('https://locations.orangeleafyogurt.com')
              }
              href="https://locations.orangeleafyogurt.com/"
            >
              Locations
            </ButtonLinkAsAnchor>
          </Section>
          <LinkSection>
            <Link data-is-active={pathname === '/menu'} href="/menu">
              Menu
            </Link>
            <Link data-is-active={pathname === '/e-club-signup'} href="/e-club-signup">
              E-club
            </Link>
            <Link data-is-active={pathname === '/gift-cards'} href="/gift-cards">
              Gift cards
            </Link>
            <Link data-is-active={pathname === '/about-us'} href="/about-us">
              About us
            </Link>
          </LinkSection>
          <Section>
            <Link data-is-active={pathname === '/franchising'} href="/franchising">
              Franchising
            </Link>
            <Separator />
            <Link href="/order">
              <Button>Order now</Button>
            </Link>
          </Section>
        </Container>
      </MaxWidthWrapper>
    </OuterContainer>
  );
};

export default Header;
