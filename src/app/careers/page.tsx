import JoinOurTeamComp from '@components/pages/OrangeLeaf/JoinOurTeam/JoinOurTeam';
import { createClient } from 'prismicio';
import { GiftCardsPageSlice, JoinOurTeamSectionSlice } from 'prismicio-types';
import type { FC } from 'react';

export const metadata = {
  title: 'Gift Cards | Orange Leaf Frozen Yogurt',
};

/* @ts-expect-error Server Component */
const Careers: FC = async () => {
  const client = createClient();
  const page = await client.getSingle('careers');

  const joinOurTeamSlice = page.data.slices.find((slice) => slice.slice_type === 'join_our_team_section') as
    | JoinOurTeamSectionSlice
    | undefined;

  return joinOurTeamSlice ? <JoinOurTeamComp slice={joinOurTeamSlice} /> : null;
};

export default Careers;
