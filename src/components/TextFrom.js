import React from 'react';
import { useState } from 'react';
function TextFrom(props){

    const listen = () => {
        let msg = new SpeechSynthesisUtterance();
         msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Listen to the text has been enabled","success")
        }
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Text has been Converted to Upper Case","success")

    } 
    const handleCopy =()=>{
        let newText=document.getElementById('mytxt');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showalert("Text has been Copied","success")
    } 
    const handleloClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Text has been Converted to Lower Case","success")

    }
    
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra Spaces has been removed from the Text","success")

        
    }

    const handleClear=()=>{
        let newText=" ";
        setText(newText);
        props.showalert("Text has been Removed","warning")


    }

    const handleOnChange =(event)=>{
        setText(event.target.value)

    } 

    const [text,setText] = useState("");

return (
        <>
           <div className='conatainer' style={{backgroundColor:props.Mode==='light'?'white':'grey',color:props.Mode==='light'?'black':'white'}}>
           <h1 className='my-3'>{props.title}</h1>
           <div className="mb-3" >               
               <textarea className="form-control " placeholder="Enter your text here" value={text} onChange={handleOnChange} id="mytxt" rows="8" style={{background:props.Mode==='light'?'white':'grey',color:props.Mode==='light'?'black':'white'}} ></textarea>               
           </div>  
           <button className='btn btn-success mx-1' onClick={handleUpClick}>Upper Case</button>
           <button className='btn btn-danger mx-3' onClick={handleloClick}>Lower Case</button>
           <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>
           <button className='btn btn-secondary mx-3' onClick={handleSpaces}>Remove Extra Spaces</button>
           <button className="btn btn-dark mx-2 my-2" onClick={listen} >Listen the Text</button>
           <button className="btn btn-info mx-2 my-2" onClick={handleClear} >Clear Text</button>
           <div className='container my-3' style={{backgroundColor:props.Mode==='light'?'light':'dark',color:props.Mode==='light'?'black':'white'}}>
              <h1>Your Text Summary is : </h1>
              <h5>{text.toString().split(" ").length} Words and {text.length} Characters</h5>            
              <h6>On Average, It takes approx {(0.24 * text.length).toFixed(2)} seconds to read {text.toString().split(" ").length-1 } Words</h6> 
              <h3 style={{display:text.length>0?'block':'none'}}>Your input Description...</h3>
              <p>{text}</p>           
           </div>
           </div>
        </>
    )
}

 

export default TextFrom;