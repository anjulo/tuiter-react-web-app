import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <ul className="list-group">
      <div className="position-relative mb-1">
        <img src="../../images/spaceX-starship.jpg" alt="" width="100%" />
        <h1 className="position-absolute display-4 text-white" style={{ top: '430px', left: '5px' }}>SpaceX's Starship</h1>
      </div>
      {
        postsArray.map(post =>
          <PostSummaryItem
            key={post._id} post={post} />)
      }
    </ul>
  );
};
export default PostSummaryList;