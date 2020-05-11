import React from "react";

const todoDefault = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

const todoReducer = (state, action) => {
  const newState = { ...state };
  return newState;
};
