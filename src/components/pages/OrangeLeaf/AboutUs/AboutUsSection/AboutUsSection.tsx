'use client';
import { string, object } from 'yup';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';

import FormButton from '@components/pages/OrangeLeaf/common/Button';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  GreenCircle,
  GreenCircleRelativeWrapper,
  WeAreExperienceSection,
  WeAreExperienceText,
  WeAreExperienceTitle,
  FloatingHeaderImage,
  RelativeWrapper,
  SmallGreenCircle,
  OurPurposeSection,
  TextWrapper,
  OurPurposeTitle,
  OurPurposeText,
  FloatingGummyWorms,
  BigTitle,
  WeAreHereSection,
  LeftColumn,
  RightColumn,
  Banners,
  Banner,
  BannersMaxWidthWrapper,
  BannerTitle,
  BannerText,
  FloatingCreamImage,
  Form,
  FormTitle,
  Paper,
  InputWrapper,
  TextAreaInput,
  FloatingGummyWormsImage,
  MeetOurTeam,
  FormBg,
  Error,
  LottyWrapper,
  FormLottyWrapper,
  LottieRotatingWords,
  MeetOurTeamTitle,
} from './AboutUsSection.style';

import { Input, Label } from '../../EClub/EClubSection/EClubSection.style';
import FloatingImage from '../../common/FloatingImage/FloatingImage';
import SuccessfulSubmit from '../../common/SuccessfulSubmit/SuccessfulSubmit';
import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';

import sloganRotate from '../../../../../../public/lottie/slogan-rotate.json';
import wave1 from '../../../../../../public/lottie/wave1.json';
import { AboutUsPageSlice } from 'prismicio-types';
import Button from '@components/pages/OrangeLeaf/common/Button';
import Link from 'next/link';

type AboutUsFormData = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

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

