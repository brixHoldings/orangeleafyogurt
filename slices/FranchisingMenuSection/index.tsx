import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingMenuSection`.
 */
export type FranchisingMenuSectionProps = SliceComponentProps<Content.FranchisingMenuSectionSlice>;

/**
 * Component for "FranchisingMenuSection" Slices.
 */
const FranchisingMenuSection = ({ slice }: FranchisingMenuSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_menu_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingMenuSection;
