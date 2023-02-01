import React, { useState } from 'react'

const TextForm = props => {

    const [text, setText] = useState("Enter the text here");

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const upperCaseHandler = () => {
        const str = text.toUpperCase();
        setText(str);
    }

    const lowerCaseHandler = () => {
        const str = text.toLowerCase();
        setText(str);
    }

    const clearTextHandler = () => {
        const str = '';
        setText(str);
    }

    const copyTextHandler = () => {
        const str = document.getElementById("exampleFormControlTextarea1");
        str.select();
        navigator.clipboard.writeText(str.value);
    }

    const removeExtraSpacesHandler=()=>{
        const str = text.split(/[ ]+/);
        setText(str.join(" "));

    }

    return (
        <>

            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={(event => { onChangeHandler(event) })} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={upperCaseHandler}>Convert to upper class</button>
                <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>Convert to Lower class</button>
                <button className="btn btn-primary " onClick={clearTextHandler}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={copyTextHandler}>Copy Text</button>
                <button className="btn btn-primary" onClick={removeExtraSpacesHandler}>Remove Extra Spaces</button>

            </div>
            <div className='container my-3'>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(text.split(" ").length)*0.004} minutes read</p>

            </div>
            <div className='container my-3'>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    );


};

export default TextForm;