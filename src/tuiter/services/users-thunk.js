import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './users-services.js'


export const registerThunk = createAsyncThunk(
  'register',
  async user => await service.registerUser(user)
)

export const logInThunk = createAsyncThunk(
  'register',
  async user => await service.logInUser(user)
)

export const logOutThunk = createAsyncThunk(
  'logout',
  async () => await service.logOutUser()
)

export const profileThunk = createAsyncThunk(
  'profile',
  async () => await service.profile()
)
