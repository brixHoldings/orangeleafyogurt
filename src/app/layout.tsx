'use client';

import { PrismicPreview } from '@prismicio/next';
import localFont from 'next/font/local';
import { repositoryName } from 'prismicio';
import { useSelectedLayoutSegments } from 'next/navigation';

import Footer from '@components/pages/OrangeLeaf/common/Footer';
import Header from '@components/pages/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import type { FC, ReactNode } from 'react';
import GlobalStyle from './orange-leaf/GlobalStyle';
import { StoreProvider } from 'src/context/StoreProvider';

const gothamUltra = localFont({
  src: '../../public/fonts/GothamUltra.otf',
  variable: '--gotham-ultra',
});

const centuryGothic = localFont({
  src: '../../public/fonts/Gothic.ttf',
  variable: '--century-gothic',
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const segments = useSelectedLayoutSegments();

  const content =
    segments[segments.length - 1] === 'franchising' ? (
      children
    ) : (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );

  return (
    <html className={`${gothamUltra.variable} ${centuryGothic.variable}`} lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {content}
            <PrismicPreview repositoryName={repositoryName} />
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
