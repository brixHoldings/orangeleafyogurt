import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingHowToSection`.
 */
export type FranchisingHowToSectionProps = SliceComponentProps<Content.FranchisingHowToSectionSlice>;

/**
 * Component for "FranchisingHowToSection" Slices.
 */
const FranchisingHowToSection = ({ slice }: FranchisingHowToSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_how_to_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingHowToSection;
