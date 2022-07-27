import { useState } from 'react'

const Buttons = () => {
    const [counter, setCounter] = useState(0)


    // a handler can either be a function or a function refrence
    // you couldnt just put

    // onClick={ setCount(counter + 1) }

    // in JSX, its not a function so it will break
    // when react renders the component for the first time, it needs to 
    // be able to call the function (so counter at 0 + 1) and render
    // the component

    const resetCounter = () => {
        setCounter(0)
    }

    const addCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>
                <h2>{counter}</h2>
            </div>
            <div>
                {/* usually defining event handlers within JSX is no good */}
                <button onClick={() => setCount(counter + 1)}>
                    ADD ONE - IN JSX
                </button>
                <button onClick={addCounter}>
                    ADD ONE - OUT OF JSX
                </button>
                <button onClick={resetCounter}>
                    RESET
                </button>
            </div>
        </div>
    )
}

export default Buttons;