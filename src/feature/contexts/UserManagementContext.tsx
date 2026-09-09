import React, { createContext, useContext, useReducer, type Dispatch } from "react";
import type { Action, State } from "../types/UserManagement";
import UserManegementReducer from "../reducers/UserManagementReducer";

interface UserManagementContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
}

const UserManagementContext = createContext<UserManagementContextInterface | undefined>(undefined);

const UserManagementProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserManegementReducer, [] as State);

  return (
    <UserManagementContext.Provider value={{ state, dispatch }}>
      {children}
    </UserManagementContext.Provider>
  );
};

const useUserManagement = () => {
  const context = useContext(UserManagementContext);

  if (!context) {
    throw new Error("UserManagementContextの範囲外です");
  }

  return context;
};

export { UserManagementProvider, useUserManagement };
