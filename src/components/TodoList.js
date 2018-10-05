import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends PureComponent {

  getItems() {
    const todos = this.props.todos;
    if (todos) {
        return todos.filter((item) => 
            this.props.filter === 'all' || item.status === this.props.filter
        );
    }
    return [];
  }

  render() {
    return (
    <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={item.id}
                    id={item.id}
                    text={item.text}
                    isEditing={item.editing}
                    isCompleted={item.status === 'completed'}
                    doneEditing={this.props.doneEditing}
                    cancelEditing={this.props.cancelEditing}
                    toggleComplete={this.props.toggleComplete}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}/>
        )}
      </ul>
    </section>
    )
  }
};