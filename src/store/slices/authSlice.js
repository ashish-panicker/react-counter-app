import { createSlice } from '@reduxjs/toolkit'

// Implement local storage into this
const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      const { userName, password } = action.payload
      if (userName === 'ashish' && password === 'password') {
        state.isLoggedIn = true
      }
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice
