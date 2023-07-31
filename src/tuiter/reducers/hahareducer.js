import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "./data/posts.json"


const hahaslice = createSlice({
  name: 'tuits',
  initialState: tuitsArray,
})

export default hahaslice.reducer;