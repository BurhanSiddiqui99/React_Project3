import React from "react";
const validation = (props) => {
    let validationMessage = "Text too long enough";
    if (props.inputLength <= 5) {
        validationMessage = "Text too short"
    }

    return(
       <div>
        {/* This is the easy way */}
        {/* {
            props.inputLength > 5 ?
            <p>Text long enough</p> : 
            <p>Text too short</p>
        } */}
        <p>{validationMessage}</p>
       </div>
    );
}

export default validation