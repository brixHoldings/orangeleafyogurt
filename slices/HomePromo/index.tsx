import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomePromo`.
 */
export type HomePromoProps = SliceComponentProps<Content.HomePromoSlice>;

/**
 * Component for "HomePromo" Slices.
 */
const HomePromo = ({ slice }: HomePromoProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for home_promo (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomePromo;
