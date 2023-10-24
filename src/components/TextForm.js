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
        props.showAlert("TextBox is cleared","danger");
    }
    const handelCopy=()=>{
        let text=document.getElementById("myBox")
        text.select();
        document.execCommand("copy");
        document.getSelection().removeAllRanges();
        // navigator.clipboard.writeText(text);
        props.showAlert("Text has Copied to Clipboard","success");
    }
    const handleRemoveTextSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleclr=()=>{
        props.showAlert("Double Click to Clear the TextBox","danger")
    }

    const [text,setText]=useState("");
  return (
    <>
    <div className="container my-3 " >
        <h1 className='my-3 mb-3'>{props.heading}</h1>
        <textarea className="form-control" id="myBox" value={text} style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"white":"#37373b"}} placeholder='Enter text here' onChange={handleUpChange} rows="10" ></textarea>
        <div className="container text-center my-4" >
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLwClick}>Convert to LowerCase</button> 
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCpClick}>Convert to Capitalize</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleRemoveTextSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-success m-2" onClick={handelCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-danger m-2"  onClick={cleartext}>Clear Text</button>
        </div>
    </div>
    <div className="container">
        <h1>Your Summary</h1>
        <p>{text.trim().split(" ").filter((ele)=>{return ele.length>0}).length} words  ||  {text.length} characters  ||  {Math.round((1/125)*text.trim().split(" ").filter((e)=>{return e.length>0}).length*100)/100} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text to Preview"}</p>
    </div>
    </>
  )
}

TextForm.defaultProps={
    heading:"Enter Text"
}

