import AboutSection from '@components/pages/OrangeLeaf/Franchising/AboutSection';
import FormSection from '@components/pages/OrangeLeaf/Franchising/FormSection';
import GetStartedSection from '@components/pages/OrangeLeaf/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/OrangeLeaf/Franchising/HeaderSection';
import HowToSection from '@components/pages/OrangeLeaf/Franchising/HowToSection';
import MenuSection from '@components/pages/OrangeLeaf/Franchising/MenuSection';
import PurposeSection from '@components/pages/OrangeLeaf/Franchising/PurposeSection';
import VideoSection from '@components/pages/OrangeLeaf/Franchising/VideoSection';
import { createClient } from 'prismicio';
import {
  FranchisingHeaderSlice,
  FranchisingHowToSectionSlice,
  FranchisingMenuSectionSlice,
  FranchisingPurposeSectionSlice,
  FranchisingVideoSlice,
  FranchisingAboutSectionSlice,
  FranchisingGetStartedSectionSlice,
  FranchisingFormSectionSlice,
} from 'prismicio-types';

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

  const menuSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_menu_section') as
    | FranchisingMenuSectionSlice
    | undefined;

  const purposeSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_purpose_section') as
    | FranchisingPurposeSectionSlice
    | undefined;

  const aboutSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_about_section') as
    | FranchisingAboutSectionSlice
    | undefined;

  const getStartedSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_get_started_section') as
    | FranchisingGetStartedSectionSlice
    | undefined;

  const formSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_form_section') as
    | FranchisingFormSectionSlice
    | undefined;

  return (
    <>
      {headerSlice ? <HeaderSection slice={headerSlice} /> : null}
      {videoSlice ? <VideoSection slice={videoSlice} /> : null}
      {howToSlice ? <HowToSection slice={howToSlice} /> : null}
      {menuSection ? <MenuSection slice={menuSection} /> : null}
      {purposeSection ? <PurposeSection slice={purposeSection} /> : null}
      {aboutSection ? <AboutSection slice={aboutSection} /> : null}
      {getStartedSection ? <GetStartedSection slice={getStartedSection} /> : null}
      {formSection ? <FormSection slice={formSection} /> : null}
    </>
  );
};

export default Franchising;
