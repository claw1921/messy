// import React from 'react'
import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnchange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Type here to convert to UPPERCASE ');
    
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label"> </label> */}
                <textarea className="form-control" value ={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
