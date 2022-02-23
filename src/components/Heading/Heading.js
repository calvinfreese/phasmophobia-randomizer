import React from "react";
import  styled  from 'styled-components';
import { Link } from "react-router-dom";
import { Button } from '../Button/Button';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 60px;
    margin-top: 30px;
    margin-bottom: 30px;
`

const TitleContainer = styled.div`
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 60px;
    color: #E0EAF0;
`
const Subtitle = styled.p`
    font-size: 1.25em;
    margin: 0;
`

const Title = styled.p`
    font-size: 3em;
    margin: 0;
`

const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 9px 10px;
`

export const Heading = () => {
    return (
        <FlexContainer>
           <TitleContainer>
               <Link to="/">
                <Title>Phasmophilia</Title>
                <Subtitle>your friendly ghost hunting companion</Subtitle>
               </Link>
           </TitleContainer>
           <NavItemContainer>
                <Link to="/locations"><Button>Locations</Button></Link>
                <Link to="/ghosts"><Button>Ghosts</Button></Link>
                <Link to="/equipment"><Button >Equipment</Button></Link>
           </NavItemContainer>
        </FlexContainer>
    )
}