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
    <div className="text-white my-10">
      {state.length > 0 ? (
        <ul>
          {state.map((user) => (
            <li key={user.id} className="w-1/2 mx-auto bg-blue-900 py-5 flex justify-around">
              <p>名前: {user.name}</p>
              <p>年齢: {user.age}</p>
              <button onClick={() => handleRemove(user.id)}>×</button>
            </li>
          ))}
          <button onClick={handleClear}>クリア</button>
        </ul>
      ) : (
        <p>ユーザーが存在しません</p>
      )}
    </div>
  );
};

export default UserList;
