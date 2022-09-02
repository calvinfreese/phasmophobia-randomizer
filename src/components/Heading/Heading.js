import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

const HeadingContainer = styled.div`
  height: 100%;
  padding-top: 25px;
  margin-bottom: 20px;
  padding-bottom: 50px;
`;
const PaddedDiv = styled.div`
    max-width: 1200px;
    margin 0 auto;

`;
const FlexContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Flex50 = styled.div`
  flex: 0 0 50%;
  flex-wrap: wrap;
  width: 50%;
  color: #e0eaf0;
  box-sizing: border-box;

  @media (max-width: 450px) {
    flex: 0 0 100%;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 450px) {
    text-align: center;
    padding: 0 5px;
  }
`;
const Subtitle = styled(Title)`
  font-size: 1.25rem;
`;

const NavItemContainer = styled.div`
  display: flex;

  justify-content: flex-end;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }

  @media (max-width: 450px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;

    a button {
      margin: 0;
    }
  }
`;

export const Heading = () => {
  return (
    <HeadingContainer>
      <PaddedDiv>
        <FlexContainer>
          <Flex50>
            <Link to="/">
              <Title>Phasmophilia</Title>
              <Subtitle>your friendly ghost hunting companion</Subtitle>
            </Link>
          </Flex50>

          <Flex50>
            <NavItemContainer>
              <Link to="/locations">
                <Button>Locations</Button>
              </Link>
              <Link to="/ghosts">
                <Button>Ghosts</Button>
              </Link>
              <Link to="/equipment">
                <Button>Equipment</Button>
              </Link>
            </NavItemContainer>
          </Flex50>
        </FlexContainer>
      </PaddedDiv>
    </HeadingContainer>
  );
};
