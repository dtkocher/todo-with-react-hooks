import React, { useContext, useState } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'
import Task from './task'

const TaskList = (props) => {
  const context = useContext(GlobalContext)
  const [newTask, setNewTask] = useState("")

  const addTask = (e) => {
    if((e.key===undefined || e.key==='Enter') && newTask !== '') {
      context.setTasks(
        (tasks) => ([...tasks, { name: newTask, subTasks: [] }]),
        setNewTask("")
      )
    }
  }

  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="New Task"
            value={newTask}
            onKeyPress={e => addTask(e)}
            onChange={(e) => (setNewTask(e.target.value))}
            />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={addTask}>Add</button>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <ul className="list-group list-group-flush">
            {_.map(context.tasks, (task, indx) => (
              <Task key={indx} taskIdx={indx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default TaskList
