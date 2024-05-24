import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `PressReleaseSection`.
 */
export type PressReleaseSectionProps = SliceComponentProps<Content.PressReleaseSectionSlice>;

/**
 * Component for "PressReleaseSection" Slices.
 */
const PressReleaseSection = ({ slice }: PressReleaseSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for press_release_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default PressReleaseSection;
