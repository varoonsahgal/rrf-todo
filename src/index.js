import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './todo-app'
import 'milligram'
import { Provider } from 'react-redux'
import { todos } from './reducer'
import { receiveTodos } from './actions'

import axios from 'axios'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

window.axios = axios

const store = createStore(todos, applyMiddleware(thunk))

//const store = createStore(todos)


//here we have direct access to dispatch, why?
//because we are dealing with Redux store object itself

//the change we have made here is we are now using our reducer
//to load the initial todos INSTEAD of direclty updating the intial todos in
//the createStore function...

//store.dispatch(receiveTodos(initialTodos))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
)
