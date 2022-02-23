import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 30px;
    padding: 10px 20px 5px;
    border: 2px solid #E0EAF0;
    cursor: pointer;
    background-color: transparent;
    color: #E0EAF0;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 20px;
    font-family: Special Elite;
    margin: 0 15px;  
    &:hover {
        background: rgba(97, 153, 190, 0.3);
    }
`

export const Button = ({ onClick, children }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}