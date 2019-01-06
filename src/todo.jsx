import React from 'react';

const Todo = ({todo, remove}) => (
  <li>
    {todo.text}
    <span
      onClick={() => {
        remove(todo.id);
      }}>
      <b>&nbsp;XX</b>
    </span>
  </li>
);

export default Todo;
