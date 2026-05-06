import React, { type ReactNode } from "react";
import { UserContext } from "../context";
import type { UserData } from "../types/types";

interface Props {
  children: ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [userData] = React.useState<UserData>({
    subscriptionStatus: "Active",
    userName: "Dinesh",
  });

  //  Note: you can also add the api calling logic here

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
