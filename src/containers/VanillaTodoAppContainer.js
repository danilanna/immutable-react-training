import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/vanillaActions';
import TodoList from '../components/TodoList'
import TodoHeader from '../components/TodoHeader'
import TodoTools from '../components/TodoTools'
import Footer from '../components/Footer'

class TodoApp extends Component {

  render() {
    return <div>
      <section className="todoapp">
        <TodoHeader addItem={this.props.addItem}/>
        <TodoList {...this.props} />
        <TodoTools changeFilter={this.props.changeFilter} filter={this.props.filter} quantityActiveItems={this.props.actives} clearCompleted={this.props.clearCompleted}/>
      </section>
      <Footer />
    </div>
  }
};

function mapStateToProps(state) {
  return {
    todos: state.vanilla.todos,
    filter: state.vanilla.filter,
    actives: state.vanilla.actives
  };
}

export const VanillaTodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
