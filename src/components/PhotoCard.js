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
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>


        </div>




        <img
        alt="space"
        className="spaceimg1"
        // src={props}
        />
            
    

    

    </div>

    );

};


export default PhotoCard;