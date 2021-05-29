import React, { useState } from "react";
import {
  AddIcon,
  AddTodoBtn,
  AddTodoForm,
  AddTodoWrapper,
  DateSelect,
  DateSelectBtn,
  DateSelectInput,
  Input,
  InputLabel,
  SubmitBtn,
  SubmitWrapper,
  TextArea,
} from "./addTodo.styles.tw";
// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useTodo } from "../../../contexts/TodoContext";
import { addTodo } from "../../../contexts/TodoActions";

// Library Creation
library.add(fas);

const initialData = {
  title: "",
  description: "",
  date: "",
};

const AddTodo = () => {
  const [openForm, setOpenForm] = useState(false);
  const [todoFormVal, setTodoFormVal] = useState(initialData);
  const [index, setIndex] = useState();
  const { dispatch } = useTodo();

  const handleChange = (e) => {
    setTodoFormVal({
      ...todoFormVal,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "date") {
      setTodoFormVal({
        ...todoFormVal,
        date: moment(e.target.value).format("YYYY-MM-DD"),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoFormVal.date === "") alert("Date is not selected ");
    else {
      dispatch(addTodo(todoFormVal));
      setOpenForm(false);
    }
  };

  const setTodaysDate = () => {
    setTodoFormVal({
      ...todoFormVal,
      date: moment().format("YYYY-MM-DD"),
    });
  };
  const setTomorrowsDate = () => {
    setTodoFormVal({
      ...todoFormVal,
      date: moment().add("1", "days").format("YYYY-MM-DD"),
    });
  };

  return (
    <AddTodoWrapper>
      <AddTodoBtn onClick={() => setOpenForm(true)}>
        <AddIcon>
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </AddIcon>
        Add a task
      </AddTodoBtn>
      {openForm && (
        <AddTodoForm action="#" onSubmit={handleSubmit}>
          <div className="flex-shrink-0 mt-1 flex rounded-md shadow-sm">
            <InputLabel>ToDo</InputLabel>
            <Input
              type="text"
              name="title"
              value={todoFormVal.title}
              onChange={handleChange}
              required
              placeholder="complete the react tutorials 🚀"
            />
          </div>
          <div className="flex-shrink-0 mt-2">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <TextArea
                name="description"
                value={todoFormVal.description}
                onChange={handleChange}
                rows="3"
                placeholder="Watch React YT Video & complete project mockups"></TextArea>
            </div>
          </div>
          <div className="flex-shrink-0 flex mt-4 ">
            <DateSelect>
              <DateSelectBtn
                selected={index === 0}
                onClick={() => {
                  setIndex(0);
                  setTodaysDate();
                }}>
                Today
              </DateSelectBtn>
              <DateSelectBtn
                selected={index === 1}
                onClick={() => {
                  setIndex(1);
                  setTomorrowsDate();
                }}>
                Tomorrow
              </DateSelectBtn>
              <DateSelectInput
                selected={index === 2}
                type="date"
                name="date"
                value={todoFormVal.date}
                onChange={(e) => {
                  setIndex(2);
                  handleChange(e);
                }}
              />
            </DateSelect>
            <SubmitWrapper>
              <SubmitBtn type="submit">Add Todo</SubmitBtn>
              <SubmitBtn cancel onClick={() => setOpenForm(false)}>
                Cancel
              </SubmitBtn>
            </SubmitWrapper>
          </div>
        </AddTodoForm>
      )}
    </AddTodoWrapper>
  );
};

export default AddTodo;
