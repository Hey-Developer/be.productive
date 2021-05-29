import React, { useState } from "react";
import {
  TodoCategoryTitle,
  TodoListUl,
  TodoListWrapper,
} from "./todoList.styles.tw";
import { useTodo } from "../../../contexts/TodoContext";
import TodoListItem from "./TodoListItem";
import moment from "moment";

const TodoList = () => {
  const { todos } = useTodo();

  const sortedAllTodos = todos.sort((a, b) => {
    if (moment(a.date).isBefore(b.date)) return 1;
    if (moment(a.date).isAfter(b.date)) return -1;
    return 0;
  });

  const allTodos = sortedAllTodos.filter((todo) => !todo.completed);
  const completedTodos = sortedAllTodos.filter((todo) => todo.completed);

  console.log(sortedAllTodos);
  return (
    <TodoListWrapper>
      {todos.length > 0 ? (
        <>
          <TodoCategoryTitle>Tasks - {allTodos.length}</TodoCategoryTitle>
          {allTodos.length > 0 && (
            <TodoListUl>
              {allTodos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} />
              ))}
            </TodoListUl>
          )}
          {allTodos.length === 0 && <span className="my-3"></span>}
          <TodoCategoryTitle>
            Completed - {completedTodos.length}
          </TodoCategoryTitle>
          {completedTodos.length > 0 && (
            <TodoListUl>
              {completedTodos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} />
              ))}
            </TodoListUl>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-appAccent1 capitalize">
          You Don't have any todo yet, add todo 👆🏻
        </div>
      )}
    </TodoListWrapper>
  );
};

export default TodoList;
