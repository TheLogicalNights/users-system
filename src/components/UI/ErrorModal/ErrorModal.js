import Button from "../Button/Button";
import Card from "../Card/Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  const onClickHandler = () => {
    props.onConfirm();
  };

  return (
    <div>
      <div className="backdrop" onClick={onClickHandler}></div>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <h3>{props.details}</h3>
        </div>
        <footer className="actions">
          <Button type="button" onClick={onClickHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