const AboutUsSection: FC<{ slice: AboutUsPageSlice }> = ({
  slice: {
    primary: {
      header_title,
      header_text,
      section_title,
      section_text,
      section_2_title,
      banner_1_title,
      banner_1_text,
      banner_2_title,
      banner_2_text,
      banner_3_title,
      banner_3_text,
      form_title,
      join_us_button,
      join_us_text,
      join_us_title,
    },
  },
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<AboutUsFormData>({
    resolver: yupResolver(schema),
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useCallback(
    async (formData: FieldValues) => {
      setIsDisabled(true);

      try {
        await fetch('/api/about-us', {
          body: JSON.stringify(formData),
          method: 'post',
        });
        setIsSubmitted(true);
        reset();
        // eslint-disable-next-line no-empty
      } catch (e: unknown) {
      } finally {
        setIsDisabled(false);
      }
    },
    [reset],
  );

  return (
    <>
      <WeAreExperienceSection>
        <GreenCircle>
          <GreenCircleRelativeWrapper>
            <LottieRotatingWords>
              <Lottie animationData={sloganRotate} />
            </LottieRotatingWords>
            <FloatingHeaderImage
              alt="green cup"
              height="clamp(351px, 51.58vw, 780px)"
              src="/images/slice166.png"
              top="0"
              width="clamp(259px,38.16vw, 577px)"
              priority
            />
          </GreenCircleRelativeWrapper>
        </GreenCircle>
        <SmallGreenCircle>
          <FloatingHeaderImage
            alt="green cup"
            height="clamp(145px, 24.93vw, 377px)"
            src="/images/White_frosting_splash_topdown.png"
            top="0"
            width="clamp(151px,25.79vw, 390px)"
          />
        </SmallGreenCircle>
        <RelativeWrapper>
          <WeAreExperienceTitle dangerouslySetInnerHTML={{ __html: header_title as string }}></WeAreExperienceTitle>
          <WeAreExperienceText dangerouslySetInnerHTML={{ __html: header_text as string }}></WeAreExperienceText>
        </RelativeWrapper>
      </WeAreExperienceSection>
      <OurPurposeSection>
        <LottyWrapper>
          <Lottie animationData={wave1} />
        </LottyWrapper>
        <FloatingGummyWorms
          alt="gummy worms"
          height="clamp(443px, 14.74vw, 555px)"
          right="0"
          src="/images/GummyWormsTopdown.png"
          top="-34%"
          width="clamp(131px, 14.74vw, 390px)"
        />
        <FloatingImage
          alt="green frosting"
          bottom="12%"
          height="clamp(178px, 14.74vw, 527px)"
          left="17%"
          src="/images/GreenFrosting.png"
          width="clamp(104px, 14.74vw, 307px)"
        />
        <TextWrapper>
          <OurPurposeTitle dangerouslySetInnerHTML={{ __html: section_title as string }}></OurPurposeTitle>
          <OurPurposeText dangerouslySetInnerHTML={{ __html: section_text as string }}></OurPurposeText>
        </TextWrapper>
      </OurPurposeSection>
      <BigTitle dangerouslySetInnerHTML={{ __html: section_2_title as string }}></BigTitle>
      <WeAreHereSection>
        <LeftColumn>
          <Image alt="orange-leaf" src="/images/orange-leaf.jpg" style={{ objectFit: 'cover' }} fill />
        </LeftColumn>
        <RightColumn>
          <Image alt="vide-bg" src="/images/orange-leaf-crew.jpg" style={{ objectFit: 'cover' }} fill />
        </RightColumn>
      </WeAreHereSection>
      <BannersMaxWidthWrapper>
        <Banners>
          <Banner
            background="linear-gradient(180deg, #A4D55D 0%, rgba(164, 213, 93, 0.00) 100%)"
            paddingBottom="clamp(102px,9.25vw, 140px)"
          >
            <FloatingCreamImage
              alt="cream"
              height="clamp(172px, 22.55vw, 341px)"
              left="10%"
              src="/images/cream.png"
              top="10%"
              width="clamp(132px,17.269vw, 261px)"
            />
            <BannerTitle dangerouslySetInnerHTML={{ __html: banner_1_title as string }}></BannerTitle>
            <BannerText dangerouslySetInnerHTML={{ __html: banner_1_text as string }}></BannerText>
          </Banner>
          <Banner
            background="linear-gradient(180deg, #FFDB31 0%, rgba(255, 219, 49, 0) 100%)"
            paddingBottom="clamp(120px, 10.38vw, 157px)"
          >
            <BannerTitle dangerouslySetInnerHTML={{ __html: banner_2_title as string }}></BannerTitle>
            <BannerText dangerouslySetInnerHTML={{ __html: banner_2_text as string }}></BannerText>
          </Banner>
          <Banner
            background="linear-gradient(180deg, #FF8A0C 0%, rgba(255, 152, 40, 0) 109.05%)"
            paddingBottom="clamp(120px, 14.88vw, 225px)"
          >
            <BannerTitle dangerouslySetInnerHTML={{ __html: banner_3_title as string }}></BannerTitle>
            <BannerText dangerouslySetInnerHTML={{ __html: banner_3_text as string }}></BannerText>
          </Banner>
        </Banners>
      </BannersMaxWidthWrapper>
      <FormBg>
        <FormLottyWrapper>
          <Lottie animationData={wave1} />
        </FormLottyWrapper>
        <FloatingImage
          alt="text"
          height="clamp(137px, 18.98vw, 287px)"
          left="16%"
          src="/images/White_frosting_splash_topdown.png"
          style={{ zIndex: 1 }}
          top="-67%"
          width="clamp(148px,20.50vw, 310px)"
        />
        <Paper id="contact-us">
          <FloatingGummyWormsImage
            alt="text"
            height=" 116px"
            right="2%"
            src="/images/image28.png"
            style={{ zIndex: 1 }}
            top="-80%"
            width="395px"
          />
          <FormTitle dangerouslySetInnerHTML={{ __html: form_title as string }}></FormTitle>
          {isSubmitted ? (
            <SuccessfulSubmit />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit) as FormEventHandler}>
              <InputWrapper>
                <Label htmlFor="firstName">Your first name*:</Label>
                <Input
                  data-has-error={Boolean(errors.firstName)}
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
                  data-has-error={Boolean(errors.lastName)}
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
                  data-has-error={Boolean(errors.email)}
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
                  data-has-error={Boolean(errors.phone)}
                  id="phone"
                  placeholder="Phone Number"
                  {...register('phone', { required: true })}
                  disabled={isDisabled}
                />
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </InputWrapper>
              <InputWrapper stretch>
                <Label htmlFor="message">Add your message:</Label>
                <TextAreaInput
                  data-has-error={Boolean(errors.message)}
                  id="message"
                  placeholder="Add your message here."
                  {...register('message', { required: true })}
                  disabled={isDisabled}
                />
                {errors.message && <Error>{errors.message.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <FormButton isDisabled={isDisabled} label="Submit" size="s" type="submit" isFullWidth />
              </InputWrapper>
            </Form>
          )}
        </Paper>
      </FormBg>
      <MeetOurTeam>
        <MeetOurTeamTitle dangerouslySetInnerHTML={{ __html: join_us_title as string }}></MeetOurTeamTitle>
        <WeAreExperienceText dangerouslySetInnerHTML={{ __html: join_us_text as string }}></WeAreExperienceText>
        <Link
          href="/careers"
          style={{
            maxWidth: '410px',
            width: '100%',
          }}
        >
          <Button
            label={join_us_button as string}
            style={{ backgroundColor: '#77BC1F', border: '2px solid #77BC1F', marginBottom: '40px', width: '100%' }}
          ></Button>
        </Link>
      </MeetOurTeam>
    </>
  );
};

export default AboutUsSection;
