import axios from "axios"
const BASE_URL = 'http://localhost:4000'


export const registerUser = async (newUser) => {
  const res = await axios.post(`${BASE_URL}/register`, newUser)
  return res.data
}

export const logInUser = async (user) => {
  const res = await axios.post(`${BASE_URL}/login`, user)
  return res.data
}

export const logOutUser = async () => { 
  const res = await axios.post(`${BASE_URL}/logout`)
  return res.data
}

export const profile = async () => {
  const res = await axios.get(`${BASE_URL}/profile`)
  return res.data;
}

