import axios from 'axios';  // import axios
import dotenv from 'dotenv';
dotenv.config();
const REACT_APP_API_TUITS =  process.env.REACT_APP_API_BASE + "/tuits";  // location of HTTP services


export const createTuit = async (tuit) => {
  const response = await axios.post(REACT_APP_API_TUITS, tuit);
  return response.data;
}

export const findTuits = async () => {            // async tags this function as asynchronous
  const response = await axios.get(REACT_APP_API_TUITS);    // send HTTP GET request to TUITS_API
  const tuits = response.data;                    // extract JSON array from response from server 
  return tuits;                                  // return tuits            
 }
 
export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${REACT_APP_API_TUITS}/${tid}`);
  return response.data;
}
export const updateTuit = async (_id, updates) => {
  const response = await axios.put(`${REACT_APP_API_TUITS}/${_id}`, updates)
  return {_id, updates}
}

