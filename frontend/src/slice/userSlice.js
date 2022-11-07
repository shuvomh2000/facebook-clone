import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    login: (state,action) => {
        state.userInfo = action.payload
        // console.log("reducer",action.payload)
    }
  },
})


export const { login } = userSlice.actions

export default userSlice.reducer