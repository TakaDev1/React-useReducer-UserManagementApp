import "./App.css";
import AddUser from "./feature/components/AddUser";
import UserList from "./feature/components/UserList";
import { UserManagementProvider } from "./feature/contexts/UserManagementContext";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-800 justify-center items-center">
        <h1>React-useReducer-UserManagementApp</h1>
        <UserManagementProvider>
          <div>
            <UserList />
            <AddUser />
          </div>
        </UserManagementProvider>
      </div>
    </>
  );
}

export default App;
