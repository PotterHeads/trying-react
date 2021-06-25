import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div classname="actions">
        <button classname="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal />}
      {showModal && <Backdrop />}
    </div>
  ); //returns jsx that can be run by browser
}

export default Todo;
