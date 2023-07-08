import React from "react"
import '@fortawesome/fontawesome-free/css/all.css';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  console.log(parts);
  return (
    <div className="list-group">
      <Link to="/tuiter" className="list-group-item">Tuiter</Link>
      <Link to="/tuiter/home" className={`list-group-item ${parts.at(-1) === "" || parts.at(-1) === "home" ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-home me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Home</div>
        </div>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item ${parts.at(-1) === 'explore' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-hashtag me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Explore</div>
        </div>
      </Link>
      <Link to="/tuiter/notifications" className={`list-group-item ${parts.at(-1) === 'notifications' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-bell me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Notifications</div>
        </div>
      </Link>
      <Link to="/tuiter/messages" className={`list-group-item ${parts.at(-1) === 'messages' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-envelope me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Messages</div>
        </div>
      </Link>
      <Link to="/tuiter/bookmarks" className={`list-group-item ${parts.at(-1) === 'bookmarks' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-bookmark me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Bookmarks</div>
        </div>
      </Link>
      <Link to="/tuiter/lists" className={`list-group-item ${parts.at(-1) === 'lists' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-list me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Lists</div>
        </div>
      </Link>
      <Link to="/tuiter/profile" className={`list-group-item ${parts.at(-1) === 'profile' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-user me-1"></i> </div>
          <div className="d-none d-xl-block col-10">Profile</div>
        </div>
      </Link>
      <Link to="tuiter/more" className={`list-group-item ${parts.at(-1) === 'more' ? 'active' : ''}`}>
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-ellipsis-h me-1"></i> </div>
          <div className="d-none d-xl-block col-10">More</div>
        </div>
      </Link>
      <Link to="/" className="list-group-item">
        <div className="row">
          <div className="col-12 col-xl-2 col-xxl-2"><i className="fas fa-flask"></i> </div>
          <div className="d-none d-xl-block col-10">Labs</div>
        </div>
      </Link>
    </div>
  );
}

export default NavigationSidebar;