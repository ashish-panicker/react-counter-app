import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    message: 'Loaded the counter',
  },
  reducers: {
    increment(state, action) {
      state.counter += action.payload.value
      state.message = action.payload.message
    },
    decrement(state, action) {
      state.counter -= action.payload.value
      state.message = action.payload.message
    },
  },
})

const counterStore = configureStore({
  reducer: counterSlice.reducer,
})

export const { increment, decrement } = counterSlice.actions

export default counterStore
