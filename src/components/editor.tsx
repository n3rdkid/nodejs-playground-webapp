import React,{useState} from "react"
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor =()=>{
    const [code,setCode]=useState("");
    const [result,setResult]=useState("");
    const handleSubmit =async ()=>{
        try{
        const {data} = await axios.post("http://localhost:5000/javascript",{
            code
        });
        setResult(data.data);
    }catch(e){
        alert("OOPS error occured")
    }
    }
    return  <>
    <Editor
    options={{
        "acceptSuggestionOnCommitCharacter": true,
        "acceptSuggestionOnEnter": "on",
        "automaticLayout": true,
        "codeLens": true,
        "colorDecorators": true,
        "cursorBlinking": "blink",
        "quickSuggestions": true,
        "quickSuggestionsDelay": 100,
      }}
    height="40vh"
    defaultLanguage="javascript"
    defaultValue={code}
    onChange={(value)=>{
        if(value){
             setCode(value)
        }
    }}
  />
    <div style={{border:"1px solid black",padding:"16px",margin:"16px auto"}}>
    {result}
    </div>
  <button type="button" onClick={handleSubmit}>Run</button>
  </>
  

}

export { CodeEditor};