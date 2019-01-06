import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      todoText: event.target.value
    });
  }

  handleSubmit() {
    if (!this.state.todoText.trim()) return;
    const newTodo = {
      text: this.state.todoText.trim(),
      id: new Date().getTime()
    };
    this.props.handleAdd(newTodo);
    this.setState({
      todoText: ''
    })
  }

  render() {
    return (
      <div className="row">
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
          className="column column-60"
        />
        <button className="button button-outline column column-10" onClick={this.handleSubmit}> + </button>
      </div>
    );
  }
}

export default AddTodo;
