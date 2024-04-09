import type { FC } from 'react';
import { createClient } from 'prismicio';
import ThankYouComponent from '@components/pages/OrangeLeaf/ThankYou/ThankYou';
import { Metadata } from 'next';
import { ThankYouSlice } from 'prismicio-types';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('thank_you');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const ThankYou: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('thank_you');

  const thankYouSlice = page.data.slices.find((slice) => slice.slice_type === 'thank_you') as ThankYouSlice | undefined;

  return thankYouSlice ? <ThankYouComponent slice={thankYouSlice} /> : null;
};

export default ThankYou;
