import { useContext } from "react";
import { UserContext } from "../context";

const useUserData = () => {
  const userData = useContext(UserContext);

  if (!userData) {
    throw new Error("useUserData must be used inside UserProvider");
  }

  return { userData };
};

export default useUserData;
