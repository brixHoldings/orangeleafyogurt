import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ThankYou`.
 */
export type ThankYouProps = SliceComponentProps<Content.ThankYouSlice>;

/**
 * Component for "ThankYou" Slices.
 */
const ThankYou = ({ slice }: ThankYouProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for thank_you (variation: {slice.variation}) Slices
    </section>
  );
};

export default ThankYou;
