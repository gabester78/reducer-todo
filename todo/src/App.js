import React from "react";
import "./App.css";
import "./components/todos.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div className="App">
      <h2>Welcome to your reducer todo app!</h2>
      <div>
        <h3>Todo List</h3>
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
