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

export default function Task(props) {
  const [task, setTask] = useState();

  return (
    <div>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      {task}
    </div>
  );
}
```
