import React from 'react';
import styled from 'styled-components';
import { StyledCardHover } from './common/common';
import { Link } from 'react-router-dom';

const GradientOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(18, 32, 43, 0.4) 0%,
    rgba(18, 32, 43, 0) 100%
  );

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
  }
`;
const StyledImg = styled.div`
  height: 100%;
  width: 100%;
  filter: drop-shadow(0px 0px 5px rgba(163, 196, 219, 0.4))
    drop-shadow(0px 0px 20px rgba(97, 153, 190, 0.4));
  border-radius: 30px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const CardTitle = styled.p`
  color: #e0eaf0;
  font-family: Special Elite;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
`;
const StyledText = styled.p`
  color: #bbd6e8;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  width: 280px;
  word-break: break-word;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 600px;
  margin: 0 10px;
`;

export const HomeCard = ({ title, path, imgUrl, caption }) => {
  return (
    <Container>
      <Link to={path}>
        <StyledCardHover>
          <StyledImg style={{ background: `url(${imgUrl})` }}>
            <GradientOverlay>
              <CardTitle>{title}</CardTitle>
            </GradientOverlay>
          </StyledImg>
        </StyledCardHover>
      </Link>
      <StyledText>{caption}</StyledText>
    </Container>
  );
};
