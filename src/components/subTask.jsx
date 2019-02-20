import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'

const SubTask = (props) => {
  const context = useContext(GlobalContext)
  const subTask = context.state[props.taskIdx].subTasks[props.subTaskIdx]
  const [complete, setComplete] = useState(subTask.complete)

  const updateActive = () => {
    context.dispatch({
      type: 'COMPLETE_SUB_TASK',
      complete: !complete,
      taskIdx: props.taskIdx,
      subTaskIdx: props.subTaskIdx
    })
    setComplete(complete => !complete)
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
