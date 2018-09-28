import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import img from './lunch-and-learn.png';
import './App.css';
import { setVanillaName, updateVanillaDeep, setImmutableName, updateImmutableDeep } from './redux/actions/actions';

class App extends Component {

  render() {
    const {vanilla} = this.props;
    const {immutable} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
        </header>
        <h2>Vanilla JS</h2>
        <p className="App-intro">
          Name: {vanilla.name}, <br/>
          Location: {vanilla.location}, <br/>
          Foo-Bar: {vanilla.foo.bar}, <br/>
          Foo-Baz: {vanilla.foo.baz}, <br/>
          list: {
            vanilla.list.map((val) => {
              return (<span key={val}>{val}</span>)
            })
          }
        </p>
        <h2>Immutable.js</h2>
        <p className="App-intro">
          Name: {immutable.get('name')}, <br/>
          Location: {immutable.get('location')}, <br/>
          Foo-Bar: {immutable.getIn(['foo', 'bar'])}, <br/>
          Foo-Baz: {immutable.getIn(['foo', 'baz'])}, <br/>
          list: {
            immutable.get('list').map((val) => {
              return (<span key={val}>{val}</span>)
            })
          }
        </p>
        <button onClick={this.props.setVanillaName}>Set Name - Vanilla</button>
        <button onClick={this.props.updateVanillaDeep}>Update - Vanilla</button>
        <button onClick={this.props.setImmutableName}>Set Name - Immutable</button>
        <button onClick={this.props.updateImmutableDeep}>Update - Immutable</button>
      </div>
    );
  }
}

window.Immutable = Immutable;

const mapStateToProps = state => ({
  vanilla: state.vanilla,
  immutable: state.immutable
});

const mapDispatchToProps = (dispatch) => {
  return {
      setVanillaName: () => dispatch(setVanillaName('Updating Vanilla Daniel')),
      updateVanillaDeep: () => dispatch(updateVanillaDeep('Updating Vanilla Deep bar')),
      setImmutableName: () => dispatch(setImmutableName('Updating Immutable Daniel')),
      updateImmutableDeep: () => dispatch(updateImmutableDeep('Updating Immutable Deep bar')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
