
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [text, setText] = useState("");
 const [input, setInput] = useState([]);

 const buttonClick = () =>{
    setInput([...input, text]);
    setInput("");
 }

 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>

      {
        input.map((val, ind)=>{
          return(
            <p>{val}</p>
          )
        })
      }
    </div>
  );
}
