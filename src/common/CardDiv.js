import React from 'react';
import styled from "styled-components";
const Card = styled.div`
display:flex;
flex-direction:column;
border-radius:8px;
margin:10px 0px 10px 74px;
width:320px;
height:280px;
`
const Detail = styled.div`
text-align:center;
`
const CardImage = styled.img`
border-radius:10px;
width:100%;
height:160%;
`;
function CardDiv(props) {
    return (
        <div>
            <Card>
                <CardImage src={props.image} />
            </Card>
        </div>
    )
}

export default CardDiv
