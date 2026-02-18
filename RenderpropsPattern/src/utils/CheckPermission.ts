import type { User } from "../types/types";

export const CheckPermission = (user: User) => {
  return user === "Guest" ? false : true;
};
