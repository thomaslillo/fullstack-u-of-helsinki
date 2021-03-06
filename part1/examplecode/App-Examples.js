// this is a react component
const App = () => {
  console.log('hello from app component')

  const now = new Date()
  const a = 10
  const b = 20
  const username = 'Tom' 
  const age = 26
  const timeL = new Date().getTime()

  // you can embed components in other components
  return (
    <div>
      {/*passing props not required even if func has them*/}
      <Header />
      <Hello username={username} age={age} />
      <Time now={now} />
      <Countdown timeLeft={timeL} />
      <Addition a={a} b={b} />
    </div>
  )
}

// some functions

function Header() {
  return (
    <div>
      <h1>Header of the page</h1>
    </div>
  )
}

function Time (props) {
  return (
    <div>
      <p>The time is {props.now.toLocaleTimeString()}</p>
    </div>
  )
}

function Addition(props) {
  return (
    <div>
      <p>{props.a} plus {props.b} is {props.a + props.b}</p>
    </div>
  )
}

// react component that counts down on a timer
function Countdown(props) {
  const [timeLeft, setTimeLeft] = useState(props.timeLeft)
  return (
    <div>
      <p>Time left: {timeLeft}</p>
      <button onClick={() => setTimeLeft(timeLeft - 1)}>
        -
      </button>
      <button onClick={() => setTimeLeft(timeLeft + 1)}>
        +
      </button>
    </div>
  )
}

// this can be used multiple times
// props is used to data pass between components
function Hello(props) {
  // this is a mini function - helper function - within the component
  const bornYear = () => {
    const thisYear = new Date().GetFullYear();
    return thisYear - props.age;
  }
  return (
    <div>
      <p>Greetings {props.username}</p>
      {/*logic for guessing the year is seperated and called
      when the component is rendered*/}      
      <p>You were born in {bornYear()}</p>
    </div>
  )
}

export default App