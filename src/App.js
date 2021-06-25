// seperate the components into different js file
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>To-do List!</h1>
      <Todo text="hello" />
      <Todo text="cool" />
      <Todo text="naise" />
    </div>
  ); //returns jsx that can be run by browser
}

export default App;
