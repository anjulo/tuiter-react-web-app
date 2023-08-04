import { createAsyncThunk } from "@reduxjs/toolkit"   // import createAsyncTrunk
import * as service from "./tuits-service"            // import all exported functions as service


export const findTuitsThunk = createAsyncThunk(      // create thunk for findTuits
  'tuits/findTuits', async () =>                     // give unique name, thunk invokes
  await service.findTuits()                         // service function. Returned data goes in        
)                                                   // redux action's payload
