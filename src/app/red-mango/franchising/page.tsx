'use client';

import { useEffect } from 'react';

import AboutSection from '@components/pages/RedMango/Franchising/AboutSection';
import FormSection from '@components/pages/RedMango/Franchising/FormSection';
import GetStartedSection from '@components/pages/RedMango/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/RedMango/Franchising/HeaderSection';
import HowToSection from '@components/pages/RedMango/Franchising/HowToSection';
import MenuSection from '@components/pages/RedMango/Franchising/MenuSection';
import PurposeSection from '@components/pages/RedMango/Franchising/PurposeSection';
import VideoSection from '@components/pages/RedMango/Franchising/VideoSection';

import type { FC } from 'react';

const Franchising: FC = () => {
  useEffect(() => {
    if (window.top) {
      window.top.postMessage({ height: document.body.clientHeight, type: 'iframeLoaded' }, '*');
    }

    const observer = new ResizeObserver(() => {
      if (window.top) {
        window.top.postMessage({ height: document.body.clientHeight, type: 'iframeLoaded' }, '*');
      }
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeaderSection />
      <VideoSection
        poster="/images/red-mango-video-poster.jpeg"
        url="/videos/Red Mango Testimonial NP DIGIAL CO_.mp4"
      />
      <HowToSection />
      <MenuSection />
      <PurposeSection />
      <AboutSection />
      <GetStartedSection />
      <FormSection />
    </>
  );
};

export default Franchising;
