import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enable or not means default.  
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{ //This is an object
    setAlert({
      msg:message,
      type:type
    })
    // Logic to dismiss the alert msg automatically after given time.
    setTimeout(() => { 
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      // console.log("yes");
      setMode("dark");
      document.body.style.backgroundColor = "#212256"; //For set this fuction to the body also we use this state here.
      showAlert("Dark mode has been enabled","success");

  // Used to change title at particular interval 
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';

    }
  };

  return (
    // Is bracket ke andar me jo code hai use JSX kahte hai. its basically a type of html in the form of javascript used in between.
    <>
      <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar title="OtherTitle" aboutText="OtherAbout"/> */}
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces:" mode={mode} />
          </Route>
      </Switch>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} /> */}
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
