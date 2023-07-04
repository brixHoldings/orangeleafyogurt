/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { string, object } from 'yup';
import { NextResponse } from 'next/server';

import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import type { NextRequest } from 'next/server';

const schema = object({
  birthday: string().required('This field is obligatory'),
  email: string().email('Add a valid email').required('This field is obligatory'),
  favoriteLocation: string().required('This field is obligatory'),
  firstName: string().required('This field is obligatory'),
  lastName: string().required('This field is obligatory'),
  phone: string().required('This field is obligatory').test({
    message: 'Add a valid phone number',
    name: 'valid',
    test: validatePhoneNumber,
  }),
}).required();

type ResponseData = {
  email: string;
  lastName: string;
  firstName: string;
  phone: string;
  favoriteLocation: string;
  birthday: string;
};

export const POST = async (request: NextRequest): Promise<Response> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = (await request.json()) as ResponseData;

  if (!(await schema.isValid(body))) {
    return new NextResponse('Invalid form data', { status: 400 });
  }

  const data = {
    members: [
      {
        email_address: body.email,
        merge_fields: {
          BIRTHDAY: body.birthday,
          FNAME: body.firstName,
          LNAME: body.lastName,
          MMERGE3: body.favoriteLocation,
          PHONE: body.phone,
        },
        status: 'subscribed',
      },
    ],
  };

  try {
    await fetch('https://us21.api.mailchimp.com/3.0/lists/6ba144ea7f', {
      body: JSON.stringify(data),
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY}`,
      },
      method: 'POST',
    });

    return new NextResponse('OK', { status: 200 });
  } catch (e: unknown) {
    return new NextResponse('Internal Error', { status: 500 });
  }
};
