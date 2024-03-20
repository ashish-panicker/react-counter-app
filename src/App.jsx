import React from 'react'
import Body from './Body'

function App() {
  const [counter, setCounter] = React.useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <Body counter={counter} increment={increment} decrement={decrement} />
    </>
  )
}

export default App
