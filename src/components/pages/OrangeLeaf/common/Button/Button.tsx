import { ButtonContainer } from './Button.styles';

import type { FC, MouseEventHandler } from 'react';

import type { ButtonContainerProps } from './Button.styles';

type ButtonProps = ButtonContainerProps & {
  isDisabled?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
};

const Button: FC<ButtonProps> = ({
  isFullWidth = false,
  isDisabled = false,
  onClick,
  label,
  size = 'm',
  variant = 'primary',
  type = 'button',
  ...rest
}) => (
  <ButtonContainer
    disabled={isDisabled}
    isFullWidth={isFullWidth}
    onClick={onClick}
    size={size}
    type={type}
    variant={variant}
    {...rest}
  >
    {label}
  </ButtonContainer>
);

export default Button;
