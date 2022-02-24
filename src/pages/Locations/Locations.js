import React, { useState } from "react";
import styled from 'styled-components';

import  locations  from '../../data/locations.json';

import { Button } from '../../components/Button/Button';
import { VerticalCard } from "../../components/Cards/VerticalCard";
import { ContentBubble } from "../../components/ContentBubble/ContentBubble";

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
    flex-wrap: wrap;
    align-items: center;
    padding: 0px;
    color: #E0EAF0;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 175px;`

const MarginBox = styled(FlexColumn)`
    margin: 20px 0;
`
export const Locations = () => {

    const [randomizedLocation, setRandomizedLocation] = useState()

    const handleRandomize = () => {
        const randomLocation = Math.floor(Math.random() * locations.length)
        if(locations[randomLocation] !== randomizedLocation) {
            setRandomizedLocation(locations[randomLocation])
        } else {
            handleRandomize();
        }
    }

    return (
        <FlexColumn>LOCATION PAGE!
            <MarginBox>
                {
                    randomizedLocation?.name ? (
                        <VerticalCard title={randomizedLocation.name}>                             
                            <Content>
                                <p>Area: </p>
                                <ContentBubble>{randomizedLocation.content.area}</ContentBubble>
                            </Content>
                            <Content>
                                <p>Floors: </p>
                                <ContentBubble>{randomizedLocation.content.floors}</ContentBubble>
                            </Content>
                            <Content>
                                <p>Rooms:</p>
                                <ContentBubble>{randomizedLocation.content.rooms}</ContentBubble>
                            </Content>
                        </VerticalCard>
                    ) : <VerticalCard title="?"/>
                }
                <Button onClick={() => handleRandomize()}>Draw a location card</Button>
            </MarginBox>
            <MarginBox>
                <FlexRow>
                    {locations &&
                        locations.map(location => <VerticalCard key={location.key} title={location.name}>
                            <Content>
                                <p>Area: </p>
                                <ContentBubble>{location.content.area}</ContentBubble>
                            </Content>
                            <Content>
                                <p>Floors: </p>
                                <ContentBubble>{location.content.floors}</ContentBubble>
                            </Content>
                            <Content>
                                <p>Rooms:</p>
                                <ContentBubble>{location.content.rooms}</ContentBubble>
                            </Content>
                        </VerticalCard>)
                    }
                </FlexRow>
            </MarginBox>
        </FlexColumn>
    )
}