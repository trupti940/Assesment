
import React, { useState, useEffect, useContext, useMemo } from "react";

import { fetchUsers } from "./firebase/firebase";
import UserCard from "./components/UserCard";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        if (usersData && typeof usersData === "object") {
          setUsers(Object.values(usersData));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {loading ? (
          <div>Loading...</div>
        ) : filteredUsers.length === 0 ? (
          <div>No user found</div>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        )}
      </div>

    </div>
  );
};

export default App;
