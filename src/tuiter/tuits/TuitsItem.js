import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "../reducers/tuits-reducer";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch()
  return (
    <li className="list-group-item border-secondary">
      <div className="row">
        <div className="col-2">
          <img className="img-thumbnail rounded-circle img-fluid" src={"../images/" + tuit.image} alt="wtf" />
        </div>
        <div className="col-10">
          <div className="mb-1">
            {tuit.userName} <bi className="bi bi-check-circle-fill"></bi> {tuit.handle} · {tuit.time}
            <bi
              className="bi bi-x float-end"
              // onClick={() => dispatch(deleteTuit(tuit._id))}
              onClick = {() => dispatch(deleteTuitThunk(tuit._id))}
            >
            </bi>
          </div>
          <div className="mb-3">
            {tuit.tuit}
          </div>
          <div className="row">
            <TuitStats
              tuit={tuit} />
          </div>
        </div>

      </div>
    </li>
  )

}

export default TuitItem;