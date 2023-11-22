import GiftCardsSection from '@components/pages/OrangeLeaf/GiftCards/GiftCardsSection/GiftCardsSection';
import { createClient } from 'prismicio';
import { GiftCardsPageSlice } from 'prismicio-types';

import type { FC } from 'react';

export const metadata = {
  title: 'Gift Cards | Orange Leaf Frozen Yogurt',
};

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
