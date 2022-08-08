import React from 'react';
import Body from "../body/Body";
import SideBar from "../sideBar/SideBar";
import styled from "styled-components";
const BodyDiv=styled.div `
display:flex;
flex-direction:row;
`
function Home() {
    return (
        <div>
            <BodyDiv>
                <Body />
            </BodyDiv>
        </div>
    )
}

export default Home
