function Todo(props) {
  return (
    <div className="card">
      {/* not plain text */}
      <h2>{props.text}</h2>
      <div classname="actions">
        <button classname="btn">Delete</button>
      </div>
    </div>
  ); //returns jsx that can be run by browser
}

export default Todo;
