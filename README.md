# Assignment Questions

### What is JSX, and why is it used?

JSX stands for JavaScript XML. Its a like a syntactic sugar added on JavaScript. JSX codes look like HTML, but those are actually JavaScript.

It is used in React to build used interfaces following step-by-step component model, which meant to be highly reusuable.

Having said that, HTML has been evolving as merely a markup language and with advancement of web, we started using JS to build functionalities and implement business logics. Coding integration became a tedious challenge, and this is wher JSX came handy. 

JSX let us writing HTML codes in the JS files. It also help reduce the amout of code considerably, comparing with the vanila version. Besides, it increases human readability as well. Yet, we can inject vanila JS as and when required in JSX using {}, which further elevates the level of convenience.


### What is the difference between States and Props?

Props refer to the argument value-passing mechanism as parameters from the parent to child components, whereas States are value-storage-and-retrival mechanism in a way that as and when the stored value is updated, all elements associated with that value is re-rended as well. This value for both can be anything simple or complex, ranging from variables to structured/unstructured files, even functions as well.

Lets assume we store a value in a variable and keep passing that as props to different functions. These functions prints that value on different pages. Now if the stored value is changed, those pages will not reflect that automatically. But if we do the same using States, all pages will be re-rendered as soon as the State value is changed.

While the aforementioned is the main conceptual difference between Props and States, there are number functional/operational differences as well.

1. Prop values (in argument states) can be initialized/updated in traditional way. In the contrary, States offer us a dedicated funtion to have the stored value changed.

2. States are mutable, whereas props are mutable only at it's argument state in the parent components, but immutable inside the child components.

3. Normally props work in one direction only (downwards), which is not the case with states.


### What is the useState hook, and how does it work?

The useState is a hook that let us use the state feature, descrived in my response to the earlier question above, accross React functions.

Syntax:

Initial Declaration: const [state-variable, setter-function] = useState(initial-value)
Successive Updates: setter-function (new-value)

How it Works:

1) With declaration, the state-variable is created with the specified initial-value.
2) It keeps track of the components associated with the state-variable, and the update event of the state-variable via the setter-function ensures to re-render all those components.

The useState hook is a powerful feature in React that enables functional components to manage and update local states. In a simple and straight-forward way. Earlier the same was being done using useEffect hook, which was little more complicated.


### How can you share state between components in React?

We can share states between components by using useState, and passing the state variable and associated setter function as props.

Details of declaring states and the way to update a state variable have been explained in my aforementioned response to the earlier question. Now, there are several ways of sharing the state variable and function, each suitable for specific scenarios.

1. Prop drilling - to keep sharing state arguments as props from parent to child components
2. Lifting state up - to move to the closest common parent to reach a distant child
3. Context API - if the state is required by a number of components, which are not suitable or reachable via prop drilling and lifting state up

Besides, there are some state management libraries too that are suitable for more complex and/or scaling scenario. Zustand and Redux are worth mentions among them.


### How is event handling done in React?

As Reacts have its own version of DOM implementation, it has it's own event system. An event handler is attached directly as functions to the JSX elements.

Syntax:

1. elementName.onEvent = {handlerFunction | expression/s}
2. elementName.onEvent = () => {handlerFunction() | expression/s}
3. elementName.onEvent = () => {handlerFunction(parameters) | expression/s}
4. elementName.onEvent = (event) => {handlerFunction(event) | expression/s}

Notes:

- Event names are in camelCase in React, in oppose to the lowercase convention followed in HTML attributes
- We can write single/multiple expressions in-place or name a function there
- If its just a single expression written in-place, return happens implicitly, we don't need to use that keyword
- Event handler names have a conventional prefix "handler" - recommended, yet not a must
- Usually handler names are not followed by (), which means calling a function in React
- If we must pass a parameter, using arrow functions lets us doing so, as shown in #3 syntax above
- If you want to have target details in order to utlize event bubbling, #4 above can be helpful - could use event.target to get element details and use event.stopPropagation() to stop the bubble chain

Its to mention that React's event system is called Synthetic Event, which is a wrapper around the browser's native events.


## LINKS

LIVE: https://w3ssmnt-phero-react-cszone-b12a7.netlify.app/
REPO: https://github.com/mhasantushar/w3ssmnt-phero-react-cszone-b12a7