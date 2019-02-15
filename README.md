## Creating Your Own Custom React Webhook

In this post we are going to create our own custom webhook.  But before we do I would like to answer the question why you would want to use webhooks and go over a few of the built in react hooks `useState` and `useEffect`.

#### Why webhooks? 

Well a quick summary into why you should use hooks and the benefits they provide.  
*  It gives you the ability to connect and reuse stateful logic, removing the need for render props and higher-order components.
*  It helps take a complex component where logic is spread out and shared among it’s many lifecycle methods and put shared logic into smaller independent functions. 
*  It reduces confusion on when or why you need a component to be a class versus a function.

For more information on the motivations and the benefits of web hooks I would refer you to https://reactjs.org/docs/hooks-intro.html.


#### useState at a Glance

I am not going into great detail about useState but will give a quick rundown.  The useState hook allows you to give a functional component state.  It does this by returning state variables and a function to update that state variable.
