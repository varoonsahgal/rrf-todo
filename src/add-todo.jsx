import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

const AddTodo = ({ handleAdd }) => {
  const [todoText, setTodoText] = useState('')

  const handleChange = (event) => {
    setTodoText(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let text = todoText.trim()
    if (!text) return
    handleAdd(text)
    setTodoText('')
  }

  return (
    <form onSubmit={handleSubmit} className="row">
      <input
        type="text"
        value={todoText}
        placeholder="Add todos here..."
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="submit"> +</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleAdd: text => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(AddTodo)
