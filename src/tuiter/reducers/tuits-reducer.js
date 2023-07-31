import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "./data/tuits.json"

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


const tuitsReducer = createSlice({
  name: 'tuits',
  initialState: tuitsArray,
  reducers: {
    toggleLike(state, action) {
      const tuit = state.find(tuit => tuit._id === action.payload)
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
      state.unshift(newTuit)
    },
    deleteTuit(state, action) { 
      const index = state.findIndex(tuit => tuit._id === action.payload)
      state.splice(index, 1)
    }
  }
})

export const { toggleLike, createTuit, deleteTuit} = tuitsReducer.actions;
export default tuitsReducer.reducer;