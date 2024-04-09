import EClubSection from '@components/pages/OrangeLeaf/EClub/EClubSection/EClubSection';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { EClubPageSlice } from 'prismicio-types';

import type { FC } from 'react';

type MergeField = {
  tag: string;
  options: {
    choices: string[];
  };
};

type GetOptionsResponse = {
  merge_fields: MergeField[];
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('eclubsignup');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

const getOptions = async (): Promise<GetOptionsResponse> => {
  try {
    const res = await fetch(`https://us21.api.mailchimp.com/3.0/lists/6ba144ea7f/merge-fields`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY}`,
      },
      method: 'GET',
    });

    return res.json() as Promise<GetOptionsResponse>;
  } catch (e) {
    throw new Error('Failed to fetch data');
  }
};

/* @ts-expect-error Server Component */
const EClub: FC = async () => {
  const data = await getOptions();

  const client = createClient();

  const page = await client.getSingle('eclubsignup');

  const eClubPageSlice = page.data.slices.find((slice) => slice.slice_type === 'e_club_page') as
    | EClubPageSlice
    | undefined;

  const optionMatch = data.merge_fields.find((field) => field.tag === 'MMERGE3');

  const choices = optionMatch === undefined ? [] : optionMatch.options.choices;

  return eClubPageSlice ? <EClubSection options={choices} slice={eClubPageSlice} /> : null;
};

export default EClub;
