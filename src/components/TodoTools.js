import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class TodoTools extends PureComponent {

  setSelectedClass(filter) {
    return classNames({'selected': this.props.filter === filter});
  }

  render() {
    return (
    <footer className="footer">
      <ul className="filters">
        <li>
            <a href="/#" onClick={(evt) => {evt.preventDefault(); this.props.changeFilter('all')}} className={this.setSelectedClass('all')}>
                All
            </a>
        </li>
        <li>
            <a href="/#" onClick={(evt) => {evt.preventDefault();this.props.changeFilter('active')}} className={this.setSelectedClass('active')}>
                Active
            </a>
        </li>
        <li>
            <a href="/#" onClick={(evt) => {evt.preventDefault();this.props.changeFilter('completed')}} className={this.setSelectedClass('completed')}>
                Completed
            </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={this.props.clearCompleted}>
        Clear completed
      </button>
    </footer>
    )
  }
};
