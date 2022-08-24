

import { useCallback, useMemo, useState } from 'react'

function changeBackground(color) {
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

  const myColor = useMemo(() => changeBackground(darkMode), [darkMode]) // Implementation of useMemo
  // const myColor = useCallback(changeBackground, [darkMode]) //Implementation of useCallback


  return (<div style={colorStyle} >

    <h1>
      React Hooks :<br />
      <span>useCallback</span> and <span>useMemo</span>
    </h1>

    <button onClick={() => { setNumber(number - 1) }}>-</button>
    <strong>{number}</strong>
    <button onClick={() => { setNumber(number + 1) }}>+</button>

    <div>
      <button onClick={() => (setDarkMode(myColor))}>Change background </button>
    </div>

  </div>)
}

export default App
