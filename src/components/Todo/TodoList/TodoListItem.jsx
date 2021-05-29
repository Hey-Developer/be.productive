// Packages Import
import React, { useState } from "react";
import moment from "moment";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Contexts Import
import { useTodo } from "../../../contexts/TodoContext";
import { deleteTodo, toggleTodo } from "../../../contexts/TodoActions";

// Styles Import
import {
  CompleteIcon,
  DateWrapper,
  DeleteIcon,
  Description,
  DownIcon,
  IncompleteIcon,
  TodoListLi,
  TodoTitle,
} from "./todoList.styles.tw";

// Library Creation
library.add(fas);

const TodoListItem = ({ todo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { dispatch } = useTodo();

  const deleteTodoHandler = (id) => {
    const check = window.confirm("Are you sure you want to delete!");
    if (check) dispatch(deleteTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <TodoListLi completed={todo.completed}>
      {todo.completed ? (
        <CompleteIcon
          onClick={() => toggleTodoHandler(todo.id)}
          icon={["fas", "check-circle"]}
        />
      ) : (
        <IncompleteIcon onClick={() => toggleTodoHandler(todo.id)} />
      )}
      <div className="flex flex-col flex-grow">
        <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
        <Description showDescription={showDescription}>
          {todo.description === "" ? "No Description" : todo.description}
        </Description>
        <DateWrapper showDescription={showDescription}>
          <FontAwesomeIcon icon={["fas", "calendar-alt"]} className="text-lg" />
          <p>{moment(todo.date).calendar()}</p>
        </DateWrapper>
      </div>
      <div className="flex items-center">
        <DeleteIcon onClick={() => deleteTodoHandler(todo.id)}>
          <FontAwesomeIcon icon={["fas", "trash"]} />
        </DeleteIcon>
        <DownIcon onClick={() => setShowDescription(!showDescription)}>
          {!showDescription ? (
            <FontAwesomeIcon icon={["fas", "chevron-down"]} />
          ) : (
            <FontAwesomeIcon icon={["fas", "chevron-up"]} />
          )}
        </DownIcon>
      </div>
    </TodoListLi>
  );
};

export default TodoListItem;
