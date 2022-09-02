import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-family: monospace;
  font-size: 18px;
  font-weight: bold;
  color: maroon;
`;

export const Card = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
