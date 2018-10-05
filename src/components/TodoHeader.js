import React, { PureComponent } from 'react';

export default class TodoHeader extends PureComponent {

  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.textInput.value !== '') {
      const itemText = this.textInput.value;
      this.textInput.value = '';
      return this.props.addItem(itemText);
    }
  }

  render() {
    return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" ref={this.setTextInputRef} autoFocus placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} />
    </header>
    )
  }
};
