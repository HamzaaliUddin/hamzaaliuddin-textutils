import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navber from './components/Navber'
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

const [mode,setMode]=useState('light');
const togglemode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#03160c'
    showAlert("success: ","Dark Mode has been Enabled")
    document.title='TextUtils - Dark Mode'
    setInterval(() => {
      document.title="Textutils is a amzing."
    }, 1500);
    setInterval(() => {
      document.title="Textutils Update now"
    }, 2000);
  }else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("success: ","Light Mode has been Enabled")
    document.title='TextUtils - Light Mode'
  }
}

const [alert, setAlert]=useState(null)
const showAlert=(type,message)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  return (
    <>
    <Router>
      <Navber title="Textutils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
