function Modal(props) {
  // another way of executing functions through props. can be done via Backdrop way as well
  const cancelModal = () => {
    props.onCancel();
  };
  const confirmModal = () => {
    props.onConfirm();
  };
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelModal}>
        Cancel
      </button>
      <button className="btn" onClick={confirmModal}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
