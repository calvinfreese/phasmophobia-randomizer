import styled from 'styled-components';

export const StyledCard = styled.div`
    border-radius: 30px;
    border: 2px solid #6199BE;
    box-sizing: border-box;
    margin: 20px;
    height: 450px;
    width: 300px;
    box-shadow: 0px 0px 5px rgba(163, 196, 219, 0.4), 0px 0px 20px rgba(97, 153, 190, 0.4);
`

export const StyledCardHover = styled(StyledCard)`
    cursor: pointer;
    &:hover {
        background:rgba(0,0,0,0.6);
        border: 2px solid #E0EAF0;
    }
`