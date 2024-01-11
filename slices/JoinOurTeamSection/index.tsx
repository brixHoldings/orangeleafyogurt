import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `JoinOurTeamSection`.
 */
export type JoinOurTeamSectionProps = SliceComponentProps<Content.JoinOurTeamSectionSlice>;

/**
 * Component for "JoinOurTeamSection" Slices.
 */
const JoinOurTeamSection = ({ slice }: JoinOurTeamSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for join_our_team_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default JoinOurTeamSection;
