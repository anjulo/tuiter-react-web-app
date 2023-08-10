import { createSlice } from '@reduxjs/toolkit'      // import slice
import userArray from './data/users.json'               // import data from JSON file

const userSlice = createSlice({                       // create the slice
  name: 'user',                                       // name of the reducer   
  initialState: userArray                             // initialize the reducer's state
});

export default userSlice.reducer;                     // export the reducer