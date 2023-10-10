import { useState } from 'react';
import './App.css';

function App() {

  const[num,newnum]=useState(0)

  const increase=()=>{
    newnum(num+1)
  }

  const decrease=()=>{
    newnum(num-1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{num}</h2>
      <button className='increment' onClick={increase}>+</button>
      <button className='decrement' onClick={decrease}>-</button>
      
    </div>
  );
}

export default App;
