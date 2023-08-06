import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TuitItem from "./TuitsItem"
import { findTuitsThunk } from "../services/tuits-thunks"



const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)      // grab tuits and loading flag from reducer
  const dispatch = useDispatch()                                   
  useEffect(() => {                                    // On component load, invoke findTuitsThunk to fetch tuits
    dispatch(findTuitsThunk())                         // and put them in the reducer's store so we can extract them
    }, [])                                             // with useSelector() and render the tuits here
  // const tuitsArray = useSelector(state => state.tuits)
  
  return (

    <ul className="list-group">
      {
        loading && 
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
      { 

        !loading && 
        tuits.map(tuit => 
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