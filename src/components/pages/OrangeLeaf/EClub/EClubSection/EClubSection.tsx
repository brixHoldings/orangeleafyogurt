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
import { EClubPageSlice } from 'prismicio-types';

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
          <a href="#form-bg">
            <Button dangerouslySetInnerHTML={{ __html: header_button as string }}></Button>
          </a>
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
          <a href="#form-bg">
            <Button dangerouslySetInnerHTML={{ __html: section_button as string }}></Button>
          </a>
        </BirthdayContent>
      </BirthdayWrapper>
      <MaxWidthWrapper>
        <TitleCentered>How does it work?</TitleCentered>
        <Steps>
          <NumberWrapper>
            <Number color="#FF6034">
              <span>1</span>
            </Number>
            <StepLabel dangerouslySetInnerHTML={{ __html: step_1 as string }}></StepLabel>
          </NumberWrapper>
          <NumberWrapper>
            <Number color="#FFDB31">
              <span>2</span>
            </Number>
            <StepLabel dangerouslySetInnerHTML={{ __html: step_2 as string }}></StepLabel>
          </NumberWrapper>
          <NumberWrapper>
            <Number color="#8BA726">
              <span>3</span>
            </Number>
            <StepLabel dangerouslySetInnerHTML={{ __html: step_3 as string }}></StepLabel>
          </NumberWrapper>
        </Steps>
      </MaxWidthWrapper>
      <FormBg id="form-bg">
        <Image alt="background" src="/images/terms-of-service-bg2.jpg" style={{ objectFit: 'cover' }} fill />
        <Paper>
          <FormColumn>
            <Title2 dangerouslySetInnerHTML={{ __html: form_title as string }}></Title2>
            <Paragraph data-should-hide="true" dangerouslySetInnerHTML={{ __html: form_text as string }}></Paragraph>
          </FormColumn>
          {isSubmitted ? (
            <SuccessfulSubmit />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit) as FormEventHandler}>
              <InputWrapper>
                <Label htmlFor="firstName">Your first name*:</Label>
                <Input
                  data-has-error={Boolean(errors.lastName)}
                  id="firstName"
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                  disabled={isDisabled}
                />
                {errors.firstName && <Error>{errors.firstName.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="lastName">Your last name*:</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                  disabled={isDisabled}
                />
                {errors.lastName && <Error>{errors.lastName.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="email">Your email*:</Label>
                <Input
                  id="email"
                  placeholder="example@email.com"
                  {...register('email', { required: true })}
                  disabled={isDisabled}
                />
                {errors.email && <Error>{errors.email.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="phone">Your phone number*:</Label>
                <Input
                  id="phone"
                  placeholder="Phone Number"
                  {...register('phone', { required: true })}
                  disabled={isDisabled}
                />
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="birthday">Birthday:</Label>
                <Input
                  id="birthday"
                  placeholder="month/day/year"
                  {...register('birthday', { required: true })}
                  disabled={isDisabled}
                />
                {errors.birthday && <Error>{errors.birthday.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="favoriteLocation">Favorite location:</Label>
                <Select
                  id="favoriteLocation"
                  placeholder="Location"
                  required
                  {...register('favoriteLocation', { required: true })}
                  disabled={isDisabled}
                >
                  <option value="" disabled hidden selected>
                    Location
                  </option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
                {errors.favoriteLocation && <Error>{errors.favoriteLocation.message}</Error>}
              </InputWrapper>
              <FormButton isDisabled={isDisabled} label="Submit" size="m" type="submit" />
            </Form>
          )}
        </Paper>
      </FormBg>
    </FlexWrapper>
  );
};

export default EClubSection;
