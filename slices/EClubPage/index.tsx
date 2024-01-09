import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `EClubPage`.
 */
export type EClubPageProps = SliceComponentProps<Content.EClubPageSlice>;

/**
 * Component for "EClubPage" Slices.
 */
const EClubPage = ({ slice }: EClubPageProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for e_club_page (variation: {slice.variation}) Slices
    </section>
  );
};

export default EClubPage;
