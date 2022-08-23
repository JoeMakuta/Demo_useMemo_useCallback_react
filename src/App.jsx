
import { useCallback, useMemo, useState } from 'react'


function changeBackground(color) {
  for (let i = 0; i < 1000000000; i++) { }
  if (color) return (false)
  else return (true)
}

function App() {

  const [number, setNumber] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const colorStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black'
  }

  function decrement() {
    console.log('Decrement');
    setNumber(number - 1)
  }

  function increment() {
    console.log('Increment');
    setNumber(number + 1)
  }

  const myColor = useMemo(() => changeBackground(darkMode), [darkMode])

  return (<div style={colorStyle}>
    <h1>
      React Hooks :<br />
      <span>useCallback</span> and <span>useMemo</span>
    </h1>

    <button onClick={() => { decrement() }}>-</button>
    <strong>{number}</strong>
    <button onClick={() => { increment() }}>+</button>

    <div>
      <button onClick={() => (setDarkMode(myColor))}>Change background </button>
    </div>

  </div>)
}

export default App
