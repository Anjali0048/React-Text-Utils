import React from "react"
//Use this for previous commented code because on that code we need useState
// import React, {useState} from "react" 

export default function About(props) {
//To set initial state later on we can use setMyStyle in the fuction to change the state accordingly.
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
      color: props.mode === "dark"?"white":"black",
      backgroundColor: props.mode === "dark"?"rgb(125 126 153)":"white"
    }

// We can also use more than one state at a time as here we use state for color as well as for button.
    // const [btnText , setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

  return (
    <div className="container my-3 " style={{color: props.mode === 'dark'?'white':'black'}} >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" 
              style={myStyle}
            >
            <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word counter, character counter, copying the texts, Remove extra spaces, Convert text from Lowercase to Uppercase and vice versa and many more.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" style={myStyle}
            >
            <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writting text with word/ character limits.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={myStyle}
            >
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter works in any web browser such as Chrome, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essay, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
