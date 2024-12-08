import React from "react";
import { deleteUser } from "../firebase/firebase";

const UserCard = ({ user, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteUser(user.id); 
      onDelete(user.id); 
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="user-card">
      
      <img 
        src={user.profilePicture } 
        alt={`${user.name}'s profile`} 
        className="profile-picture" 
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
