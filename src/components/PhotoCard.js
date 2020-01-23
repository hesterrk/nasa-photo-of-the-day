import React from 'react';
import PhotoHeader from "./PhotoHeader";
import styled from 'styled-components';



const Img = styled.img `
border: 8px solid black;
height: 600px;
width: 800px;

&:hover {
    transform: scale(1);
}

`


const Div = styled.div`
font-family:monospace;

`


const Button = styled.button `
margin: 10px auto;
font-size: 10px;
padding: 10px;
border-radius: 5px;
background: darkcyan;
color: ${props => (props.color ? 'black' : 'white')};
margin-left: 10px;
margin-right: 10px;
margin-bottom: 20px;

&:hover {
    background: mediumorchid;
}

`

const DifferentButton = styled(Button) `

&:hover {
    background: lavender;
}


`



function PhotoCard(props) {

    return (

        //add props in here from PhotoList
        
    <div className="photoCard">

        <PhotoHeader />
        <Div className="photoinformation">
            <Img src={props.data.hdurl} alt= "space"/>
            <h1>{props.data.title}</h1>
            <h3> Photograph By: {props.data.copyright}</h3>
            <h3> Date of Photograph: {props.data.date}</h3>
            <p>{props.data.explanation}</p>
          
          </Div>

          <Button color="black">See More</Button>
          <DifferentButton>About Us</DifferentButton>
           
    </div>

    );

};


export default PhotoCard;