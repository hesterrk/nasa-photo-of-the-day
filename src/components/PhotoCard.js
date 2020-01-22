import React from 'react';
import PhotoHeader from "./PhotoHeader";
import styled from 'styled-components';



const Img = styled.img `
border: 8px solid black;
height: 600px;
width: 800px;



`
//check margin to decrease size of pictures


function PhotoCard(props) {

    return (

        //add props in here from PhotoList
        
    <div className="photoCard">

        <PhotoHeader />
        <div className="photoinformation">
            <Img src={props.data.hdurl} alt= "space"/>
            <h1>{props.data.title}</h1>
            <h3> Photograph By: {props.data.copyright}</h3>
            <h3> Date of Photograph: {props.data.date}</h3>
            <p>{props.data.explanation}</p>
          
          </div>
           
    </div>

    );

};


export default PhotoCard;