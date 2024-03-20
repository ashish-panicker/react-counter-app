import Counter from './Counter'

const Body = (props) => {
  return (
    <div>
      <Counter
        counter={props.counter}
        increment={props.increment}
        decrement={props.decrement}
      />
    </div>
  )
}

export default Body
