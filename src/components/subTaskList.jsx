import React, { useState, useContext } from 'react'
import _ from 'lodash'
import SubTask from './subTask'
import { GlobalContext } from './context/globalContext'

const SubTaskList = (props) => {
  const context = useContext(GlobalContext)
  const [newSubTask, setNewSubTask] = useState("")
  const task = context.state[props.taskIdx]

  const addSubTask = (e) => {
    if((e.key===undefined || e.key==='Enter') && newSubTask !== '') {
      context.dispatch({
        type: 'add-sub-task',
        taskIdx: props.taskIdx,
        newSubTask: newSubTask
      })
      setNewSubTask("")
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
            data-testid={`new-subtask-input-${props.taskIdx}`}
            />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={addSubTask}
            data-testid={`add-new-subtask-button-${props.taskIdx}`}
            >Add</button>
        </div>
      </div>

      <ul>
        {_.map(task.subTasks, (subTask, idx) => (
          <li key={idx}>
            <SubTask taskIdx={props.taskIdx} subTaskIdx={idx} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubTaskList
