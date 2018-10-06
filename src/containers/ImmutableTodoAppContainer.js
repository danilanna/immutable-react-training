import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/immutableActions';
import TodoList from '../components/TodoList';
import TodoHeader from '../components/TodoHeader';
import TodoTools from '../components/TodoTools';

class TodoApp extends Component {

  render() {
    return <div>
      <section className="todoapp">
        <TodoHeader addItem={this.props.addItem}/>
        <TodoList {...this.props} />
        <TodoTools changeFilter={this.props.changeFilter} filter={this.props.filter} clearCompleted={this.props.clearCompleted}/>
      </section>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    todos: state.immutable.get('todos'),
    filter: state.immutable.get('filter'),
  };
}

export const ImmutableTodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
