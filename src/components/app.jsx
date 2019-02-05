import React from 'react';
import { GlobalProvider } from './context/globalContext'
import TaskList from './taskList'

const App = (props) => {
  return (
    <GlobalProvider {...props} >
      <div className="container-fluid" style={{marginTop: "20px"}}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">TODO's with React Hooks</h5>
            <div className="card-text">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App;
