import axios from "axios"

export const addTodo = text => ({ type: 'ADD_TODO', text })
export const removeTodo = id => ({ type: 'REMOVE_TODO', id })
export const receiveTodos = todos => ({ type: 'RECEIVE_TODOS', todos })

//THIS IS A THUNK:
//WE DO NOT EXPLICITLY SEE THE WORD "THUNK BEING USED HERE:"
export const loadTodos = () => (
    async (dispatch, getState) => {
     const { data } = await axios.get('http://localhost:8000/todos')
      dispatch(receiveTodos(data))
    }
  )