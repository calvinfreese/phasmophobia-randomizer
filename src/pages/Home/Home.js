import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card"
import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: beige;
`
const StyledButton = styled.button`
    border-radius: 8px;
    background-color: #01497C;
    color: #A9D6E5;
    font-size: 18px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    height: 50px;
    box-sizing: border-box;
    font-family: monospace;

    &:hover {
        background-color: #01243D;
    }
`

const SuggestionBox = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 40vw;
    float: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const ResultsBox = styled.div`
    float: right;
    height: 100vh;
    width: 40vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`
const StyledText = styled.p`
    font-family: monospace;
    font-size: 22px;
    font-weight: bold;
    margin: 30px 0 0 0;
    padding: 0;
    text-align: center;
`

const StyledLi = styled.li`
    font-family: monospace;
    font-size: 16px;
`


export const Home = () => {
    const locations = [
        "Asylum",
        "Bleasedale Farmhouse",
        "Brownstone Highschool",
        "Edgefield Street House",
        "Grafton Farmhouse",
        "Maple Lodge Campsite",
        "Prison",
        "Ridgeview Road House",
        "Tanglewood Street House",
        "Willow Street House"
    ]
    const [randomizedLocation, setRandomizedLocation] = useState('')
    const [counter, setCounter] = useState(0);
    const [previousLocations, setPreviousLocations] = useState([]);
    const [previousSuggestion, setPreviousSuggestion ] = useState('');

    const handleRandomize = () => {
        const randomLocation = Math.floor(Math.random() * locations.length)
        setRandomizedLocation(locations[randomLocation])
        setCounter(counter + 1);
        
    }

    useEffect(() => {
        console.log(previousLocations);
     
        if(counter > 0 ) {
            const locationArray = []

            setPreviousSuggestion(randomizedLocation);

            if(previousLocations.length > 0) {
                locationArray.push(previousLocations);
            } 
            
            locationArray.unshift(previousSuggestion);
            const flatLocationArray = locationArray.flat().slice(0,5);
            setPreviousLocations(flatLocationArray)

        }

    }, [counter])

    

    return (
        <HomePageContainer>
            <SuggestionBox>
                <StyledText>Current Suggestion:</StyledText>
                <Card>{randomizedLocation} </Card>
                <StyledButton type="button" onClick={handleRandomize}>Randomize Map</StyledButton>
                <div>
                    <StyledText>All Locations</StyledText>
                    <ul>
                    {locations.map(location => <StyledLi>{location}</StyledLi>)}
                    </ul>
                </div>
            </SuggestionBox>
            <ResultsBox>
                <StyledText> Previous Suggestions: </StyledText>
                {previousLocations.length > 0 && previousLocations.map(location => <Card> {location} </Card>)}
            </ResultsBox>
        </HomePageContainer>
    )
}