'use client';

import { PrismicPreview } from '@prismicio/next';
import localFont from 'next/font/local';
import { repositoryName } from 'prismicio';

import Footer from '@components/pages/OrangeLeaf/common/Footer';
import Header from '@components/pages/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import { StoreProvider } from 'src/context/StoreProvider';
import GlobalStyle from './GlobalStyle';

import type { FC, ReactNode } from 'react';
import Script from 'next/script';

const gothamUltra = localFont({
  src: '../../public/fonts/GothamUltra.otf',
  variable: '--gotham-ultra',
});

const centuryGothic = localFont({
  src: '../../public/fonts/Gothic.ttf',
  variable: '--century-gothic',
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html className={`${gothamUltra.variable} ${centuryGothic.variable}`} lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H4J8CGKGZF"
        id="google-tag-manager"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', ''G-H4J8CGKGZF');
        `}
      </Script>
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
            <PrismicPreview repositoryName={repositoryName} />
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
