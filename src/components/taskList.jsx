import React, { useContext } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'

const TaskList = (props) => {
  const context = useContext(GlobalContext)
  console.log(context)

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="New Task" />
          </div>
          <div className="form-group">
            <a href="" className="btn btn-primary">Add</a>
          </div>
        </div>
      </form>

      <ul>
        {_.map(context.tasks, (task, indx) => (
          <li key={indx}> {task.name} </li>
        ))}
      </ul>
    </div>
  )
}
export default TaskList
