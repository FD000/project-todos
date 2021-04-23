import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import TodoList from './components/TodoList'
import todos from './reducers/todos'
import TodoForm from './components/TodoForm'
import TopSection from './components/TopSection'
import Wrapper from './components/Wrapper'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  )
}
