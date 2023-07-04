'use client';

import { useEffect } from 'react';

import AboutSection from '@components/pages/SmoothieFactory/Franchising/AboutSection';
import FormSection from '@components/pages/SmoothieFactory/Franchising/FormSection';
import GetStartedSection from '@components/pages/SmoothieFactory/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/SmoothieFactory/Franchising/HeaderSection';
import HowToSection from '@components/pages/SmoothieFactory/Franchising/HowToSection';
import MenuSection from '@components/pages/SmoothieFactory/Franchising/MenuSection';
import PurposeSection from '@components/pages/SmoothieFactory/Franchising/PurposeSection';
import VideoSection from '@components/pages/SmoothieFactory/Franchising/VideoSection';

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
      <VideoSection />
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
