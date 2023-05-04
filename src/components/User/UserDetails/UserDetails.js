import "./UserDetails.css";

const UserDetails = (props) => {
  return (
    <div className="user-details">
      <li>
        {props.userDetails.name} ({props.userDetails.age} years old)
      </li>
    </div>
  );
};

export default UserDetails;
