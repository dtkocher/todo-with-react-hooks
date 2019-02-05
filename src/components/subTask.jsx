import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'

const SubTask = (props) => {
  const context = useContext(GlobalContext)
  const subTask = context.tasks[props.taskIdx].subTasks[props.subTaskIdx]
  const [complete, setComplete] = useState(subTask.complete)


  const updatedSubTasks = (subTasks) => {
    return _.map(subTasks, (subTask, idx) => {
      if(idx === props.subTaskIdx) {
        return {
          ...subTask,
          ['complete']: !complete
        }
      } else {
        return subTask
      }
    })
  }

  const updatedTasks = (tasks) => {
    return _.map(tasks, (task, idx) => {
      if(idx === props.taskIdx) {
        return {
          ...task,
          ['subTasks']: updatedSubTasks(task.subTasks)
        }
      } else {
        return task
      }
    })
  }

  const updateActive = () => {
    context.setTasks(
      (tasks) => updatedTasks(tasks),
      setComplete(complete => !complete)
    )
  }


  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        checked={complete}
        onChange={()=>{}}
        />
      <label
        className="custom-control-label"
        onClick={updateActive}
        >
        {subTask.name}
      </label>
    </div>
  )
}

export default SubTask
