import React, { createContext, useContext, useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

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
