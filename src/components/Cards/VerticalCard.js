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
    
`

const ImageBox = styled.div`
    height: 170px;
    width: 300px;
    border: 2px solid #6199BE;
    border-bottom: 2px solid #030B10;
    border-radius: 30px 30px 0 0;
    box-sizing: border-box;
    background-color: #12202B;
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
    margin-top: 15px;
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 175px;
`

const Bubble = styled.button`
    border-radius: 30px;
    padding: 10px 10px 5px;
    border: 2px solid #E0EAF0;
    background-color: transparent;
    color: #E0EAF0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 16px;
    font-family: Special Elite;

`

export const VerticalCard = ({title, imgUrl, content}) => {
   
    return (
    <StyledCard>
        <FlexColumn>
            <ImageBox>
                <p>img</p>
            </ImageBox>
            <ContentBox>
                <StyledTitle>{title}</StyledTitle>
                <Content><p>Area</p><Bubble>{content?.area || ""}</Bubble></Content>
                <Content><p>Floors</p><Bubble>{content?.floors || ""}</Bubble></Content>
                <Content><p>Rooms</p><Bubble>{content?.rooms || ""}</Bubble></Content>
            </ContentBox>
        </FlexColumn>
    </StyledCard>
    )
}
