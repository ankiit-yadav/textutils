/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import React, {useState}  from 'react';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
// eslint-disable-next-line
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState('null');

  const showalert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlert('null');
    }, 800);
  }

  const togglemode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been Enabled","success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been Enabled","success")
    }
        
  }
  return (
    <>
    <Router>       <Alert Alert={alert}/>
      <Navbar title="TextUtils" Mode={mode} togglemode={togglemode}/>
      <div className="container">
      <Routes>   
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/" element={<TextFrom title="Enter Your Text Here " Mode={mode} showalert={showalert}/>} />
        </Routes>           
      </div>
      </Router>
    </>
  
    );
}


export default App;
