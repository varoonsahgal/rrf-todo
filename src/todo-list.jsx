import React from 'react';
import Todo from './todo.jsx';

const TodoList = ({ todos, handleRemove }) => {
  function renderList() {
    if (todos.length === 0) {
      return <h3>No Todos remaining!</h3>;
    }
    return (
      <ul>{
        todos.map(todo =>
          <Todo todo={todo} remove={handleRemove} key={todo.id} />
        )
      }</ul>
    );
  }

  return (
    <div>
      <span className="row"><b>Your Todos:</b></span>
      {renderList()}
    </div>
  );
};

export default TodoList;
