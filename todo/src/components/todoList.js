import React, { useReducer } from "react";
import Todo from "./Todo";
import { TodoReducer } from "../reducers/TodoReducer";

const TodoList = (props) => {
  const [dispatch] = useReducer(TodoReducer);
  console.log(props, "<<<<p");
  return (
    <div className="todoListContainer">
      {/* map though todoList from app.js and display information */}
      {props.todoList.map((data) => (
        // feed todo component props data & function
        <Todo data={data} />
      ))}
      {/* feed onClick function to props data */}
      <button onClick={props.clearTodos}>Clear Completed Todo Items</button>
    </div>
  );
};

export default TodoList;
