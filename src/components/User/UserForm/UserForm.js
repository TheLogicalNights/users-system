import { useState } from "react";
import "./UserForm.css";
import Button from "../../UI/Button/Button";

const UserForm = (props) => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim() === "") {
      const error = {
        title: "Invalid Input!",
        details: "Please Enter a valid username (Non-empty values)",
      };
      setIsValidUserName(false);
      props.onError(error);
      return;
    }

    if (age.trim() === "") {
      const error = {
        title: "Invalid Input!",
        details: "Please Enter a valid age (Non-empty values)",
      };
      setIsValidAge(false);
      props.onError(error);
      return;
    }

    if (age.trim() < 0) {
      const error = {
        title: "Invalid Input!",
        details: "Age could not be negative, Please enter a positive value",
      };
      setIsValidAge(false);
      props.onError(error);
      return;
    }

    const userData = {
      id: crypto.randomUUID().toString(),
      name: userName,
      age: age,
    };

    setUsername("");
    setAge("");
    props.onSubmit(userData);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    setIsValidUserName(true);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    setIsValidAge(true);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="user-controls">
          <div className="user-control">
            <div className={!isValidUserName && "invalid"}>
              <label>Username</label>
              <input
                type="text"
                value={userName}
                onChange={usernameChangeHandler}
              />
            </div>
            <div className={!isValidAge && "invalid"}>
              <label>Age (In Years)</label>
              <input type="number" value={age} onChange={ageChangeHandler} />
            </div>
            <div>
              <Button type="submit">Add User</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
