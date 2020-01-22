import React from "react";
import styled, {keyframes} from 'styled-components'

const animationName = keyframes`
  0% { color: blue; }
  100% { color: pink; }
`

const Div = styled.div`
animation: ${animationName} 3s ease infinite alternate;
width: 100%;
border: 4px powderblue solid;
border-radius: 3px;
background: #6495ED;
`


const Span = styled.div `
padding-bottom: 10px;
`

function PhotoHeader () {

    return (
        <Span className="stylespan">
        <Div className="photoHeader">
            <p>Welcome to NASA Photo of the Day </p>

        </Div>

        </Span>

    );
};

export default PhotoHeader;