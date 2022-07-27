import { useState } from 'react'


/* 

How a React App Works

- when the app starts, the code in App is executed
- 

*/

const App = () => {

    // the state of the app
    const [count, setCount] = useState(count)

    // the functions for adding and subtracting
    const addOne = () => {setCount(count + 1)}
    const subOne = () => {setCount(count - 1)}

    return (
        <div>            
            <Display count={count} />   
            
            <p>the more general button component</p>
            <Button text={"add"} onClick={addOne} />
            <Button text={"down"} onClick={subOne} />

            <p>this is the older implamentation</p>
            <AddValueButton setCount={setCount} />

        </div>
    )
}


// the display component
// because this only uses count, can just pass
// count instead of all props
const Display = ({count}) => {
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

// the general button
const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const AddValueButton = (props) => {
    return (
        <div>
            <button onClick={() => props.setCount(props.count + 1)}>
                ADD ONE
            </button>
        </div>
    )
}

export default App