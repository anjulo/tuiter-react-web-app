import React from "react";

const PostSummaryItem = ( { post } ) => {
  
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div className="text-secondary">{post.topic}</div>
          <div><strong>{post.userName}</strong><i className="fas fa-check-circle ms-1" style={{ color: "blue" }}></i> - {post.time}</div>
          <div><strong>{post.title}</strong></div>
        </div>
        <div className="col-2">
          <img src={"../../images/" + post.image} alt="okay" width="100%" className="float-end tounded-3" />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;

