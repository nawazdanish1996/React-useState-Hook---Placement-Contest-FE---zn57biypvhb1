
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [inputValue, setInputValue] = useState("");
 const [text, setText] = useState("");

 const buttonClick = () =>{
    setText(text+inputValue);
    setInputValue("");
 }
 
  return (
    <div>
  <input id='input' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text}</p>
      <button id='button' onClick={buttonClick}>Click me</button>

    </div>
  );
}
