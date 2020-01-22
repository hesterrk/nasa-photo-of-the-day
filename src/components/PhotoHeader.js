import React from "react";
import styled, {keyframes} from 'styled-components'

const animationName = keyframes`
  0% { color: blue; }
  100% { color: pink; }
`

const Div = styled.div`
animation: ${animationName} 3s ease infinite alternate;
width: 100%;
border: 1px red solid;
background: coral;
`

function PhotoHeader () {

    return (
        <Div className="photoHeader">
            <p>Welcome To NASA Photo Of The Day </p>




        </Div>

    );
};

export default PhotoHeader;