import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingAboutSection`.
 */
export type FranchisingAboutSectionProps = SliceComponentProps<Content.FranchisingAboutSectionSlice>;

/**
 * Component for "FranchisingAboutSection" Slices.
 */
const FranchisingAboutSection = ({ slice }: FranchisingAboutSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_about_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingAboutSection;
