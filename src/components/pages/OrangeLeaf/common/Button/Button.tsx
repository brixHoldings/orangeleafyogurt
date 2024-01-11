import { ButtonContainer } from './Button.styles';

import type { CSSProperties, FC, MouseEventHandler } from 'react';

import type { ButtonContainerProps } from './Button.styles';

type ButtonProps = ButtonContainerProps & {
  isDisabled?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  style?: CSSProperties;
};

const Button: FC<ButtonProps> = ({
  isFullWidth = false,
  isDisabled = false,
  onClick,
  label,
  size = 'm',
  variant = 'primary',
  type = 'button',
  style,
  ...rest
}) => (
  <ButtonContainer
    disabled={isDisabled}
    isFullWidth={isFullWidth}
    onClick={onClick}
    size={size}
    type={type}
    variant={variant}
    style={style}
    {...rest}
  >
    {label}
  </ButtonContainer>
);

export default Button;
