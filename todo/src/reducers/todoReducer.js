import React, { useReducer } from "react";

const todoList = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
        const newTodo = {
          name: todoName,
          id: Date.now(),
          completed: false,
        };
        return {
          ...state,
         todoList: [...state.todoList, newTodo] 
      }

    case "MARK_TODO":
      return { 
        changeTodoBoolean = (event) => {
        //set todo list state to contents of function
        this.setState({
          //map through current todo list data
          todoList: this.state.todoList.map((data) => {
            //compare clicked data to todo list data
            if (data.id === event) {
              //if data matches, update todo state with new completed boolean
              return {
                ...data,
                completed: !data.completed,
              };
            }
            //return new todo list data
            return data;
          }),
        });
      }};

    case "REMOVE_TODO":
      return { 
        clearTodos = (event) => {
        //prevent browser reset
        event.preventDefault();
        //filter through todo list and return any objects
        //that match variable defined in filter method
          this.setState({
            todoList: this.state.todoList.filter((data) => !data.completed),
          });
  }};
    default:
      return state;
  }
}
