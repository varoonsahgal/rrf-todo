import React from 'react'
import { connect } from 'react-redux'
import Todo from './todo.jsx'
import { removeTodo } from './actions'

const TodoList = ({ todos, handleRemove }) => (
  <div>
    <p><b>Your Todos:</b></p>
    {todos.length > 0 ? (
      todos.map(todo => (
        <Todo todo={todo} remove={handleRemove} key={todo.id} />
      ))
    ) : (
      <h3>No Todos remaining!</h3>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  todos: state,
})

const mapDispatch = (dispatch) => ({
  handleRemove: id => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatch)(TodoList)
