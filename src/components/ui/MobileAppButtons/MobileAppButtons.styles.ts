import { styled } from 'styled-components';
import theme from '@styles/theme';

export const AppButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: ${theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 30px;
  }
`;
