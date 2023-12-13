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

const EClubSection: FC<{ options: string[] }> = ({ options }) => {
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
          <Title>
            Join us and get
            <br /> deals and offers!
          </Title>
          <Paragraph>
            If you love frozen yogurt, you&apos;ll love the Orange Leaf e-club program! It&apos;s easy to join and
            you&apos;ll get amazing benefits like free froyo on your birthday, discounts on special holiday purchases,
            and access to exclusive offers. Don&apos;t miss this opportunity to swirl up your favorite flavors and
            toppings at a great value. Join the Orange Leaf e-club program today!
          </Paragraph>
          <a href="#form-bg">
            <Button>Join now</Button>
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
          <Title2>Get the best birthday gift!</Title2>
          <Paragraph>
            Do you love froyo? Do you want to treat yo&apos;self on your special day? Then join the Orange Leaf e-club
            today and get a free froyo on your birthday! All you have to do is sign up with your email address, provide
            your birthday, and we&apos;ll take care of the rest. Don&apos;t miss this sweet deal and get ready to
            celebrate with Orange Leaf!
          </Paragraph>
          <a href="#form-bg">
            <Button>Join now</Button>
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
            <StepLabel>Sign up</StepLabel>
          </NumberWrapper>
          <NumberWrapper>
            <Number color="#FFDB31">
              <span>2</span>
            </Number>
            <StepLabel>Wait for email</StepLabel>
          </NumberWrapper>
          <NumberWrapper>
            <Number color="#8BA726">
              <span>3</span>
            </Number>
            <StepLabel>Get deals and offers!</StepLabel>
          </NumberWrapper>
        </Steps>
      </MaxWidthWrapper>
      <FormBg id="form-bg">
        <Image alt="background" src="/images/terms-of-service-bg2.jpg" style={{ objectFit: 'cover' }} fill />
        <Paper>
          <FormColumn>
            <Title2>Join now and get deals and offers</Title2>
            <Paragraph data-should-hide="true">
              Join the Orange Leaf e-club for exclusive deals and offers, and updates on new flavors. It only takes a
              minute and you won&apos;t want to miss out!
            </Paragraph>
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
                  placeholder="MM/DD"
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
