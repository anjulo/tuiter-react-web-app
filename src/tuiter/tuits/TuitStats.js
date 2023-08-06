import React from "react";
import { toggleLike } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-3">
        <bi className="bi bi-chat me-1"></bi> {tuit.replies}
      </div>
      <div className="col-3">
        <bi className="bi bi-arrow-repeat me-1"></bi> {tuit.retuits}
      </div>
      {
        !tuit.liked &&
        <div className="col-3">
          <bi 
            className="bi bi-heart me-1"
            // onClick = {() => dispatch(updateTuitThunk({...tuit, liked: true, likes : tuit.likes+1}))}
            onClick = {() => dispatch(updateTuitThunk({_id: tuit._id, updates: {liked: true, likes : tuit.likes+1}}))}
          ></bi> 
          {tuit.likes}
        </div>
      }
      {
        tuit.liked &&
        <div className="col-3">
          <bi 
            className="bi bi-heart-fill text-danger me-1"
            // onClick = {() => dispatch(toggleLike(tuit._id))}
            // onClick = {() => dispatch(updateTuitThunk({...tuit, liked: false, likes : tuit.likes-1}))}
            onClick = {() => dispatch(updateTuitThunk({_id: tuit._id, updates: {liked: false, likes : tuit.likes-1}}))}
          ></bi> 
          {tuit.likes}
        </div>
      }
      <div className="col-3">
        <bi className="bi bi-share"></bi>
      </div>
    </div>
  )
}

export default TuitStats;