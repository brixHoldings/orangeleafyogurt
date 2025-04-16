'use client';
import { string, object } from 'yup';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import FormButton from '@components/pages/OrangeLeaf/common/Button';
import { MaxWidthWrapper } from '@styles/common';
import { validatePhoneNumber } from '@utils/validatePhoneNumber';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  StyledFloatingImage,
  HeaderBox,
  FlexWrapper,
  YellowBg,
  Title,
  Paragraph,
  Button,
  BirthdayWrapper,
  BirthdayContent,
  TitleCentered,
  Title2,
  Steps,
  Number,
  NumberWrapper,
  StepLabel,
  FormBg,
  Paper,
  FormColumn,
  Input,
  InputWrapper,
  Label,
  Form,
  YellowBar,
  StyledFloatingBirthdayCakes,
  FloatingSmudgeImage,
  Select,
} from './EClubSection.style';

import { Error } from '../../AboutUs/AboutUsSection/AboutUsSection.style';
import FloatingImage from '../../common/FloatingImage/FloatingImage';
import SuccessfulSubmit from '../../common/SuccessfulSubmit/SuccessfulSubmit';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';
import { validateDateFormat } from '@utils/validateDateFormat';
import { EClubPageSlice } from 'prismicio-types';
import MobileAppButtons from '@components/ui/MobileAppButtons/MobileAppButtons';

type EClubFormData = {
  birthday: string;
  email: string;
  favoriteLocation: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

export const eClubFormSchema = object({
  birthday: string().required('This field is obligatory').test({
    message: 'Birthday must be in MM/DD format',
    name: 'valid',
    test: validateDateFormat,
  }),
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

const EClubSection: FC<{ options: string[]; slice: EClubPageSlice }> = ({
  options,
  slice: {
    primary: {
      header_title,
      header_text,
      header_button,
      section_title,
      section_text,
      section_button,
      step_1,
      step_2,
      step_3,
      form_title,
      form_text,
    },
  },
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<EClubFormData>({
    resolver: yupResolver(eClubFormSchema),
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useCallback(
    async (formData: FieldValues) => {
      setIsDisabled(true);

      try {
        const { status } = await fetch('/api/e-club', {
          body: JSON.stringify(formData),
          method: 'post',
        });

        if (status === 200) {
          setIsSubmitted(true);
          reset();
        }

        // eslint-disable-next-line no-empty
      } catch (e: unknown) {
      } finally {
        setIsDisabled(false);
      }
    },
    [reset],
  );

  return (
    <FlexWrapper>
      <StyledFloatingImage
        alt="background"
        height="clamp(534px, 79.49vw, 1202px)"
        right="min(0px, 0px)"
        src="/images/e-club-header-bg22.jpg"
        style={{ zIndex: -2 }}
        top="0"
        width="min(100vw, 933px)"
        priority
        renderInBody
      />
      <YellowBar />
      <StyledFloatingBirthdayCakes
        alt="background"
        height="clamp(343px, 62.16vw, 940px)"
        left="-12.56vw"
        src="/images/birthdayCakes.jpg"
        top="clamp(566px, 86.70vw, 1311px)"
        width="clamp(343px, 62.16vw, 940px)"
        renderInBody
      />

      <HeaderBox>
        <YellowBg>
          <Title dangerouslySetInnerHTML={{ __html: header_title as string }}></Title>
          <Paragraph dangerouslySetInnerHTML={{ __html: header_text as string }}></Paragraph>
          <MobileAppButtons />
          <FloatingImage
            alt="circle"
            bottom="calc(clamp(72px, 12.43vw, 188px) / 2)"
            height="clamp(72px, 12.43vw, 188px)"
            right="clamp(-43px, -5.48vw, -83px)"
            src="/images/Rewards.svg"
            width="clamp(72px, 12.43vw, 188px)"
          />
        </YellowBg>
      </HeaderBox>
      <BirthdayWrapper>
        <FloatingSmudgeImage
          alt="background"
          height="clamp(133px, 62.16vw, 413px)"
          right="34%"
          src="/images/White_frosting_splash_topdown.png"
          style={{ zIndex: -2 }}
          top="90%"
          width="clamp(133px, 62.16vw, 413px)"
        />
        <BirthdayContent>
          <Title2 dangerouslySetInnerHTML={{ __html: section_title as string }}></Title2>
          <Paragraph dangerouslySetInnerHTML={{ __html: section_text as string }}></Paragraph>
          <MobileAppButtons />
        </BirthdayContent>
      </BirthdayWrapper>

      <FormBg id="form-bg">
        <Image alt="background" src="/images/terms-of-service-bg2.jpg" style={{ objectFit: 'cover' }} fill />
      </FormBg>
    </FlexWrapper>
  );
};

export default EClubSection;
