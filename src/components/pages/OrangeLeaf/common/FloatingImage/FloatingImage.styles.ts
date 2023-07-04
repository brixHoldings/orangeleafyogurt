import styled from 'styled-components';

type ImageOuterWrapperProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  hideUnder?: number;
};

type ImageWrapperProps = {
  height: string;
  width: string;
};

export const ImageOuterWrapper = styled.div<ImageOuterWrapperProps>`
  pointer-events: none;
  ${({ left, top, right, bottom }): string | undefined => (left || top || right || bottom) && `position: absolute;`}
  ${({ left, top }): string | undefined =>
    left &&
    top &&
    `
    left:0;
    top: 0;
    transform: translate(${left}, ${top});
  `}
  ${({ right, top }): string | undefined =>
    right &&
    top &&
    `
    right:0;
    top: 0;
    transform: translate(${right}, ${top});
  `}
  ${({ right, bottom }): string | undefined =>
    right &&
    bottom &&
    `
    right:0;
    bottom: 0;
    transform: translate(${right}, ${bottom});
  `}
  ${({ left, bottom }): string | undefined =>
    left &&
    bottom &&
    `
    left:0;
    bottom: 0;
    transform: translate(${left}, ${bottom});
  `}
  ${({ hideUnder }): string | null =>
    hideUnder === undefined
      ? null
      : `@media only screen and (max-width:  ${hideUnder}px) {
          display: none;
        `}
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
  position: relative;
`;
