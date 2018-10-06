import React, { PureComponent } from 'react';
import { isImmutable } from 'immutable';
import TodoItem from './TodoItem';

export default class TodoList extends PureComponent {

  getItems() {
    const todos = this.props.todos;
    if (todos) {
        return todos.filter((item) => 
            this.props.filter === 'all' || (isImmutable(todos) ? item.get('status') : item.status) === this.props.filter
        );
    }
    return [];
  }

  isCompleted(item) {
      const status = isImmutable(item) ? item.get('status') : item.status;
      return status === 'completed';
  }

  getId(item) {
    return isImmutable(item) ? item.get('id') : item.id;
  }

  getText(item) {
    return isImmutable(item) ? item.get('text') : item.text;
  }

  render() {
    return (
    <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={this.getId(item)}
                    id={this.getId(item)}
                    text={this.getText(item)}
                    isCompleted={this.isCompleted(item)}
                    toggleComplete={this.props.toggleComplete}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}/>
        )}
      </ul>
    </section>
    )
  }
};