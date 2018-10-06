import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class TodoItem extends PureComponent {

  render() {
    
    const itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
    });

    return (
    <li className={itemClass}>
        <div className="view">
            <input type="checkbox" className="toggle" defaultChecked={this.props.isCompleted} onClick={() => this.props.toggleComplete(this.props.id)} />
            
            <label htmlFor="todo" ref="text">
                {this.props.text}
            </label>
            
            <button className="destroy" onClick={() => this.props.deleteItem(this.props.id)}></button>
        </div>
    </li>
    )
  }
};
