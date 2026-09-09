import React from "react";
import { useUserManagement } from "../contexts/UserManagementContext";

const UserList = () => {
  const { state, dispatch } = useUserManagement();

  const handleRemove = (id: string) => {
    dispatch({ type: "remove", id });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      {state.length > 0 ? (
        <ul>
          {state.map((user) => (
            <li key={user.id}>
              <p>名前: {user.name}</p>
              <p>年齢: {user.age}</p>
              <button onClick={() => handleRemove(user.id)}>×</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>ユーザーが存在しません</p>
      )}

      <button onClick={handleClear}>クリア</button>
    </div>
  );
};

export default UserList;
