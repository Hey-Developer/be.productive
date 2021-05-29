import React from "react";
import AddTodo from "./AddTodo/AddTodo";
import { TodoContainer } from "./todo.styles";
import TodoList from "./TodoList/TodoList";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library Creation
library.add(fas);

const Todo = ({ maximize, setMaximize }) => {
  return (
    <TodoContainer>
      <AddTodo />
      <TodoList />
      {maximize ? (
        <FontAwesomeIcon
          onClick={() => setMaximize(!maximize)}
          icon={["fas", "external-link-square-alt"]}
          className="text-2xl text-black hover:text-appAccent4 transform hover:scale-125 transition-all mr-1 mt-1 rotate-180 absolute right-4 bottom-4"
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => setMaximize(!maximize)}
          icon={["fas", "external-link-square-alt"]}
          className="text-2xl text-black hover:text-appAccent4 transform hover:scale-125 transition-all mr-1 mt-1 absolute right-4 bottom-4"
        />
      )}
    </TodoContainer>
  );
};

export default Todo;
