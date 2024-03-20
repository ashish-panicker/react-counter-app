import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'
/**
 * useSelector:   hook to select value from the store
 * useDispatch:   hook to dispatch an action to the store
 */

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const message = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const increaseCounter = () => {
    const payload = { value: 1, message: 'Counter got increased.' }
    dispatch(increment(payload))
  }

  const decreaseCounter = () => {
    const payload = { value: 1, message: 'Counter got decreased.' }
    dispatch(decrement(payload))
  }

  return (
    <div>
      <h1>React Counter Application</h1>
      <p>Counter: {counter}</p>
      <p> {message} </p>
      <div>
        <button type="button" onClick={increaseCounter}>
          Increment
        </button>
        <button type="button" onClick={decreaseCounter}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
