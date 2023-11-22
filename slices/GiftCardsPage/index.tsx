import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GiftCardsPage`.
 */
export type GiftCardsPageProps = SliceComponentProps<Content.GiftCardsPageSlice>;

/**
 * Component for "GiftCardsPage" Slices.
 */
const GiftCardsPage = ({ slice }: GiftCardsPageProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for gift_cards_page (variation: {slice.variation}) Slices
    </section>
  );
};

export default GiftCardsPage;
