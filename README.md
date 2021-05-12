# Getting Started with React using Create React App

This react app was built as part of the online training on react js. The purpose of building this project was to learn the necessary concepts of react by building the app.

## The main points to note about React.js

1. The best practices to writing components that communicate with each other are to create dynamic, interactive UIs (user interfaces) such as breaking up of components into modules (individual JavaScript files) as modules provide a better way to organize and maintain react code


2. Components do communicate with each other &
data just flows down one way and any time a child component changes, they just trigger an event on the parent
3. props and state, react form, use of componentDidMount()
   

### Use of Local Storage (an object offered by the Browser)

1. It has two functions: setItem(what to store, item name), getItem(what to store)
2. It only supports strings & JSON.springify converts arrays of objects into strings
3. JSON.parse converts strings to objects
4. componentDidMount() updates the state


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. 

