import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    message: 'Loaded the counter',
  },
  reducers: {
    increment(state, action) {
      state.value += action.payload.value
      state.message = action.payload.message
    },
    decrement(state, action) {
      state.value -= action.payload.value
      state.message = action.payload.message
    },
  },
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice
