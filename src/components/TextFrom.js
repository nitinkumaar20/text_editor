import React,{useState} from 'react'

export default function TextFrom(props) {
    const converttoup=()=>{
    //    console.log(text.toUpperCase());
    // setText(text.bold());
    let newtext= text.toUpperCase();
    setText(newtext)  
    props.showalert("converted to uppercase","success") ; 
    }
    const textchnage =(event)=>{
        setText(event.target.value)

    }
    const converttolow=()=>{
        setText(text.toLocaleLowerCase())
        props.showalert("converted to lowercase","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("extra spaces removed","success");  
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("copy to clipboard","success");
    }
    const [text, setText]=useState("Enter the text");
    const removeSampletext =()=>{
        setText('');
    }
    return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="my-4">
            <textarea onClick={removeSampletext} className={`form-control text-${props.mode==='light'?'secondary':'light'} bg-${props.mode} `} id="exampleFormControlTextarea1" value={text} onChange={textchnage} rows="10"></textarea>
        </div>
            <button type="submit" disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==="dark"?"grey":"",}} onClick={converttoup}>convert to upparcase</button>
            <button type="submit" disabled={text.length===0}className="btn btn-primary mx-1 my-1"style={{backgroundColor: props.mode==="dark"?"grey":""}} onClick={converttolow}>convert to lowercase</button>
            <button type="submit"disabled={text.length===0} className="btn btn-primary mx-1 my-1"style={{backgroundColor: props.mode==="dark"?"grey":""}} onClick={handleCopy}>copy</button>
            <button type="submit" disabled={text.length===0}className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode==="dark"?"grey":""}}onClick={handleExtraSpaces}>Remove extra spaces</button>


        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words and {text.length} is character</p>
        <p>
            {0.008 * text.split(" ").filter((a1)=>{return a1.length!==0}).length} Minutes Need To Read
            </p>
            <h2>Prievew</h2>
        <p> {text.length>0?text:"enter text above to preview"}</p>

    </div>
    </>
 )
}

