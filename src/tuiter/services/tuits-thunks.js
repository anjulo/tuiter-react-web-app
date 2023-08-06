import { createAsyncThunk } from "@reduxjs/toolkit"   // import createAsyncTrunk
import * as service from "./tuits-service"            // import all exported functions as service


const findTuitsThunk = createAsyncThunk(      // create thunk for findTuits
  'tuits/findTuits',                                 // give unique name,
  async () =>  await service.findTuits()   // thunk invokes service function.
)                                                    // Returned data goes in redux action's payload

const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuits',
  async (tid) => {
    await service.deleteTuit(tid)
    return tid
  }
)

const createTuitThunk = createAsyncThunk(
  'tuits/createTuit',
  async (tuit) => await service.createTuit(tuit)
)

const updateTuitThunk = createAsyncThunk(
  'tuits/updateTuit',
  async ({_id, updates}) => await service.updateTuit(_id, updates)
)


export { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk } 
