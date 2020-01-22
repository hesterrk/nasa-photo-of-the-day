import React from 'react';
import PhotoHeader from "./PhotoHeader";

function PhotoCard(props) {

    return (

        //add props in here from PhotoList
        //see shape of data
    <div className="photoCard">

        <PhotoHeader />
        <div className="photoinformation">
            <img src={props.data.hdurl} alt= "space"/>
            <h1>{props.data.title}</h1>
            <h3> Photograph By: {props.data.copyright}</h3>
            <h3> Date of Photograph: {props.data.date}</h3>
            <p>{props.data.explanation}</p>
          
          </div>
           
    </div>

    );

};


export default PhotoCard;