import React from "react";
import styled from 'styled-components';
import { StyledCardHover } from "./common/common";

const GradientOverlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(50% 50% at 50% 50%, rgba(18, 32, 43, 0.4) 0%, rgba(18, 32, 43, 0) 100%);
`
const StyledImg = styled.div`
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 5px rgba(163, 196, 219, 0.4)) drop-shadow(0px 0px 20px rgba(97, 153, 190, 0.4));
    border-radius: 30px;
`
const CardTitle = styled.p`
    color: #E0EAF0;
    font-family: Special Elite;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
`

export const HomeCard = ({ title, imgUrl }) => {
    return (
            <StyledCardHover>
                <StyledImg style={{ background: `url(${imgUrl})`}}>
                    <GradientOverlay>
                        <CardTitle>{title}</CardTitle>                    
                    </GradientOverlay>
                </StyledImg>
            </StyledCardHover>
    )
}
