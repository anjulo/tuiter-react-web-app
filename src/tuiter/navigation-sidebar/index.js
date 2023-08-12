import React from "react"
import '@fortawesome/fontawesome-free/css/all.css';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/');

  let screens = []
  let icons = []

  const {currentUser} = useSelector(state => state.users)
  if(currentUser){
    screens = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"]
    icons = ["fa-home", "fa-hashtag", "fa-bell", "fa-envelope", "fa-bookmark", "fa-list", "fa-user", "fa-ellipsis-h"]
  }
  else{
    screens = ["explore","register", "login", "more"]
    icons = ["fa-hashtag","fa-user-plus", "fa-right-to-bracket", "fa-ellipsis-h"]
  }

  return (
    <div className="list-group">
      <Link to="/tuiter" className="list-group-item"><i className="fab fa-twitter me-1 fa-2x"></i></Link>
      {screens.map((screen, index) =>
        <Link to={`/tuiter/${screen}`} className={`list-group-item ${parts.at(-1) === "" || parts.at(-1) === screen ? 'active' : ''}`}>
          <div className="row">
            <div className="col-12 col-xl-2 col-xxl-2"><i className={`fas ${icons[index]} me-1`}></i> </div>
            <div className="d-none d-xl-block col-10">{screen.charAt(0).toUpperCase() + screen.slice(1)}</div>
          </div>
        </Link>
      )}
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