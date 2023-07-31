import React from "react"
import { useSelector, useDispatch } from "react-redux"
import TuitItem from "./TuitsItem"



const TuitsList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return (
    <ul className="list-group">
      {
        tuitsArray.map(tuit => 
          <TuitItem
            key={tuit._id}
            tuit={tuit}
          />
        )
      }
    </ul>
  )
}


export default TuitsList;