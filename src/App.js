import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { setMutableName, updateMutableDeep } from './redux/actions/actions';

class App extends Component {

  render() {
    console.log('render again!');
    const {mutable} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Mutable</h2>
        <p className="App-intro">
          Name: {mutable.name}, <br/>
          Location: {mutable.location}, <br/>
          Foo: {mutable.foo.bar}, <br/>
          Baz: {mutable.foo.baz}, <br/>
          list: {
            mutable.list.map((val) => {
              return (<span key={val}>{val}</span>)
            })
          }
        </p>
        <button onClick={this.props.setMutableName}>Set Name - Mutable</button>
        <button onClick={this.props.updateMutableDeep}>Update Deep - Mutable</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mutable: state.mutable,
});

const mapDispatchToProps = (dispatch) => {
  return {
      setMutableName: (evt) => dispatch(setMutableName('Mutable Daniel')),
      updateMutableDeep: (evt) => dispatch(updateMutableDeep('Mutable Deep bar')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
