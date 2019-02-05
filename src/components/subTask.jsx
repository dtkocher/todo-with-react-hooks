import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/globalContext'

const SubTask = (props) => {
  const context = useContext(GlobalContext)

  const subTask = context.tasks[props.taskIdx].subTasks[props.subTaskIdx]

  return (
    <React.Fragment>
      {subTask.name}
    </React.Fragment>
  )
}

export default SubTask
