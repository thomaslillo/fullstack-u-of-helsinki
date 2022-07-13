import React, { useState } from 'react'

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const handleClick = () => {
        setCounter(counter + 1)
    }
  
    return (
      <div>
        <p>====</p>
        <div>How many points: {counter}</div>
        <p>====</p>
        <button onClick={handleClick}>
          plus
        </button>
        <button onClick={() => setCounter(counter == 0)}>
            reset
        </button>
        <p>====</p>
        <timedCounter />
      </div>
    )
  }

// const timedCounter = () => {
//     const [count, setCount] = useState(0)
    
//     // with the timeout 1000, call the setCOunt function after 1 second
//     setTimeout(() => setCount(count + 1), 1000)

//     return (
//         <div><p>{count}</p></div>
//     )
// }

export default App