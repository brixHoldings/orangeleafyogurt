import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `AboutUsPage`.
 */
export type AboutUsPageProps = SliceComponentProps<Content.AboutUsPageSlice>;

/**
 * Component for "AboutUsPage" Slices.
 */
const AboutUsPage = ({ slice }: AboutUsPageProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for about_us_page (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutUsPage;
