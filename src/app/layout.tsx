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
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T37T4F8C')`}
      </Script>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-
T37T4F8C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
            <PrismicPreview repositoryName={repositoryName} />
          </StyledComponentsRegistry>
        </StoreProvider>
        <Script
          id="acsb-script"
          strategy="lazyOnload" // Loads after everything else
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          var s = document.createElement('script');
          var h = document.querySelector('head') || document.body;
          s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
          s.async = true;
          s.onload = function() {
            if (typeof acsbJS !== 'undefined') {
              acsbJS.init();
            }
          };
          h.appendChild(s);
        })();
      `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
