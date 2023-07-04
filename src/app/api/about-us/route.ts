/* eslint-disable @typescript-eslint/no-unused-vars */
import sgMail from '@sendgrid/mail';

import { string, object } from 'yup';
import { NextResponse } from 'next/server';

import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import type { NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

const schema = object({
  email: string().email('Add a valid email').required('This field is obligatory'),
  firstName: string().required('This field is obligatory'),
  lastName: string().required('This field is obligatory'),
  message: string().required('This field is obligatory'),
  phone: string().required('This field is obligatory').test({
    message: 'Add a valid phone number',
    name: 'valid',
    test: validatePhoneNumber,
  }),
}).required();

type ResponseData = {
  email: string;
  lastName: string;
  phone: string;
  message: string;
  firstName: string;
};

export const POST = async (request: NextRequest): Promise<Response> => {
  const body = (await request.json()) as ResponseData;

  if (!(await schema.isValid(body))) {
    return new NextResponse('Invalid form data', { status: 400 });
  }

  const message = `
    Name: ${body.firstName} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
    Phone:  ${body.phone}
  `;

  try {
    await sgMail.send({
      from: 'info@orangeleafyogurt.com',
      html: message.replace(/\r\n/gu, '<br>'),
      subject: 'New Message!',
      text: message,
      to: 'info@orangeleafyogurt.com',
    });

    return new NextResponse('OK', { status: 200 });
  } catch (e: unknown) {
    return new NextResponse('Internal Error', { status: 500 });
  }
};
