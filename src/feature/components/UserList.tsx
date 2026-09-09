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
            <li
              key={user.id}
              className="w-1/2 mx-auto bg-blue-900 py-5 flex justify-around font-bold mb-5 rounded-xl items-center"
            >
              <p>名前: {user.name}</p>
              <p>年齢: {user.age}</p>
              <button
                onClick={() => handleRemove(user.id)}
                className="bg-red-800 w-20 rounded-full py-1 cursor-pointer hover:opacity-80"
              >
                ×
              </button>
            </li>
          ))}
          <button
            onClick={handleClear}
            className="w-50 py-2 bg-gray-500 rounded-xl hover:opacity-80 cursor-pointer font-bold"
          >
            クリア
          </button>
        </ul>
      ) : (
        <p>ユーザーが存在しません</p>
      )}
    </div>
  );
};

export default UserList;
