import { useState } from "react";
import NewUser from "./components/User/NewUser/NewUser";
import UsersList from "./components/User/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (userDetails) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, userDetails];
    });
  };

  return (
    <div>
      <NewUser onAddNewUser={addNewUserHandler}></NewUser>
      <UsersList usersList={usersList}></UsersList>
    </div>
  );
}

export default App;
