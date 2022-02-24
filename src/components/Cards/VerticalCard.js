import React from 'react';
import styled from 'styled-components';
import { StyledCard } from './common/common';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    color: #E0EAF0;
    height: 100%;
`

const ImageBox = styled.div`
    height: 170px;
    width: 300px;
    border: 2px solid #6199BE;
    border-bottom: 2px solid #030B10;
    border-radius: 30px 30px 0 0;
    box-sizing: border-box;
    background-color: #12202B;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const ContentBox = styled.div`
    height: 280px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const StyledTitle = styled.p`
    color: #BBD6E8;
    font-size: 1.5em;
    line-height: 24px;
    text-align: center;
    margin: 0;
    padding-bottom: 0;
`

export const VerticalCard = ({title, imgUrl, children}) => {
    console.log(imgUrl, title)
    return (
    <StyledCard>
        <FlexColumn>
            <ImageBox style={{ backgroundImage: `url(${imgUrl})`}} />
        
            <ContentBox>
                <div style={{height: '55px', marginTop: '20px'}}>
                    <StyledTitle>{title}</StyledTitle>
                </div>
                {children}
            </ContentBox>
        </FlexColumn>
    </StyledCard>
    )
}
