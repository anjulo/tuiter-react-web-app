import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../services/users-thunk";

const Register = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [confrimPassword, setConfrimPassword] = useState()
  const [registerError, setRegisterError] = useState(null)
  const {currentUser, error} = useSelector(state => state.users)
  const dispatch = useDispatch()
  const handleRegisterBtn = () => {
    if (password !== confrimPassword) {
      setRegisterError("Passwords do not match")
      return
    }
    setRegisterError(null)
    const newUser = {username, password}
    dispatch(registerThunk(newUser))

    // handle user name already taken situation

  }

  return (
    <div>
      <h1>Register</h1>
      {
        registerError && 
        <div className="alert alert-danger">{registerError}</div>
      }
      <div className="form-group mb-2">
        <label for="username" >User Name</label>
        <input 
          className="form-control w-50"
          type="text"
          id="username"
          placeholde="johndoe"
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
      <div className="form-group mb-2">
        <label for="confrimPassword"> Confirm Password</label>
        <input 
          className="form-control w-50"
          type="password"
          id="confrimPassword"
          onChange={e => setConfrimPassword(e.target.value)}
        />
      </div> 
      <button className="btn btn-primary"
        onClick={handleRegisterBtn}>
        Register
      </button>
      {
        currentUser && 
        <div className="alert alert-success"> Welcome {currentUser.username}</div>
      }
    </div>
  )
}

export default Register;