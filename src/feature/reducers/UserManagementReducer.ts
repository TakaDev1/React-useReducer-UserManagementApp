import type { Action, State } from "../types/UserManagement";

const UserManegementReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [...state, action.user];
    case "remove":
      return state.filter((user) => user.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
};

export default UserManegementReducer;
