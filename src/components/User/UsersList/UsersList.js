import Card from "../../UI/Card/Card";
import UserDetails from "../UserDetails/UserDetails";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users-list">
        {props.usersList.length === 0 ? (
          <h2>Details Not Found</h2>
        ) : (
          props.usersList.map((userDetails) => {
            return (
              <UserDetails key={userDetails.id} userDetails={userDetails} />
            );
          })
        )}
    </Card>
  );
};

export default UsersList;
