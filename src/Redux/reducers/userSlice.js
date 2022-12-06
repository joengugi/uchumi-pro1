import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uid: null,
  userName: null,
  userEmail: null,
  profilePic: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.uid = action.payload.uid
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
      state.profilePic = action.payload.profilePic
    },
    setSignOutState: (state) => {
      state.uid = null
      state.userName = null
      state.userEmail = null
      state.profilePic = null
    }
  }
})

export const { setActiveUser, setSignOutState } = userSlice.actions

export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail
export const selectUserPhoto = (state) => state.user.profilePic
export const selectUserUid = (state) => state.user.uid

export default userSlice.reducer