import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const [tasks, setTasks] = useState(props.tasks)

  return (
    <GlobalContext.Provider value={{
      tasks: tasks,
      setTasks: setTasks,
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
