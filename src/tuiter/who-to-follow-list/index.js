import React from "react";
// import usersArray from './users.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const usersArray = useSelector(state => state.users.users);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h3 className="fs-4">Who to follow</h3>
      </li>
      {  
        usersArray.map(user =>
          <WhoToFollowListItem
            key={user._id}
            user={user} />
        )
      }
    </ul>
  );
};

export default WhoToFollowList;