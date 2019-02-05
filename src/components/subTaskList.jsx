import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'

const SubTaskList = (props) => {
  const context = useContext(GlobalContext)
  const [newSubTask, setNewSubTask] = useState("")

  const task = context.tasks[props.taskIdx]

  const addSubTask = (e) => {
    if(e.key===undefined || e.key==='Enter') {
      context.setTasks(() => {
        return _.map(context.tasks, (task, idx) => {
          if(idx===props.taskIdx) {
            return {
              ...task,
              ['subTasks']: [...task['subTasks'], {name: newSubTask}]
            }
          } else {
            return task
          }
        })
      }, setNewSubTask(""))
    }
  }

  return (
    <div className="container">
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="New Sub Task"
            value={newSubTask}
            onKeyPress={(e) => addSubTask(e)}
            onChange={(e) => (setNewSubTask(e.target.value))}
            />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={addSubTask}>Add</button>
        </div>
      </div>

      <ul>
        {_.map(task.subTasks, (subTask, indx) => (
          <li key={indx}>{subTask.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SubTaskList
