// import React from 'react'
import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnchange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    
    const [text, setText] = useState('Type here to convert to UPPERCASE ');
    
    return (
        <>
        <div className='container'>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label"> </label> */}
                <textarea className="form-control" value ={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to uppercase</button > 
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}  characters</p>
                    <h3>Preview: </h3>
                    <p>{text}</p>
        </div>
        </>
    )
}
