import React, { useEffect, useContext, useState } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'
import { useGet } from './hooks/useGet'
import Task from './task'

const TaskList = (props) => {
  const context = useContext(GlobalContext)
  const [newTask, setNewTask] = useState("")
  const {data, errors} = useGet({url: 'https://api.myjson.com/bins/d6uvc', trigger: 'onLoad'})

  useEffect(() => {
    context.dispatch({type: 'set-tasks', tasks: data})
  }, [data])

  const addTask = e => {
    if ((e.key === undefined || e.key === "Enter") && newTask !== "") {
      context.dispatch({
        type: "add-task",
        newTask: newTask
      });
      setNewTask("");
    }
  };

  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="New Task"
            data-testid="new-task-input"
            value={newTask}
            onKeyPress={e => addTask(e)}
            onChange={e => setNewTask(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            data-testid="add-new-task-button"
            onClick={addTask}
            >
            Add
          </button>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
            {_.map(context.state, (task, indx) => (
              <Task key={indx} taskIdx={indx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
