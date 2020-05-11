import React, { useReducer } from "react";
import { todoList, TodoReducer } from "../reducers/TodoReducer";

const Todo = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, todoList);
  return (
    <div>
      <ul>
        <li
          className={`name${props.data.completed ? " completed" : ""}`}
          onClick={() => {
            dispatch({ type: "MARK_TODO", payload: state.id }); // will invoke the reducer with (state, action)
          }}
        >
          {props.data.name}
        </li>
      </ul>
    </div>
  );
};

export default Todo;
