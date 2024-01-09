import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingHeader`.
 */
export type FranchisingHeaderProps = SliceComponentProps<Content.FranchisingHeaderSlice>;

/**
 * Component for "FranchisingHeader" Slices.
 */
const FranchisingHeader = ({ slice }: FranchisingHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingHeader;
