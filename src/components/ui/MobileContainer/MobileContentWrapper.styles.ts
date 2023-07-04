import styled from 'styled-components';
import theme from '@styles/theme';

export const MobileContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 0 25px;
  }
`;

export default MobileContainer;
