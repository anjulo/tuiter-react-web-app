import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "./data/posts.json"


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuitsArray,
})

export default tuitsSlice.reducer;