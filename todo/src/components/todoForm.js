import React, { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

const TodoForm = () => {
  const [dispatch] = useReducer(TodoReducer);
  return (
    <form>
      <label htmlFor="name">
        New Todo:
        <input
          type="text"
          id="name"
          name="name"
          onChange={() => {
            dispatch({ type: "ADD_TODO" });
          }}
        />
      </label>
      <button>Add to Todo List</button>
    </form>
  );
};

export default TodoForm;
