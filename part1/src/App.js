import { useState } from 'react'

const App = () => {

    // the state of the app
    const [count, setCount] = useState(count)

    return (
        <div>            
            <Display count={count} />   
            <AddValue setCount={setCount} />         
        </div>
    )
}

// the display component
const Display = (props) => {
    return (
        <div>
            <p>{props.count}</p>
        </div>
    )
}

const AddValue = (props) => {
    return (
        <div>
            <button onClick={() => props.setCount(props.count + 1)}>
                ADD ONE
            </button>
        </div>
    )
}

export default App