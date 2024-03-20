import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import authSlice from './slices/authSlice'

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
})

export default counterStore
