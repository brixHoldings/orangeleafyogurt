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

const getOptions = async (): Promise<GetOptionsResponse | null> => {
  try {
    const res = await fetch(`https://us21.api.mailchimp.com/3.0/lists/6ba144ea7f/merge-fields`, {
      headers: {
        // Ensure strict string typing for the key or fallback to empty string to prevent 'undefined' string
        Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY || ''}`,
      },
      method: 'GET',
      // It is good practice to verify caching strategy in Next 13+
      next: { revalidate: 3600 } 
    });

    // 1. CHECK FOR HTTP ERRORS
    if (!res.ok) {
      console.error(`Mailchimp API Error: ${res.status} ${res.statusText}`);
      // Return null or empty structure if API fails
      return null;
    }

    return res.json() as Promise<GetOptionsResponse>;
  } catch (e) {
    console.error('Failed to fetch Mailchimp data:', e);
    return null;
  }
};

/* @ts-expect-error Server Component */
const EClub: FC = async () => {
  // 2. AWAIT DATA
  const data = await getOptions();
  
  const client = createClient();
  const page = await client.getSingle('eclubsignup');

  // 3. DEFENSIVE CODING FOR PRISMIC (Just in case)
  const eClubPageSlice = page?.data?.slices?.find((slice) => slice.slice_type === 'e_club_page') as
    | EClubPageSlice
    | undefined;

  // 4. DEFENSIVE CODING FOR MAILCHIMP
  // Use optional chaining (?.) to safely access merge_fields
  // If data is null or merge_fields is missing, this returns undefined instead of crashing
  const optionMatch = data?.merge_fields?.find((field) => field.tag === 'MMERGE3');

  const choices = optionMatch ? optionMatch.options.choices : [];

  return eClubPageSlice ? <EClubSection options={choices} slice={eClubPageSlice} /> : null;
};

export default EClub;
