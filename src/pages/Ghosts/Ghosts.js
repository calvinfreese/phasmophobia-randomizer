import React, { useEffect } from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: #e0eaf0;
`;
export const Ghosts = () => {
  useEffect(() => {
    document.title = 'Phasmophilia 👻 | Locations';
  }, []);

  return (
    <FlexContainer>
      <h2>Ghosts PAGE!</h2>
      <p>more to come...</p>
    </FlexContainer>
  );
};
