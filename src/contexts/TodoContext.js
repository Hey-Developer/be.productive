import React, { createContext, useContext, useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import moment from "moment";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

// const initialState = [
//   {
//     id: "001",
//     title: "Learn React 🔥",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere, maxime quas maiores officiis distinctio non blanditiis at ducimus deserunt tempore reprehenderit dolor culpa iste cum eligendi perferendis. Debitis, corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere, maxime quas maiores officiis distinctio non blanditiis at ducimus deserunt tempore reprehenderit dolor culpa iste cum eligendi perferendis. Debitis, corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere, maxime quas maiores officiis distinctio non blanditiis at ducimus deserunt tempore reprehenderit dolor culpa iste cum eligendi perferendis. Debitis, corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere, maxime quas maiores officiis distinctio non blanditiis at ducimus deserunt tempore reprehenderit dolor culpa iste cum eligendi perferendis. Debitis, corrupti.",
//     date: moment().add(2, "days").format("YYYY-MM-DD"),
//     completed: false,
//   },
//   {
//     id: "002",
//     title: "Learn Vue 🔥",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere, maxime quas maiores officiis distinctio non blanditiis at ducimus deserunt tempore reprehenderit dolor culpa iste cum eligendi perferendis. Debitis, corrupti.",
//     date: moment().subtract(2, "days").format("YYYY-MM-DD"),
//     completed: true,
//   },
// ];

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("be.productive-todos");

    return localData ? JSON.parse(localData) : [];
  });

  //-- To save our data in the localStorage..
  useEffect(() => {
    localStorage.setItem("be.productive-todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
