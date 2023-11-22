import AboutUsSection from '@components/pages/OrangeLeaf/AboutUs/AboutUsSection/AboutUsSection';
import { createClient } from 'prismicio';
import { AboutUsPageSlice } from 'prismicio-types';

import type { FC } from 'react';

export const metadata = {
  title: 'About Us | Orange Leaf Frozen Yogurt',
};

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
