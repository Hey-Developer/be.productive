import uuid from "uuid/dist/v1";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./TodoActions";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: uuid(),
          completed: false,
          ...action.payload,
        },
        ...state,
      ];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return {
          ...todo,
        };
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
