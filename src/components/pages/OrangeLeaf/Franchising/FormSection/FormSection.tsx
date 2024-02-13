'use client';
import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import Button from '@components/pages/OrangeLeaf/common/Button';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import type { FieldValues } from 'react-hook-form';

import { CtaText, Form, FormLabel, InputField, Card, Row, Field } from './FormSection.styles';

import type { FC, FormEventHandler } from 'react';

const FormSection: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { width } = useWindowSize();
  const isSmallScreen = useMemo(() => (width ? width < theme.breakpoints.smallScreen : false), [width]);

  const onSubmit = useCallback(
    (formData: FieldValues) => {
      setIsSent(true);
      setIsDisabled(true);

      void fetch('/api/form?brand=ol', {
        body: JSON.stringify(formData),
        method: 'post',
      }).finally(() => {
        reset();
        setIsDisabled(false);
      });
    },
    [reset],
  );

  return (
    <Card>
      {isSent ? (
        <CtaText>
          <div style={{ fontFamily: 'inherit', margin: '518.5px 0', textAlign: 'center' }}>
            Thank you for contacting us!
            <br />
            We&apos;ll get in touch as soon as possible.
          </div>
        </CtaText>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit) as FormEventHandler}>
          {isSmallScreen && (
            <CtaText>
              Contact us to learn more about available franchise opportunities with Orange Leaf Frozen Yogurt!
            </CtaText>
          )}
          <Row>
            <Field>
              <FormLabel>First name*:</FormLabel>
              <InputField
                {...register('firstName', { required: true })}
                disabled={isDisabled}
                placeholder="First name"
              />
              {errors.firstName?.type === 'required' && 'First name is required'}
            </Field>
            <Field>
              <FormLabel>Last name*:</FormLabel>
              <InputField {...register('lastName', { required: true })} disabled={isDisabled} placeholder="Last name" />
              {errors.lastName?.type === 'required' && 'Last name is required'}
            </Field>
          </Row>
          <Row>
            <Field>
              <FormLabel>City*:</FormLabel>
              <InputField {...register('city', { required: true })} disabled={isDisabled} placeholder="City" />
              {errors.city?.type === 'required' && 'City is required'}
            </Field>
            <Field>
              <FormLabel>State*:</FormLabel>
              <InputField {...register('state', { required: true })} disabled={isDisabled} placeholder="State" />
              {errors.state?.type === 'required' && 'State is required'}
            </Field>
            <Field>
              <FormLabel>ZIP*:</FormLabel>
              <InputField {...register('zip', { required: true })} disabled={isDisabled} placeholder="ZIP" />
              {errors.zip?.type === 'required' && 'ZIP is required'}
            </Field>
          </Row>
          <Row>
            <Field>
              <FormLabel>E-mail*:</FormLabel>
              <InputField
                {...register('email', { required: true })}
                disabled={isDisabled}
                placeholder="example@mail.com"
              />
              {errors.email?.type === 'required' && 'E-mail is required'}
            </Field>
            <Field>
              <FormLabel>Phone number*:</FormLabel>
              <InputField {...register('phone', { required: true })} disabled={isDisabled} placeholder="555 123 3456" />
              {errors.phone?.type === 'required' && 'Phone number is required'}
            </Field>
          </Row>
          <Row>
            <Field>
              <FormLabel>Best time to contact*:</FormLabel>
              <InputField {...register('contactTime', { required: true })} disabled={isDisabled} placeholder="17:00" />
              {errors.contactTime?.type === 'required' && 'Best time to contact is required'}
            </Field>
            <Field>
              <FormLabel>Cash Available for Investment*:</FormLabel>
              <InputField {...register('cash', { required: true })} disabled={isDisabled} placeholder="15,000" />
              {errors.cash?.type === 'required' && 'Cash Available for Investment is required'}
            </Field>
          </Row>
          <Button
            isDisabled={isDisabled}
            label="Send"
            type="submit"
            style={{ maxWidth: '318px', width: '100%', marginTop: '27px' }}
          />
        </Form>
      )}
    </Card>
  );
};

export default FormSection;
