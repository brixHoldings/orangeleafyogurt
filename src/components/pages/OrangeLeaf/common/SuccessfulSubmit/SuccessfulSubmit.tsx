import Image from 'next/image';

import { SubmittedForm, SuccessMessage } from './SuccessfulSubmit.style';

import type { FC } from 'react';

const SuccessfulSubmit: FC = () => (
  <SubmittedForm>
    <Image alt="envelope" height="32" src="/images/envelope-circle-check.svg" width="40" />
    <SuccessMessage>Thank you for your message! We’ll get back to you as soon as possible.</SuccessMessage>
  </SubmittedForm>
);

export default SuccessfulSubmit;
