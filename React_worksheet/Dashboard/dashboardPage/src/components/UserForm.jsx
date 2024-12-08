import React, { useState, useRef } from 'react';
import { addUser } from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    const profilePicture = file ? URL.createObjectURL(file) : ''; 
    const newUser = {
      id: uuidv4(),
      name,
      email,
      bio,
      profilePicture,
    };
    addUser(newUser).then(() => {
      onUserAdd(newUser);
      setName('');
      setEmail('');
      setBio('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input type="file" ref={fileInputRef} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
