import "./App.css";
import AddUser from "./feature/components/AddUser";
import UserList from "./feature/components/UserList";
import { UserManagementProvider } from "./feature/contexts/UserManagementContext";

function App() {
  return (
    <>
      <div>
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
