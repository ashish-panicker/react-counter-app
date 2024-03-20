import { createStore } from 'redux'

/**
 * The global redux store where the data will be managed globally
 *
 * @param {*} state     the global data the needs to be managed
 * @param {*} action    contains the changes and new data that can be applied to the state
 * @returns
 */

const initialState = {
  counter: 0,
  message: 'Loaded the counter',
}

const reducerFn = (state = initialState, action) => {
    
  const { type, payload } = action

  switch (type) {
    case 'INCREMENT':
      return {
        counter: state.counter + payload.value,
        message: payload.message,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - payload.value,
        message: payload.message,
      }
  }

  return state
}

const counterStore = createStore(reducerFn)

export default counterStore
