import React, { useEffect } from "react";
import styled from 'styled-components';


import { HomeCard } from "../../components/Cards/HomeCard"

const PageContainer = styled.div`
    max-width: 100%;
    box-sizing: border-box;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0px;
`
export const Home = () => {
    const otherPages = [
        {
            key: 1,
            title: "Locations",
            path: "/locations",
            imgUrl: "assets/images/locations/2-prison.png",
            caption: "Haunted by indecision? Let fate decide your next hunt location."
        
        },
        {
            key: 2,
            title: "Ghosts",
            path: "/ghosts",
            imgUrl: "assets/images/ghosts/0-ghost.png",
            caption: "Look up ghosts by their evidence, characteristics, and haunting styles."

        },
        {
            key: 3,
            title: "Equipment",
            path: "/equipment",
            imgUrl: "assets/images/equipment/0-equipment.png",
            caption: "Spice up your loadout with a randomly generated list of equipment."
        }
    ];

     useEffect(() => {
        document.title = 'Phasmophilia 👻 | Home'
    }, [])

    return (
        <PageContainer>
            <FlexContainer>
                { otherPages && 
                    otherPages.map(page => <HomeCard key={page.key} path={page.path} title={page.title} imgUrl={page.imgUrl} caption={page.caption}/>)
                }
            </FlexContainer>
        </PageContainer>
    )
}