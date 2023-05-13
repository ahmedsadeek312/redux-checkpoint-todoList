import "./App.css";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";
function App() {
  return (
    <div className="App">
      <h1 className="app-title">My Tasks</h1>
      <br></br>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
