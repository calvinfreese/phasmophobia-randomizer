import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { Button } from '../../components/Button/Button';
import { VerticalCard } from "../../components/Cards/VerticalCard";

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    color: #E0EAF0;
    height: 100%;
`
const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    color: #E0EAF0;
`

const MarginBox = styled(FlexColumn)`
    margin: 20px 0;
`
export const Locations = () => {
    const locations = [
        {
            key: 1, 
            name: "Asylum",
            content: {
                area: "Large", 
                floors: "2", 
                rooms: "111",
            }
        },
        {
            key: 2, 
            name: "Bleasedale Farmhouse", 
            content: {
                area: "Small", 
                floors: "3", 
                rooms: "16"
            }
        },
        {
            key: 3, 
            name: "Brownstone Highschool", 
            content: {
                area: "Medium", 
                floors: "2", 
                rooms: "58"
            }
        },
        {
            key: 4, 
            name: "Edgefield Street House",
            content: {
                area: "Small", 
                floors: "3", 
                rooms: "16"
            }

        },
    ];

    const [randomizedLocation, setRandomizedLocation] = useState()
    const [counter, setCounter] = useState(0);
    const [previousLocations, setPreviousLocations] = useState([]);
    const [previousSuggestion, setPreviousSuggestion ] = useState('');

    const handleRandomize = () => {
        const randomLocation = Math.floor(Math.random() * locations.length)
        setRandomizedLocation(locations[randomLocation])
        
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
    console.log(locations)

    return (
        <FlexColumn>LOCATION PAGE!
            <MarginBox>
                {
                    randomizedLocation?.name ? <VerticalCard title={randomizedLocation.name} content={randomizedLocation.content} /> : <VerticalCard title="?" content={{area: "?", floors: "?", rooms: "?"}} />
                }
                
                <Button onClick={() => handleRandomize()}>Draw a location card</Button>
            </MarginBox>
            <MarginBox>
                <FlexRow>
                    {locations &&
                        locations.map(location => <VerticalCard key={location.key} title={location.name} content={location.content}/>)
                    }
                </FlexRow>
            </MarginBox>
        </FlexColumn>
    )
}