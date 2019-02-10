import React, { useEffect, useContext, useState } from 'react'
import _ from 'lodash'
import { GlobalContext } from './context/globalContext'
import { useGet } from './hooks/useGet'
import Task from './task'

const TaskList = (props) => {
  const context = useContext(GlobalContext)
  const [newTask, setNewTask] = useState("")

  useEffect(()=> {
    useGet('https://api.myjson.com/bins/d6uvc').
      then((response) => {
        context.dispatch({type: 'set-tasks', tasks: response.data})
      }).
      catch(errors => console.log(errors))
  }, [])

  const addTask = (e) => {
    if((e.key===undefined || e.key==='Enter') && newTask !== '') {
      context.dispatch({
        type: 'add-task',
        newTask: newTask
      })
      setNewTask("")
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
            {_.map(context.state, (task, indx) => (
              <Task key={indx} taskIdx={indx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default TaskList
