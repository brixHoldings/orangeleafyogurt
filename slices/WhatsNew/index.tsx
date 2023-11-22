import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `WhatsNew`.
 */
export type WhatsNewProps = SliceComponentProps<Content.WhatsNewSlice>;

/**
 * Component for "WhatsNew" Slices.
 */
const WhatsNew = ({ slice }: WhatsNewProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for whats_new (variation: {slice.variation}) Slices
    </section>
  );
};

export default WhatsNew;
