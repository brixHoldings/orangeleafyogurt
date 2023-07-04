import { ContentContainer } from './Card.styles';

import type { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  isBlurred?: boolean;
  size?: 'm' | 's';
};

const Card: FC<CardProps> = ({ children, isBlurred = false, size = 's' }) => (
  <ContentContainer isBlurred={isBlurred} size={size}>
    {children}
  </ContentContainer>
);

export default Card;
