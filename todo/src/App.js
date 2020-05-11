import React, { useReducer } from "react";
import "./App.css";
import "./components/todos.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todoList, TodoReducer } from "./reducers/TodoReducer";

function App() {
  const [state, dispatch] = useReducer(todoList, TodoReducer);

  const addTask = (data) => {
    const newTodo = {
      name: action.payload,
      id: Date.now(),
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  return (
    <div className="App">
      <h2>Welcome to your reducer todo app!</h2>
      <div>
        <h3>Todo List</h3>
        <TodoList todoList={todoList} />
        <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
