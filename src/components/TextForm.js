import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLwClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleCpClick=()=>{
        let newT=text.split(" ");
        let con=(" ");
        for (let i of newT) {
            let s=i.charAt(0).toUpperCase();
            let e=i.substring(1,).toLowerCase();
            i=s+e;
            con=con+" "+i;
        }
        setText(con.trim());
    }
    const cleartext=()=>{
        setText('');
        props.showAlert("TextBox has been cleared","danger");
    }
    const handelCopy=()=>{
        // let text=document.getElementById("myBox")
        // text.select();
        // document.execCommand("copy");
        //navigator.clipboard.writeText(text);
        navigator.clipboard.writeText(text); 
        props.showAlert("Text has Copied to Clipboard","success");
    }
    const handleRemoveTextSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text,setText]=useState("");
  return (
    <>
    <div className="container my-3 " >
        <h1>{props.heading}</h1><br/>
        <textarea className="form-control" id="myBox" value={text} style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"white":"#37373b"}} placeholder='Enter text here' onChange={handleUpChange} rows="10" ></textarea>
        <br/>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary m-2" onClick={handleLwClick}>Convert to LowerCase</button> 
        <button className="btn btn-primary m-2" onClick={handleCpClick}>Convert to Capitalize</button>
        <button className="btn btn-primary m-2" onClick={handleRemoveTextSpace}>Remove Extra Spaces</button>
        <button className="btn btn-success m-2" onClick={handelCopy}>Copy Text</button>
        <button className="btn btn-danger m-2" onClick={cleartext}>Clear Text</button>
        <br/><br/>
    </div>
    <div className="container">
        <h1>Your Summary</h1>
        <p>{text.trim().split(" ").length} words and {text.length} characters and  {(1/125)*text.trim().split(" ").length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text to Preview"}</p>
    </div>
    </>
  )
}
TextForm.defaultProps={
    heading:"Enter Text"
}

