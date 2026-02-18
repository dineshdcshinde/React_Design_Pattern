import React from "react";
import type { User } from "../types/types";
import { CheckPermission } from "../utils/CheckPermission";

interface Props {
  user: User;
  render: (user: User) => React.ReactNode;
}

const PermissionGateComponent: React.FC<Props> = ({ user, render }) => {
  const allowed = CheckPermission(user);
  return (
    <>
      {allowed ? (
        render(user)
      ) : (
        <h1>Access Denied! Pass the user except "Guest"</h1>
      )}
    </>
  );
};

export default PermissionGateComponent;
