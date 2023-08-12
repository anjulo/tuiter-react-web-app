import React from 'react';
import Logout from '../users/logout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Profile = () => {
  const {currentUser} = useSelector(state => state.users);
  const navigate = useNavigate();
  if(!currentUser) {
    navigate("/tuiter/login")
  }
  return (
    <div>
      <h1>Profile Screen</h1>
      {
        currentUser && 
        <div className="alert alert-success w-50"> Welcome {currentUser.username}</div>
      }
      <Logout />
    </div>
  );
}

export default Profile;