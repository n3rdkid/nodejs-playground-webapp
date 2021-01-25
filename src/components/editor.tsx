import React,{useState} from "react"
import Editor from "@monaco-editor/react";

const CodeEditor =()=>{
    const [code,setCode]=useState("");
    return <Editor
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
    height="90vh"
    defaultLanguage="javascript"
    defaultValue={code}
    onChange={(value)=>{
        if(value){
             setCode(value)
        }
    }}
  />
    

}

export { CodeEditor};