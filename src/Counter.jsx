
const Counter = (props) => {
  return (
    <div>
      <h1>React Counter Application</h1>
      <p>Counter: {props.counter}</p>
      <div>
        <button type="button" onClick={props.increment}>
          Increment
        </button>
        <button type="button" onClick={props.decrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
