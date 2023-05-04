import "./NewUser.css";
import UserForm from "../UserForm/UserForm";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { useState } from "react";
const NewUser = (props) => {
  const [error, setError] = useState("");

  const onSubmitHandler = (userData) => {
    props.onAddNewUser(userData);
  };

  const onErrorHandler = (err) => {
    setError(err);
  };

  const onClickHandler = () => {
    setError('');
  }

  return (
    <div>
      {error.length !== 0 && (
        <ErrorModal title={error.title} details={error.details} onConfirm={onClickHandler}/>
      )}
      <Card className={"new-user"}>
        <UserForm
          onSubmit={onSubmitHandler}
          onError={onErrorHandler}
        ></UserForm>
      </Card>
    </div>
  );
};

export default NewUser;
