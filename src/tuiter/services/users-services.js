import axios from "axios"
const BASE_URL = 'http://localhost:4000'

const api = axios.create({
  withCredentials: true
})


export const registerUser = async (newUser) => {
  const res = await api.post(`${BASE_URL}/register`, newUser)
  return res.data
}

export const logInUser = async (user) => {
  const res = await api.post(`${BASE_URL}/login`, user)
  return res.data
}

export const logOutUser = async () => { 
  const res = await api.post(`${BASE_URL}/logout`)
  return res.data
}

export const profile = async () => {
  const res = await api.post(`${BASE_URL}/profile`)
  return res.data;
}

