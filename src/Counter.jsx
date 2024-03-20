import { useSelector, useDispatch } from 'react-redux'

/**
 * useSelector:   hook to select value from the store
 * useDispatch:   hook to dispatch an action to the store
 */

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const message = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const increment = () => {
    const action = {
      type: 'INCREMENT',
      payload: { value: 1, message: 'Counter got increased.' },
    }
    dispatch(action)
  }

  const decerment = () => {
    const action = {
      type: 'DECREMENT',
      payload: { value: 1, message: 'Counter got decreased.' },
    }
    dispatch(action)
  }

  return (
    <div>
      <h1>React Counter Application</h1>
      <p>Counter: {counter}</p>
      <p> {message} </p>
      <div>
        <button type="button" onClick={increment}>
          Increment
        </button>
        <button type="button" onClick={decerment}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
