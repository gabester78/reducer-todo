import React from "react";
import todoReducer from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, todoList);
  return (
    <div>
      <ul>
        <li
          className={`todo${props.data.completed ? " completed" : ""}`}
          onClick={() => props.changeTodoBoolean(props.data.id)}
        >
          {props.data.name}
        </li>
      </ul>
    </div>
  );
};

export default Todo;
