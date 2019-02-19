import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";
import TaskList from "../taskList";
import { GlobalProvider } from "../context/globalContext";
import TodoJsonData from "../../todoJsonData";

test("add a new task (unit test)", () => {
  const reducer = (state, action) => {
    return state;
  };
  // overriding the reducer because we're just testing this component.
  const { getByText, getByTestId, container } = render(
    <GlobalProvider reducer={reducer} tasks={TodoJsonData}>
      <TaskList />
    </GlobalProvider>
  );

  let inputNewTask = getByTestId("new-task-input");

  expect(inputNewTask.value).toEqual("");
  expect(container).not.toHaveTextContent("This is my new Task");

  fireEvent.change(inputNewTask, { target: { value: "This is my new Task" } });
  fireEvent.click(getByText(/add/i));

  expect(inputNewTask.value).toEqual("");
  // no reducer was called that would add the text to the list
  expect(container).not.toHaveTextContent("This is my new Task");
});
