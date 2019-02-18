## Creating Your Own Custom React Webhook

In this post we are going to create our own custom webhook.  But before we do I would like to answer the question why you would want to use webhooks and go over a few of the built in react hooks `useState` and `useEffect`.

#### Why webhooks? 

Well a quick summary into why you should use hooks and the benefits they provide.  
*  It gives you the ability to connect and reuse stateful logic, removing the need for render props and higher-order components.
*  It helps take a complex component where logic is spread out and shared among it’s many lifecycle methods and put shared logic into smaller independent functions. 
*  It reduces confusion on when or why you need a component to be a class versus a function.

For more information on the motivations and the benefits of web hooks I would refer you to https://reactjs.org/docs/hooks-intro.html.


#### useState at a Glance

The useState hook allows you to give a functional component, state. Meaning you will no longer need to worry about making a class component if you want to have state in a functional component.  Lets look at a small example and explain what is going on.

```javascript
import React, { useState } from "react";
import _ from "lodash";

export default function Tasks(props) {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <div>
        {_.map(tasks, task => (
          <div>{task}</div>
        ))}
      </div>
    </div>
  );
}
```

In this example we are making a tasks list. The user types in a task, clicks the Add button, and a task is added to the task list.  So what is going on with the react hook `useState`?

*  Everytime `useState()` is called two things are returned.  A new state variable and a function to update the state variable.  As you can see `const [newTask, setNewTask] = useState()` creates a new state variable and using array deconstruction we call the new state variable `newTask` and the function to update this variable `setNewTask` 
*  You can give a state variable an inital value by passing in an argument to `useState`.  On the following line we give the state variable `tasks` an intital value of an empty array, `const [tasks, setTasks] = useState([])`.  Here it is an array but it can be anything from a string, integer, to an object.
*  To use or display the state variables all you need to do is call the state variabes `tasks` or `newTask` directly.
*  To update a state variable lets look at the `addTask()` function.  Inside this function you can see we are updating both the `tasks` state variable and `newTasks` state variable.  In both examples you can see we just pass in a new value to the update function and react will re-render the component with the new value. One thing to point out is you will want to follow the same rules you always have of not mutating the state variable directly but recreating it and adding to it.  As you can see in `setTasks([...tasks, newTask])` we create a new array by desconstructing the `tasks` state variable and append the `newTask` state variable to the end.


