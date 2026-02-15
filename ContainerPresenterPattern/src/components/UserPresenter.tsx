import React from "react";
import type { User } from "../types/types";
import "../App.css";

interface Props {
  filteredUsers: User[];
  selectedUser: User | null;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleUserClick: (user: User) => void;
  loading: boolean;
  error: string;
  detailLoading: boolean;
}
const UserPresenter: React.FC<Props> = ({
  filteredUsers,
  handleUserClick,
  search,
  selectedUser,
  setSearch,
  loading,
  error,
  detailLoading,
}) => {
  {
    loading && <p className="info">Loading users...</p>;
  }
  {
    error && <p className="error">{error}</p>;
  }

  return (
    <>
      <div className="app">
        <h1>User Dashboard</h1>

        <input
          className="search"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="layout">
          {/* users list section */}
          <ul className="list">
            {!loading && filteredUsers.length === 0 && (
              <li className="item info">No users found</li>
            )}
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className={
                  selectedUser?.id === user.id ? "active item" : "item"
                }
                onClick={() => handleUserClick(user)}
              >
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </li>
            ))}
          </ul>

          {/* detail section */}
          <div className="details">
            {detailLoading ? (
              <p className="info">Loading Users Detail...</p>
            ) : selectedUser ? (
              <>
                <h2>{selectedUser.name}</h2>
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Website: {selectedUser.website}</p>
              </>
            ) : (
              <p className="info">Select a user to see details</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPresenter;
