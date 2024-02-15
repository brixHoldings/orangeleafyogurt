import AboutUsSection from '@components/pages/OrangeLeaf/AboutUs/AboutUsSection/AboutUsSection';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { AboutUsPageSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('about_us');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const AboutUs: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('about_us');

  const aboutUsPageSlice = page.data.slices.find((slice) => slice.slice_type === 'about_us_page') as
    | AboutUsPageSlice
    | undefined;

  return aboutUsPageSlice ? <AboutUsSection slice={aboutUsPageSlice} /> : null;
};

export default AboutUs;
