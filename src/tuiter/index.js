import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css"; // Import the dark theme CSS
import Home from "./home";
import Profile from "./profile";
import { configureStore } from "@reduxjs/toolkit";      // import configureStore
import { Provider } from "react-redux";                   // import the Provider component
import userReducer from "./reducers/user-reducer";        // import the reducer
import postsReducer from "./reducers/posts-reducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postsReducer,
  }
})


function Tuiter() {
  return (
    <Provider store = {store}>                             {/* provide the store to the rest of the application so it can pull from the global state  */}
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-1 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            <NavigationSidebar active='home' />
          </div>

          <div className="col-6 col-sm-11 col-md-10 col-lg-8 col-xl-7 col-xxl-7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<ExploreComponent />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>

          <div className="col-3">
            <WhoToFollowList />

          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter