import React, { useEffect, useState } from 'react';
// import PhotoCard from "./PhotoCard";

import axios from 'axios';



function PhotoList() {

    const [spaceData, setSpaceData] = useState([]);

    useEffect(() => {
		
		console.log('My PhotList component is mounted');
		
		//getting data from server somewhere
		//
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then(response => {
				console.log(response.data);
                
                
				setSpaceData(response.data);
			})
			.catch(error => {
				console.log('the data was not returned', error);
            });
            
            return () => {
                console.log("unmounted");
            }


	}, []);

    
    return (

<div className="photoListContainer">

{/* //this is where we are going to map through the data we recieved */}


<h2>Cool Space pics!</h2>

</div>


    )








    
}



export default PhotoList; 