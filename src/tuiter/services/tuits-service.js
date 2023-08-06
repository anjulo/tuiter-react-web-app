import axios from 'axios';  // import axios
const TUITS_API = 'http://localhost:4000/api/tuits';  // location of HTTP services


export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
}

export const findTuits = async () => {            // async tags this function as asynchronous
  const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
  const tuits = response.data;                    // extract JSON array from response from server 
  return tuits;                                  // return tuits            
 }
 
export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  return response.data;
}
export const updateTuit = async (_id, updates) => {
  const response = await axios.put(`${TUITS_API}/${_id}`, updates)
  return {_id, updates}
}

