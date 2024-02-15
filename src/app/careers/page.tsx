import JoinOurTeamComp from '@components/pages/OrangeLeaf/JoinOurTeam/JoinOurTeam';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { JoinOurTeamSectionSlice } from 'prismicio-types';
import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('careers');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

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
