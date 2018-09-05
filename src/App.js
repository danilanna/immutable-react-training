import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { setMutableName, updateMutableDeep, setImmutableName, updateImmutableDeep } from './redux/actions/actions';

class App extends Component {

  render() {
    console.log('render again!');
    const {mutable, immutable} = this.props;
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
        <h2>Immutable</h2>
        <p className="App-intro">
          Name: {immutable.get('name')}, <br/>
          Location: {immutable.get('location')}, <br/>
          Foo: {immutable.getIn(['foo','bar'])}, <br/>
          Baz: {immutable.getIn(['foo','baz'])}, <br/>
          list: {
            immutable.get('list').map((val) => {
              return (<span key={val}>{val}</span>)
            })
          }
        </p>
        <button onClick={this.props.setMutableName}>Set Name - Mutable</button>
        <button onClick={this.props.updateMutableDeep}>Update Deep - Mutable</button>
        <button onClick={this.props.setImmutableName}>Set Name - Immutable</button>
        <button onClick={this.props.updateImmutableDeep}>Update Deep - Immutable</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mutable: state.mutable,
  immutable: state.immutable,
});

const mapDispatchToProps = (dispatch) => {
  return {
      setMutableName: (evt) => dispatch(setMutableName('Mutable Daniel')),
      updateMutableDeep: (evt) => dispatch(updateMutableDeep('Mutable Deep bar')),
      setImmutableName: (evt) => dispatch(setImmutableName('Immutable Daniel')),
      updateImmutableDeep: (evt) => dispatch(updateImmutableDeep('Immutable Deep bar')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
