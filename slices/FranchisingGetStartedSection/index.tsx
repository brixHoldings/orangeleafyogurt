import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingGetStartedSection`.
 */
export type FranchisingGetStartedSectionProps = SliceComponentProps<Content.FranchisingGetStartedSectionSlice>;

/**
 * Component for "FranchisingGetStartedSection" Slices.
 */
const FranchisingGetStartedSection = ({ slice }: FranchisingGetStartedSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_get_started_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingGetStartedSection;
