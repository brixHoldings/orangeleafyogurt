'use client';

import { useEffect } from 'react';

import AboutSection from '@components/pages/OrangeLeaf/Franchising/AboutSection';
import FormSection from '@components/pages/OrangeLeaf/Franchising/FormSection';
import GetStartedSection from '@components/pages/OrangeLeaf/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/OrangeLeaf/Franchising/HeaderSection';
import HowToSection from '@components/pages/OrangeLeaf/Franchising/HowToSection';
import MenuSection from '@components/pages/OrangeLeaf/Franchising/MenuSection';
import PurposeSection from '@components/pages/OrangeLeaf/Franchising/PurposeSection';
import VideoSection from '@components/pages/OrangeLeaf/Franchising/VideoSection';

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
