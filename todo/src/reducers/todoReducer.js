export const todoList = [
  {
    name: "Learn about reducers",
    id: 3892987589,
    completed: false,
  },
];

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        name: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...todoList,
        todoList: [...state.todoList, newTodo],
      };

    case "MARK_TODO":
      return todoList.map((data) => {
        return data.id === action.payload
          ? { ...data, completed: !data.completed }
          : data;
      });

    //   case "REMOVE_TODO":
    //     return {
    //       clearTodos = (event) => {
    //       //prevent browser reset
    //       event.preventDefault();
    //       //filter through todo list and return any objects
    //       //that match variable defined in filter method
    //         this.setState({
    //           todoList: this.state.todoList.filter((data) => !data.completed),
    //         });
    // }};
    default:
      return state;
  }
};
