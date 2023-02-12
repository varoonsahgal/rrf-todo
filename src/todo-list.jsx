import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Todo from './todo.jsx'
import axios from 'axios'
import { receiveTodos, loadTodos, removeTodo} from './actions'

const TodoList = ({ todos, removeTodo, dispatch }) => {
  //here we are making a call to our server
  //to retrieve the initial list of todos
  //once we get the list from our server, 
  //we will send the data as an action payload to the reducer...
  //that way we can load the initial todos via Redux

  //why are we using useEffect?
  //BEFORE THE NETWORK CALL TO AXIOS WAS INSIDE REACT
  //AFTER: THE NETWORK CALL IS INSIDE REDUX
  // useEffect(() => {
  //   axios.get('http://localhost:8000/todos')
  //     .then(({ data }) => {
  //       receiveTodos(data) //currently not working - not sending anything to the Redux store!
  //     })
  // }, [])

  useEffect(() => {
    dispatch(loadTodos()) //i don't currently have access to dispatch!
  }, [])

  //doing it this way means that we no longer need to put it inside of
  //MDTP, and we can get rid of MDTP
  removeTodo = id => (dispatch({type: 'REMOVE_TODO', id}))

  return(
  <div>
    <p><b>Your Todos:</b></p>
    {todos.length > 0 ? (
      todos.map(todo => (
        <Todo todo={todo} remove={removeTodo} key={todo.id} />
      ))
    ) : (
      <h3>No Todos remaining!</h3>
    )}
  </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state,
})

//to get direct access to dispatch, we need to get rid of this:
//wherever removetodo/receiveTodos are being used we would use dispatch instead..
//const mapDispatch = { removeTodo}

export default connect(mapStateToProps, null)(TodoList)
