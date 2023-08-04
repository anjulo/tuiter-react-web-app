import { createSlice } from "@reduxjs/toolkit";
// import tuitsArray from "./data/tuits.json"
import { deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks"


const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "now",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const initialState = {            // initial state has
  tuits: [],                      // no tuits
  loading: false,                 // loading flag to display spinner
}


const tuitsReducer = createSlice({
  name: 'tuits',
  initialState,                         // same as "initialState": initialState
  reducers: {                        // we're not going to use the old reducers anymore
    toggleLike(state, action) {
      const tuit = state.tuits.find(tuit => tuit._id === action.payload)
      tuit.liked = !tuit.liked
      if (tuit.liked)
        tuit.likes++
      else
        tuit.likes--
    },
    createTuit(state, action) {
      const newTuit = {
        ...templateTuit,
        _id: (new Date()).getTime(),
        tuit: action.payload,
      }
      state.tuits.unshift(newTuit)
    },
    // deleteTuit(state, action) { 
    //   const index = state.tuits.findIndex(tuit => tuit._id === action.payload)
    //   state.tuits.splice(index, 1)
    // }
  },              
  extraReducers : {                 // define asynchronous reducers
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
     }
    }
})

export const { toggleLike, createTuit, deleteTuit} = tuitsReducer.actions;
export default tuitsReducer.reducer;