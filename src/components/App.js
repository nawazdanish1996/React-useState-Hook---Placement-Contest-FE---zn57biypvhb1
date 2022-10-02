
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [text, setText] = useState("");
 const [input, setInput] = useState([]);

 const buttonClick = () =>{
    setInput([...input, text]);
    setText("");
 }
 
  return (
    <div>
  <input id='input' value={text} onChange={(e)=> setText(e.target.value)} />
  
      <p id='intro'>Concated String</p>
      {
        input.map((val, ind)=>{
          return(
            <p id='text'>{val}</p>
          )
        })
      }
      <button id='button' onClick={buttonClick}>
        Click me
      </button>

    </div>
  );
}
