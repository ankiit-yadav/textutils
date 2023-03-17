import React from "react";

function Alert(props){
   
    const capitalize=(word)=>{
        if(props.Alert!=='null') {      
         const lower=word.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1);
     }}

  return(
    <>
    
       <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert" style={{display:props.Alert!=='null'?'block':'none'}}>
        <strong>{capitalize(props.Alert.type)}</strong>: {props.Alert.msg}
       </div> 
    </>
  )
}

export default Alert