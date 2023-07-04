'use client';

import { Container, ChildContainer, PillShape } from './Pill.styles';

import type { FC, ReactNode } from 'react';

const Pill: FC<{ children: ReactNode }> = ({ children }) => (
  <Container>
    <PillShape />
    <ChildContainer>{children}</ChildContainer>
  </Container>
);

export default Pill;
