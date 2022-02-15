import React from "react";
import  styled  from 'styled-components';

const StyledHeading = styled.div`
width: 100%;
background-color: #01497C;
`

const StyledText = styled.h1`
color: white;
padding: 0 10px;
font-family: monospace;
`

export const Heading = () => {
    return (
        <StyledHeading>
            <StyledText>Phasmophobia Randomizer</StyledText>
        </StyledHeading>
    )
}