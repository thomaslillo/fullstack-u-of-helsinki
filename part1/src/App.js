import { useState } from 'react'

const App = () => {
    return (
        <div>
            <Counter />
        </div>
    )
}


const Counter = () => {
    const [count, setCount] = useState(0)
    
    // with the timeout 1000, call the setCOunt function after 1 second
    setTimeout(() => setCount(count + 1), 1000)

    return (
        <div><p>{count}</p></div>
    )
}

export default App