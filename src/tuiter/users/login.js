import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInThunk } from "../services/users-thunk";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const {currentUser} = useSelector(state => state.users);
  const navigate = useNavigate();
  if(currentUser) {
    navigate("/tuiter/profile")
  }
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [logInError, setLogInError] = useState(null)
  const dispatch = useDispatch()
  const handleLogInBtn = async () => {
    const user = {username, password}
    await dispatch(logInThunk(user))
    setLogInError(null)
  }
  return (
    <div>
      <h1>Login</h1>
      {
        logInError && 
        <div className="alert alert-danger">{logInError}</div>
      }
      <div className="form-group mb-2">
        <label for="username" >User Name</label>
        <input 
          className="form-control w-50"
          type="text"
          id="username"
          placeholder="johndoe"
          onChange={e => setUsername(e.target.value)}
        />
      </div> 
      <div className="form-group mb-2">
        <label for="password" >Password</label>
        <input 
          className="form-control w-50"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div> 
      <button className="btn btn-primary"
        onClick={handleLogInBtn}>
        Log In
      </button>
    </div>
  )
}

export default Login;