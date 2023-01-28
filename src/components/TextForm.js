import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  };
  const handleClearClick = () => {
    let clear = " ";
    setText(clear);
    props.showAlert("Clear text!","success");
  };
  // const handleEmailClick = () => {
  //   let email;
    
  //   setText(email);
  // };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const handleCopy = ()=> {
    // console.log("Copy success");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/); //RegExp
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success");
  }

// To make first letter of each words Capital

  // const handleFirstCaps = () =>{
  //   const words = text.split(" ");
  //   // console.log(words);
  //   // let n = words.length;
  //   // console.log(n);
  //   for(let i=0;i<words.length;i++){
  //     words[i] = words[i][0].toUpperCase()+words[i].substr(1);
  //   }    
  //   words.join(" ");
  // }

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state.
  // setText("newText"); //Correct way to change the state.

  return (
    //  JSS fragment used to wrap more than one thing in a page
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleEmailClick}>
          Emails
        </button> */}
        <button disabled={text.length===0}className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleFirstCaps}>First letter capitalise</button> */}
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
{/* filter takes the function if the function return 1 than split.length execute otherwise it does not execute */}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>

        <h2>Preview</h2>
        <textarea 
        className="preview form-control" 
        id="myBox"
        cols="148" 
        rows="10"
        value={text.length>0?text:"Nothing to Preview!"} style={{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.   mode==='dark'?'white':'black'}}>
        {/* <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p> */}
        </textarea>
      </div>
    </>
  );
}
