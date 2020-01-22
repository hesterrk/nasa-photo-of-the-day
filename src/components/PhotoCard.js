import React from 'react';


function PhotoCard(props) {

    return (

        //add props in here from PhotoList
        //see shape of data
    <div className="photoCard">

        <div className="photoinformation">
            <h3>{props.copyright}</h3>
            <h3>{props.date}</h3>
            <h2>{props.explanation}</h2>
            <h1>{props.title}</h1>
           

        </div>



<div className="imagedisplay">
        <img
        alt="space"
        className="spaceimg"
        src={props.url}
     
        />
           </div> 
    

    

    </div>

    );

};


export default PhotoCard;