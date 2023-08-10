import { createSlice } from '@reduxjs/toolkit'      // import slice
// import userArray from './data/users.json'               // import data from JSON file
import { registerThunk, logInThunk, logOutThunk, profileThunk } from '../services/users-thunk';

const userSlice = createSlice({                       // create the slice
  name: 'user',                                       // name of the reducer   
  initialState: {
    loading: false,
    error: null,
    currentUser: null,
    users: []
  },                           // initialize the reducer's state
  reducers: {

  },
  extraReducers: {
    [registerThunk.fulfilled] : (state, action) => {
      state.currentUser = action.payload
    },
    [registerThunk.rejected] : (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [logInThunk.fullfilled] : (state, action) => {
      state.currentUser = action.payload
    },
    [logInThunk.rejected] : (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [logOutThunk.fulfilled] : (state, action) => {
      state.currentUser = null
    },
    [profileThunk.fulfilled] : (state, action) => {
      state.currentUser = action.payload
    },
    [profileThunk.rejected] :  (state, action) => {
      state.error = action.payload
      state.currentUser = null;
    }
  }
});

export default userSlice.reducer;                     // export the reducer