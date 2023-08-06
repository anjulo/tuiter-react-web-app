import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../services/tuits-thunks"



const initialState = {            // initial state has
  tuits: [],                      // no tuits
  loading: false,                 // loading flag to display spinner
}


const tuitsReducer = createSlice({
  name: 'tuits',
  initialState,                         // same as "initialState": initialState
  reducers: {                        // we're not going to use the old reducers anymore
  },
  extraReducers: {                 // define asynchronous reducers
    [findTuitsThunk.pending]:       // if request is not yet fulfilled …
      (state) => {
        state.loading = true        // set loading true so UI can display spinner
        state.tuits = []            // empty tuits since we are still fetching them
      },
    [findTuitsThunk.fulfilled]:       // when we get response, request is fulfilled
      (state, action) => {            // we extract/destruct payload from action object
        state.loading = false         // turn off loading flag since we have the data
        state.tuits = action.payload  // payload has tuits from server and update redux state
      },
    [findTuitsThunk.rejected]:        // if request times out, or responds with error
      (state, action) => {
        state.loading = false         // reset loading flag
        state.error = action.error    // report error
      },
    [deleteTuitThunk.fulfilled]:
      (state, action) => {
        state.loading = false
        state.tuits = state.tuits.filter(tuit => tuit._id !== action.payload)
      },
    [createTuitThunk.fulfilled]:
      (state, action) => {
        state.loading = false
        state.tuits.unshift(action.payload)
      },
    [updateTuitThunk.fulfilled]:
      (state, action) => {
        state.loading = false
        const tuitIdx = state.tuits.findIndex(tuit => tuit._id === action.payload._id)
        state.tuits[tuitIdx] = {...state.tuits[tuitIdx], ...action.payload.updates}
      }
  }
})

export default tuitsReducer.reducer;