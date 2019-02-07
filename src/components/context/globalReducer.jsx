import _ from 'lodash'

export const GlobalReducer = (state, action) => {

  const addSubTask = (taskIdx, newSubTask) => {
    return _.map(state, (task, idx) => {
      if(idx===taskIdx) {
        return {
          ...task,
          ['subTasks']: [...task['subTasks'], {name: newSubTask, complete: false}]
        }
      } else {
        return task
      }
    })
  }
  const completeSubTasks = (complete, subTasks, subTaskIdx) => {
    return _.map(subTasks, (subTask, idx) => {
      if(idx === subTaskIdx) {
        return {
          ...subTask,
          ['complete']: complete
        }
      } else {
        return subTask
      }
    })
  }

  const completeTaskSubTask = (complete, taskIdx, subTaskIdx) => {
    return _.map(state, (task, idx) => {
      if(idx === taskIdx) {
        return {
          ...task,
          ['subTasks']: completeSubTasks(complete, task.subTasks, subTaskIdx)
        }
      } else {
        return task
      }
    })
  }


  switch(action.type) {
    case 'add-task':
      return [ ...state, { name: action.newTask, subTasks: [] } ]
    case 'add-sub-task':
      return addSubTask(action.taskIdx, action.newSubTask)
    case 'complete-sub-task':
      return completeTaskSubTask(action.complete, action.taskIdx, action.subTaskIdx)
    default:
      return state
  }
}
