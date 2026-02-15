import axios from "axios";
import React, { Suspense } from "react";
import type { User } from "../types/types";
const UserPresenter = React.lazy(() => import("./UserPresenter"));

const UserContainer: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [search, setSearch] = React.useState("");
  const [detailLoading, setDetailLoading] = React.useState(false);

  const handleUserClick = (user: User) => {
    setDetailLoading(true);

    setTimeout(() => {
      setSelectedUser(user);
      setDetailLoading(false);
    }, 100);
  };

  React.useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUsers(res?.data);
        setFilteredUsers(res?.data);
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!search.trim()) {
        setFilteredUsers(users);
      } else {
        const filteredUser: User[] = users.filter((user) =>
          user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        );

        setFilteredUsers(filteredUser ? filteredUser : []);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, users]);

  const UserPresenterPops = {
    filteredUsers,
    selectedUser,
    search,
    setSearch,
    handleUserClick,
    loading,
    error,
    detailLoading,
  };

  return (
    <>
      <Suspense fallback={<p className="info">Loading users...</p>}>
        <UserPresenter {...UserPresenterPops} />
      </Suspense>
    </>
  );
};

export default UserContainer;
