import GiftCardsSection from '@components/pages/OrangeLeaf/GiftCards/GiftCardsSection/GiftCardsSection';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { GiftCardsPageSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('gift_cards');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const GiftCards: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('gift_cards');

  const giftCardsPageSlice = page.data.slices.find((slice) => slice.slice_type === 'gift_cards_page') as
    | GiftCardsPageSlice
    | undefined;

  return giftCardsPageSlice ? <GiftCardsSection slice={giftCardsPageSlice} /> : null;
};

export default GiftCards;
