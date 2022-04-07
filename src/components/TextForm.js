import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("");

    const handleUppercase=()=>{
     console.log("You clicked on uppercase");
     let newText =Text.toUpperCase()
     setText(newText);
     props.showAlert("success: ","UpperCase converted")
    }
    const handleLowercase=()=>{
      console.log("You clicked on Lowercase");
       let newText =Text.toLowerCase()
       setText(newText);
       props.showAlert("success: ","LowerCase converted")
      }

    const clearText=()=>{
      console.log("clear Texted");
         let newText ='';
         setText(newText);
         props.showAlert("success: ","clearTexted")
        }
    const copyText=()=>{
      console.log("Copied")
      let newText=document.getElementById("myBox")
      newText.select();
      navigator.clipboard.writeText(newText.value)
      props.showAlert("success: ","Text is copied")
    }
    const removeExtraSpace=()=>{
      let newText=Text.split(/[ ]+/);
      setText(newText.join(" ")
      )
      props.showAlert("success: ","Removed Extra Space")
    }
 const handleOnchange=(event)=>{
     console.log("Typing writing......")
     setText(event.target.value)
    }


  return (
<>
<div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white'}} id="myBox" rows="8" onChange={handleOnchange} value={Text}></textarea>
</div>
<button className="btn btn mx-1" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white',borderBlockColor:props.mode === 'light'?'#03160c':'white'}}  onClick={handleUppercase}>Convert into UpperCase</button>
<button className="btn btn mx-1" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white',borderBlockColor:props.mode === 'light'?'#03160c':'white'}}  onClick={handleLowercase}>Convert into LowerCase</button>
<button className="btn btn mx-1" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white',borderBlockColor:props.mode === 'light'?'#03160c':'white'}}  onClick={clearText}>Clear</button>
<button className="btn btn mx-1" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white',borderBlockColor:props.mode === 'light'?'#03160c':'white'}}  onClick={copyText}>Copy Text</button>
<button className="btn btn mx-1" style={{backgroundColor: props.mode === 'dark'?'#03160c':'white',color:props.mode ==='light'?'black':'white',borderBlockColor:props.mode === 'light'?'#03160c':'white'}}  onClick={removeExtraSpace}>Remove Extra Space</button>
</div>
<div className="container my-3"  style={{color: props.mode === 'light'?'black':'white'}}>
  <h2>Your Text Summary</h2>
  <p> {Text.split(" ").length}words and {Text.length} Characters</p>
  <p>{0.008 * Text.split(" ").length}  Minutes read</p>
  <h2>Preview</h2>
  <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>
</div>

</>
  )
}
