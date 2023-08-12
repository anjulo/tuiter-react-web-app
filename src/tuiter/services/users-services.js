import axios from "axios"

const REACT_APP_API_BASE =  process.env.REACT_APP_API_BASE;

const api = axios.create({
  withCredentials: true
})


export const registerUser = async (newUser) => {
  const res = await api.post(`${REACT_APP_API_BASE}/register`, newUser)
  return res.data
}

export const logInUser = async (user) => {
  const res = await api.post(`${REACT_APP_API_BASE}/login`, user)
  return res.data
}

export const logOutUser = async () => { 
  const res = await api.post(`${REACT_APP_API_BASE}/logout`)
  return res.data
}

export const profile = async () => {
  const res = await api.post(`${REACT_APP_API_BASE}/profile`)
  return res.data;
}

