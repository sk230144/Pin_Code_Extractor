import React, { useState } from 'react'

const CounterInc = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count+1);
  } 
  const decrease = () => {
    setCount(count-1);
  } 
  return (
    <div>
    <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
    </div>
  )
}

export default CounterInc

