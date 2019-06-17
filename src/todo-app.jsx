import React, {useState } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import styles from './todos.module.css'

const TodoApp = () => {

    const [todoState, setTodoState] = useState(
        [
          { text: " This is a simple todo list app written in React!", id: 1 },
          { text: "Hover over todos and click on the `XX` to delete them!", id: 2 },
          { text: "Add new todos if you like!", id: 3 }
        ]
      );

  function addTodo(todo) {

    setTodoState([...todoState, todo]);

  }

  function removeTodo(id) {

    setTodoState(todoState.filter(todo => todo.id !== id));

    }

  return (
        <div className={styles.wrapper}>
          <Title />
          <AddTodo handleAdd={addTodo} />
          <TodoList todos={todoState} handleRemove={removeTodo} />
        </div>
      );
}

export default TodoApp;
