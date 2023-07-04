import styled, { css } from 'styled-components';

import type { CSSProp } from 'styled-components';

export type ButtonContainerProps = {
  isFullWidth?: boolean;
  size?: 'm' | 's';
  variant?: 'outlined-secondary' | 'primary' | 'secondary';
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  font-family: 'Lucida Grande';
  font-size: 16px;
  line-height: 15px;
  text-transform: uppercase;
  width: fit-content;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);

  ${({ isFullWidth = false }): CSSProp => {
    if (isFullWidth) {
      return css`
        width: 100%;
      `;
    }

    return css``;
  }}

  ${({ variant = 'primary' }): CSSProp => {
    if (variant === 'outlined-secondary') {
      return css`
        background: transparent;
        border-color: #ffffff;
        color: #ffffff;
      `;
    }

    if (variant === 'secondary') {
      return css`
        background: #ffffff;
        border-color: #ffffff;
        color: #f69f24;
      `;
    }

    return css`
      background: #f69f24;
      border-color: #f69f24;
      color: #ffffff;
    `;
  }};

  ${({ size = 'm' }): CSSProp => {
    if (size === 's') {
      return css`
        padding: 16px 28px;
      `;
    }

    return css`
      padding: 20px 48px;
    `;
  }};
`;
