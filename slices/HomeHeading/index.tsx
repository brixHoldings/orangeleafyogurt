import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomeHeading`.
 */
export type HomeHeadingProps = SliceComponentProps<Content.HomeHeadingSlice>;

/**
 * Component for "HomeHeading" Slices.
 */
const HomeHeading = ({ slice }: HomeHeadingProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for home_heading (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomeHeading;
