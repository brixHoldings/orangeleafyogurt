import styled, { keyframes } from 'styled-components';

const animation = keyframes`
 0% {
      stroke-dasharray: 1100;
      stroke-dashoffset: 1100;
  }
  50% {
      stroke-dasharray: 1100;
      stroke-dashoffset: 0;
  }
  100% {
      stroke-dasharray: 1100;
      stroke-dashoffset: 1100;
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  z-index: 10000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  animation: ${animation} 2s linear forwards infinite;
`;
