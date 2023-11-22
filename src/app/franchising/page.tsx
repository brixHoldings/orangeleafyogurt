import AboutSection from '@components/pages/OrangeLeaf/Franchising/AboutSection';
import FormSection from '@components/pages/OrangeLeaf/Franchising/FormSection';
import GetStartedSection from '@components/pages/OrangeLeaf/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/OrangeLeaf/Franchising/HeaderSection';
import HowToSection from '@components/pages/OrangeLeaf/Franchising/HowToSection';
import MenuSection from '@components/pages/OrangeLeaf/Franchising/MenuSection';
import PurposeSection from '@components/pages/OrangeLeaf/Franchising/PurposeSection';
import VideoSection from '@components/pages/OrangeLeaf/Franchising/VideoSection';
import { createClient } from 'prismicio';
import { FranchisingHeaderSlice, FranchisingHowToSectionSlice, FranchisingVideoSlice } from 'prismicio-types';

import type { FC } from 'react';

/* @ts-expect-error Server Component */
const Franchising: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('franchising');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_header') as
    | FranchisingHeaderSlice
    | undefined;

  const videoSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_video') as
    | FranchisingVideoSlice
    | undefined;

  const howToSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_how_to_section') as
    | FranchisingHowToSectionSlice
    | undefined;

  return (
    <>
      {headerSlice ? <HeaderSection slice={headerSlice} /> : null}
      {videoSlice ? <VideoSection slice={videoSlice} /> : null}
      {howToSlice ? <HowToSection slice={howToSlice} /> : null}
      <MenuSection />
      <PurposeSection />
      <AboutSection />
      <GetStartedSection />
      <FormSection />
    </>
  );
};

export default Franchising;
