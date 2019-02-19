import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";
import App from "../app";

test("App should have title ", () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent("TODO's with React Hooks");
});

test("Big bad scary example test", () => {
  const { debug, getByText, getByTestId, container } = render( <App /> )
  // add a task
  let inputNewTask = getByTestId("new-task-input");
  expect(inputNewTask.value).toEqual("");
  expect(container).not.toHaveTextContent("This is my new Task");
  fireEvent.change(inputNewTask, { target: { value: "This is my new Task" } });
  fireEvent.click(getByText(/add/i));
  expect(inputNewTask.value).toEqual("");
  expect(container).toHaveTextContent("This is my new Task");

  // debug() prints out what the page looks like at this very moment
  debug()

  // add a subtask
  fireEvent.click(getByTestId("task-div-0"))
  let inputNewSubtask = getByTestId("new-subtask-input-0")
  expect(inputNewSubtask.value).toEqual("")
  expect(container).not.toHaveTextContent("This is my new sub task")
  fireEvent.change(inputNewSubtask, {target: {value: "This is my new sub task"}})
  fireEvent.click(getByTestId("add-new-subtask-button-0"))
  expect(inputNewSubtask.value).toEqual("")
  expect(container).toHaveTextContent("This is my new sub task")

  // click the checkbox
  let subtaskCheckboxButton = getByText("This is my new sub task")
  expect(container).toHaveTextContent("This is my new Task - 1 Unfinished")
  fireEvent.click(subtaskCheckboxButton)
  expect(container).toHaveTextContent("This is my new Task - 0 Unfinished")

})
