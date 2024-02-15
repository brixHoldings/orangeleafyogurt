import Classics from '@components/pages/OrangeLeaf/Home/Classics';
import HowToOrangeLeaf from '@components/pages/OrangeLeaf/Home/HowToOrangeLeaf/HowToOrangeLeaf';
import Pill from '@components/pages/OrangeLeaf/Home/Pill';
import Promo from '@components/pages/OrangeLeaf/Home/Promo';
import SharePhotos from '@components/pages/OrangeLeaf/Home/SharePhotos';
import WhatsNew from '@components/pages/OrangeLeaf/Home/WhatsNew';
import { asText } from '@prismicio/client';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { HomeGallerySlice, HomeHeadingSlice, HomePromoSlice, SharePhotosSlice, WhatsNewSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: asText(page.data.meta_description),
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || '',
        },
      ],
    },
  };
}

/* @ts-expect-error Server Component */
const Home: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('homepage');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'home_heading') as
    | HomeHeadingSlice
    | undefined;
  const whatsNewSlice = page.data.slices.find((slice) => slice.slice_type === 'whats_new') as WhatsNewSlice | undefined;
  const classicsSlice = page.data.slices.find((slice) => slice.slice_type === 'home_gallery') as
    | HomeGallerySlice
    | undefined;
  const promoSlice = page.data.slices.find((slice) => slice.slice_type === 'home_promo') as HomePromoSlice | undefined;
  const sharePhotosSlice = page.data.slices.find((slice) => slice.slice_type === 'share_photos') as
    | SharePhotosSlice
    | undefined;

  return (
    <>
      {headerSlice ? <HowToOrangeLeaf slice={headerSlice} /> : null}
      <Pill>
        {whatsNewSlice ? <WhatsNew slice={whatsNewSlice} /> : null}
        {classicsSlice ? <Classics slice={classicsSlice} /> : null}
      </Pill>
      {promoSlice ? <Promo slice={promoSlice} /> : null}
      {sharePhotosSlice ? <SharePhotos slice={sharePhotosSlice} /> : null}
    </>
  );
};
export default Home;
