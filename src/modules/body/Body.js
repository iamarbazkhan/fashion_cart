import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import image1 from "../../static/images/tshirt1.jpg"
import image2 from "../../static/images/tshirt2.jpg"
import image3 from "../../static/images/tshirt3.jpg"
import image4 from "../../static/images/tshirt4.jpg"
import CardDiv from '../../common/CardDiv';
import CardDiv2 from '../../common/CardDiv2';
const GridDiv=styled.div `
display:flex;
flex-direction:row;
`;
const BodyDiv = styled.div`
display:flex;
flex-direction:column;
`
function Body() {
    console.log("body called");
    return (
        <>
            <BodyDiv>
                <GridDiv>
                    <Grid item xs={4}>
                       <CardDiv image={image1} />
                    </Grid>
                    <Grid item xs={4}>
                       <CardDiv image={image2} />
                    </Grid>
                    <Grid item xs={4}>
                       <CardDiv image={image3} />
                    </Grid>    
                </GridDiv>
                <Grid xs={12}>
                       <CardDiv2 image={image4} />
                </Grid>
            </BodyDiv>
        </>
    )
}

export default Body;
