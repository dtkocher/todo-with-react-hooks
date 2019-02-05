import React, { useState, useContext } from 'react'
import SubTaskList from './subTaskList'
import { GlobalContext } from './context/globalContext'

const Task = (props) => {
  const context = useContext(GlobalContext)
  const [expand, setExpand] = useState(false)

  return (
    <li className="list-group-item">
      <div onClick={() => setExpand(expand => !expand)}>
        {context.tasks[props.taskIdx].name}
      </div>
      { expand && (<SubTaskList taskIdx={props.taskIdx}/>) }
    </li>
  )
}

export default Task
