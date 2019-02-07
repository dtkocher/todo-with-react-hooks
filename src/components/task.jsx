import React, { useState, useContext } from 'react'
import _ from 'lodash'
import SubTaskList from './subTaskList'
import { GlobalContext } from './context/globalContext'

const Task = (props) => {
  const context = useContext(GlobalContext)
  const [expand, setExpand] = useState(false)
  const task = context.state[props.taskIdx]

  const unfinished = _.filter(task.subTasks, (subTask) => { return !subTask.complete })

  return (
    <li className="list-group-item">
      <div onClick={() => setExpand(expand => !expand)}>
        {task.name} - {unfinished.length} Unfinished
      </div>
      { expand && (<SubTaskList taskIdx={props.taskIdx}/>) }
    </li>
  )
}

export default Task
