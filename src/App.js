import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import img from './logo.svg';
import './App.css';
import { setVanillaName, updateVanillaDeep, setImmutableName, updateImmutableDeep } from './redux/actions/actions';

class App extends Component {

  render() {
    const {vanilla} = this.props;
    const {immutable} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="Logo"></img>
          <h1>Immutable Trainning</h1>
        </header>

        <div>

          <h2>Vanilla JS</h2>
          
          <p className="App-intro">
            Name: {vanilla.name}, <br/>
            State: {vanilla.location.state}, <br/>
            City: {vanilla.location.city} <br/>
          </p>
          
          <h2>Immutable.js</h2>
          
          <p className="App-intro">
            Name: {immutable.get('name')}, <br/>
            State: {immutable.getIn(['location', 'state'])}, <br/>
            City: {immutable.getIn(['location', 'city'])} <br/>
          </p>
          
          <button onClick={this.props.setVanillaName} id="vanillaName">Update Name - Vanilla</button>
          <button onClick={this.props.updateVanillaDeep} id="vanillaDeep">Update State - Vanilla</button>
          <button onClick={this.props.setImmutableName} id="immutableName">Update Name - Immutable</button>
          <button onClick={this.props.updateImmutableDeep} id="immutableDeep">Update State - Immutable</button>
        </div>
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
      setVanillaName: () => dispatch(setVanillaName('Daniel Lanna')),
      updateVanillaDeep: () => dispatch(updateVanillaDeep('Minas Gerais')),
      setImmutableName: () => dispatch(setImmutableName('Daniel Lanna')),
      updateImmutableDeep: () => dispatch(updateImmutableDeep('Minas Gerais')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
