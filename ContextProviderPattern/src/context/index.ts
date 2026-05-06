import { createContext } from "react";
import type { UserData } from "../types/types";

const UserContext = createContext<UserData | null>(null);

export { UserContext };
