import styled, { css } from 'styled-components';

import type { CSSProp } from 'styled-components';

interface ContainerProps {
  size?: string;
  isBlurred?: boolean;
}

export const ContentContainer = styled.div<ContainerProps>`
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(66, 27, 0, 0.25);

  ${({ isBlurred = false }): CSSProp => {
    if (isBlurred) {
      return css`
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(25px);
      `;
    }

    return css`
      background-color: white;
    `;
  }}

  ${({ size = 's' }): CSSProp => {
    if (size === 'm') {
      return css`
        padding: 92px 64px;
      `;
    }

    return css`
      padding: 48px 40px;
    `;
  }}
`;
