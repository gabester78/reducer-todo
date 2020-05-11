import React from "react";

const todo = () => {
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
