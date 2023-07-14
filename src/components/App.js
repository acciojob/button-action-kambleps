import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
let[isvisible,setVisible]=useState(false);
function handle(){
  setVisible(true)
}
  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className={isvisible ? 'show' : 'hide'}>
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      <button onClick={handle}>Click Me </button>
    </div>
  );
}

export default App
