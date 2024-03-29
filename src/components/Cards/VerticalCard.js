import React from 'react';
import styled from 'styled-components';
import { StyledCard } from './common/common';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  color: #e0eaf0;
  height: 100%;
`;

const ImageBox = styled.div`
  height: 168px;
  width: 300px;
  border-left: 2px solid #6199be;
  border-right: 2px solid #6199be;
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  background-color: #12202b;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentBox = styled.div`
  height: 280px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.p`
  color: #bbd6e8;
  font-size: 1.5em;
  line-height: 24px;
  text-align: center;
  margin: 0;
  padding-bottom: 0;
`;

export const VerticalCard = ({ title, imgUrl, children }) => {
  console.log(imgUrl, title);
  return (
    <StyledCard>
      <FlexColumn>
        <ImageBox style={{ backgroundImage: `url(${imgUrl})` }} />

        <ContentBox>
          <div style={{ height: '55px', marginTop: '20px' }}>
            <StyledTitle>{title}</StyledTitle>
          </div>
          {children}
        </ContentBox>
      </FlexColumn>
    </StyledCard>
  );
};
