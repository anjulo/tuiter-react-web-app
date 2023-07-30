import React from "react";
const WhoToFollowListItem = ({user}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <img src={`../../images/${user.avatarIcon}`} className="img-thumbnail rounded-circle p-0" alt="thumbnail"/>
        </div>
        <div className="col-6">
          <div><strong>{user.userName}</strong><i className="fas fa-check-circle ms-1 " style={{color: "blue"}}></i></div>
          <div className="text-secondary small">@{user.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end ">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;

