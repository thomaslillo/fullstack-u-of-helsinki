// this is a react component
const App = () => {
  console.log('hello from app component')

  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world</p>
      <p>The time is {now.toLocaleTimeString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}

export default App