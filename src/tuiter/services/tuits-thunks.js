import { createAsyncThunk } from "@reduxjs/toolkit"   // import createAsyncTrunk
import * as service from "./tuits-service"            // import all exported functions as service


const findTuitsThunk = createAsyncThunk(      // create thunk for findTuits
  'tuits/findTuits',                                 // give unique name,
  async () =>  { return await service.findTuits()  } // thunk invokes service function.
)                                                    // Returned data goes in redux action's payload

const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuits',
  async (tid) => {
    await service.deleteTuit(tid)
    return tid
  }
)


export { findTuitsThunk, deleteTuitThunk } 