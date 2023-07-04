import EClubSection from '@components/pages/OrangeLeaf/EClub/EClubSection/EClubSection';

import type { FC } from 'react';

export const metadata = {
  title: 'E-Club Signup | Orange Leaf Frozen Yogurt',
};

type MergeField = {
  tag: string;
  options: {
    choices: string[];
  };
};

type GetOptionsResponse = {
  merge_fields: MergeField[];
};

const getOptions = async (): Promise<GetOptionsResponse> => {
  const res = await fetch(`https://us21.api.mailchimp.com/3.0/lists/6ba144ea7f/merge-fields`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY}`,
    },
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetOptionsResponse>;
};

/* @ts-expect-error Server Component */
const EClub: FC = async () => {
  const data = await getOptions();

  const optionMatch = data.merge_fields.find((field) => field.tag === 'MMERGE3');

  const choices = optionMatch === undefined ? [] : optionMatch.options.choices;

  return <EClubSection options={choices} />;
};

export default EClub;
