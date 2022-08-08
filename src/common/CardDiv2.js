import React from 'react';
import styled from "styled-components";
const Card = styled.div`
display:flex;
flex-direction:column;
border-radius:8px;
margin:10px;
width:100%;
height:280px;
`
const Detail = styled.div`
text-align:center;
`
const CardImage = styled.img`
border-radius:10px;
width:98%;
height:160%;
margin-top:200px;
`;
function CardDiv2(props) {
    return (
        <div>
            <Card>
                <CardImage src={props.image} />
            </Card>
        </div>
    )
}

export default CardDiv2;
