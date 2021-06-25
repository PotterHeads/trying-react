import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setModal] = useState(false);

  const deleteHandler = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {showModal && <Backdrop onClickCustom={closeModal} />}{" "}
      {/* Backdrop does not have onClick so a cutom name will be given to link it to div's onClick */}
    </div>
  ); //returns jsx that can be run by browser
}

export default Todo;
