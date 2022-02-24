import React, { useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { HomeCard } from "../../components/Cards/HomeCard"

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
`
const StyledText = styled.p`
    color: #BBD6E8;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    padding: 0 10px;
`
const FlexTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    width: 300px;
    height: 72px;
`
export const Home = () => {
    const otherPages = [
        {
            key: 1,
            title: "Locations",
            path: "/locations",
            imgUrl: "assets/images/locations/2-prison.png"
        },
        {
            key: 2,
            title: "Ghosts",
            path: "/ghosts",
            imgUrl: "assets/images/ghosts/0-ghost.png"

        },
        {
            key: 3,
            title: "Equipment",
            path: "/equipment",
            imgUrl: "assets/images/equipment/0-equipment.png"
        }
    ];

    const subtitles = [
        {
            key: 1,
            subtitle: "Haunted by indecision? Let fate decide your next hunt location."
        },
        {
            key: 2,
            subtitle: "Look up ghosts by their evidence, characteristics, and haunting styles."
        },
        {
            key: 3,
            subtitle: "Spice up your loadout with a randomly generated list of equipment."
        },
    ]

    useEffect(() => {
        document.title = 'Phasmophilia 👻 | Home'
    }, [])

    return (
        <>
            <FlexContainer>
                { otherPages && 
                    otherPages.map(page => <Link to={`${page.path}`}><HomeCard key={page.key} title={page.title} imgUrl={page.imgUrl}/></Link>)
                }
            </FlexContainer>
            <FlexContainer>
                { subtitles && 
                        subtitles.map(subtitle => { return (
                            <FlexTextContainer key={subtitle.key}>
                                <StyledText>
                                    {subtitle.subtitle}
                                </StyledText>
                            </FlexTextContainer>
                        )})
                }
            </FlexContainer>
        </>
    )
}