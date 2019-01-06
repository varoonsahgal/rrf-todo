import React, { Component } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import styles from './todos.module.css'

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { text: " This is a simple todo list app written in React!", id: 1 },
        { text: "Hover over todos and click on the `XX` to delete them!", id: 2 },
        { text: "Add new todos if you like!", id: 3 }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}
