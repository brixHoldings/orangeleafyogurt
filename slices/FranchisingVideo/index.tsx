import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `FranchisingVideo`.
 */
export type FranchisingVideoProps = SliceComponentProps<Content.FranchisingVideoSlice>;

/**
 * Component for "FranchisingVideo" Slices.
 */
const FranchisingVideo = ({ slice }: FranchisingVideoProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for franchising_video (variation: {slice.variation}) Slices
    </section>
  );
};

export default FranchisingVideo;
