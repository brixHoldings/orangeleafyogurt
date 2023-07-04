import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/pages/RedMango/Button';
import Card from '@components/ui/Card';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import type { FieldValues } from 'react-hook-form';

import {
  BackgroundContainer,
  CardContainer,
  Container,
  Content,
  ContentText,
  CtaText,
  Description,
  Disclaimer,
  Form,
  FormLabel,
  InputField,
  Title,
} from './FormSection.styles';

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

      void fetch('/api/form?brand=rm', {
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
    <>
      <BackgroundContainer>
        <Container>
          <Content>
            <ContentText>
              <Title>Let&apos;s talk!</Title>
              <Description>
                Red Mango is an established leader among frozen yogurt franchises, and we truly enjoy helping our
                franchisees build strong, successful businesses and make a positive impact in their local communities.
                In addition, the concept has expanded into the rapidly growing market for Smoothies and Fresh Juices and
                has also added salads, wraps, and other light and healthy foods to generate increased sales on a year
                round basis.
              </Description>

              {!isSmallScreen && (
                <CtaText>Contact us to learn more about available franchise opportunities with Red Mango!</CtaText>
              )}
            </ContentText>
            <CardContainer id="contact">
              <Card size="s">
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
                        Contact us to learn more about available franchise opportunities with Red Mango!
                      </CtaText>
                    )}
                    <FormLabel>First name*:</FormLabel>
                    <InputField
                      {...register('firstName', { required: true })}
                      disabled={isDisabled}
                      placeholder="First name"
                    />
                    {errors.firstName?.type === 'required' && 'First name is required'}

                    <FormLabel>Last name*:</FormLabel>
                    <InputField
                      {...register('lastName', { required: true })}
                      disabled={isDisabled}
                      placeholder="Last name"
                    />
                    {errors.lastName?.type === 'required' && 'Last name is required'}

                    <FormLabel>City*:</FormLabel>
                    <InputField {...register('city', { required: true })} disabled={isDisabled} placeholder="City" />
                    {errors.city?.type === 'required' && 'City is required'}

                    <FormLabel>State*:</FormLabel>
                    <InputField {...register('state', { required: true })} disabled={isDisabled} placeholder="State" />
                    {errors.state?.type === 'required' && 'State is required'}

                    <FormLabel>ZIP*:</FormLabel>
                    <InputField {...register('zip', { required: true })} disabled={isDisabled} placeholder="ZIP" />
                    {errors.zip?.type === 'required' && 'ZIP is required'}

                    <FormLabel>E-mail*:</FormLabel>
                    <InputField
                      {...register('email', { required: true })}
                      disabled={isDisabled}
                      placeholder="example@mail.com"
                    />
                    {errors.email?.type === 'required' && 'E-mail is required'}

                    <FormLabel>Phone number*:</FormLabel>
                    <InputField
                      {...register('phone', { required: true })}
                      disabled={isDisabled}
                      placeholder="555 123 3456"
                    />
                    {errors.phone?.type === 'required' && 'Phone number is required'}

                    <FormLabel>Best time to contact*:</FormLabel>
                    <InputField
                      {...register('contactTime', { required: true })}
                      disabled={isDisabled}
                      placeholder="17:00"
                    />
                    {errors.contactTime?.type === 'required' && 'Best time to contact is required'}

                    <FormLabel>Cash Available for Investment*:</FormLabel>
                    <InputField {...register('cash', { required: true })} disabled={isDisabled} placeholder="15,000" />
                    {errors.cash?.type === 'required' && 'Cash Available for Investment is required'}
                    <br />
                    <br />
                    <br />
                    <Button isDisabled={isDisabled} label="Send" type="submit" isFullWidth />
                  </Form>
                )}
              </Card>
            </CardContainer>
          </Content>
        </Container>
      </BackgroundContainer>
      <Disclaimer>
        This information is not intended as an offer to sell a franchise. We will not offer you a franchise until we
        have complied with disclosure and registration requirements in your jurisdiction. Contact Red Mango FC, LLC,
        located at 14860 Montfort Drive, Suite 150, Dallas, TX 75254, to request a copy of their FDD. RESIDENTS OF NEW
        YORK: This advertisement is not an offering. An offering can only be made by a prospectus filed first with the
        Department of Law of the State of New York. Such filing does not constitute approval by the New York Department
        of Law. RESIDENTS OF MINNESOTA: MN Franchise Registration Number: 10193. RESIDENTS OF FLORIDA: FL Advertising
        Number: BF47541.
      </Disclaimer>
    </>
  );
};

export default FormSection;
