import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingFormSection`.
 */
export type FranchisingFormSectionProps = SliceComponentProps<Content.FranchisingFormSectionSlice>;

/**
 * Component for "FranchisingFormSection" Slices.
 */
const FranchisingFormSection = ({ slice }: FranchisingFormSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_form_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingFormSection;
