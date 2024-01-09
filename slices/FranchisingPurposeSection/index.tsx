import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingPurposeSection`.
 */
export type FranchisingPurposeSectionProps = SliceComponentProps<Content.FranchisingPurposeSectionSlice>;

/**
 * Component for "FranchisingPurposeSection" Slices.
 */
const FranchisingPurposeSection = ({ slice }: FranchisingPurposeSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_purpose_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingPurposeSection;
