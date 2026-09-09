import React, { useState } from "react";
import { useUserManagement } from "../contexts/UserManagementContext";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const { dispatch } = useUserManagement();

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleAdd = () => {
    const trimmedName = name.trim();
    const trimmedAge = age.trim();
    if (!trimmedName) {
      throw new Error("名前を入力してください");
    } else if (!trimmedAge) {
      throw new Error("年齢を入力してください");
    } else if (!/^\d*$/.test(age)) {
      throw new Error("年齢は数字を入力してください");
    }

    const numericAge = Number(trimmedAge);

    dispatch({ type: "add", user: { id: uuidv4(), name: trimmedName, age: numericAge } });

    setName("");
    setAge("");
  };

  return (
    <div className="text-white bg-gray-700 px-10 py-10 rounded-lg flex gap-5 items-center">
      <label htmlFor="name">
        名前:
        <input id="name" type="text" value={name} onChange={handleName} className="border ml-5 " />
      </label>
      <label htmlFor="age">
        年齢:{" "}
        <input id="age" type="text" value={age} onChange={handleAge} className="border ml-5" />
      </label>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white font-semi-bold w-30 py-1 hover:opacity-80 cursor-pointer rounded-full"
      >
        追加
      </button>
    </div>
  );
};

export default AddUser;
