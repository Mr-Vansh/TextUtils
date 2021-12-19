import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toLowerCase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const copyText = () => {
            /* Get the text field */
            var copyText = document.getElementById("myBox");
          
            /* Select the text field */
            copyText.select();
          
             /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
          
            /* Alerting that text is successfully copied */
            alert("Copied Successfully !!!");
    }

    
    const clearAll = () => {
        let newText = text;
        const final = window.confirm("Are you sure you want to Delete your text ?")
        
        // If user clicks on "OK" then (textarea = empty) otherwise (textarea = provided text)
        if(final ? setText("") : setText(newText));
    }

    return (
        <>
            <div className='container'>
                <h2> {props.heading} </h2>

                <div className="mb-3">
                    <textarea value={text} placeholder="Enter text here..." onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={toUpperCase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={toLowerCase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1"   onClick={clearAll}>Clear All</button>
            </div>

            <div className="container mt-3">
                <h4>Your Text Summary :-</h4>
                {/* removing space in WORD COUNT = text.split(" ").filter((element)=>{return element.length!==0}).length */}
                {/* removing space in CHARACTER COUNT = text.replace(/\s/g, "").length*/}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g, "").length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to Read.</p>

                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
