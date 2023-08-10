import React from "react";
import { logOutThunk } from "../services/users-thunk";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick = {() => dispatch(logOutThunk())}>
        Logout</button>
    </div>
  )
}

export default Logout;
