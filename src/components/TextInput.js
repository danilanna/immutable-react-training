import React, { PureComponent } from 'react';

export default class TextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.setTextInputRef = element => {
      this.textInput = element;
      if (this.textInput) {
        this.textInput.value = this.props.text;
      }
    };
  }

  cancelEditing = () => {
    this.textInput.value = this.props.text;
    return this.props.cancelEditing(this.props.itemId);
  }

  handleKeyDown = (e) => {
    switch (e.key) {
        case 'Enter':
            return this.props.doneEditing(this.props.itemId, this.textInput.value);
        case 'Escape':
            return this.cancelEditing();
        default:
            return;
    }
  }

  handleOnBlur = (e) => {
    return this.cancelEditing();
  }
  
  render() {
    return <input className="edit" type="text" ref={this.setTextInputRef} onKeyDown={this.handleKeyDown} onBlur={this.handleOnBlur} autoFocus />
  }
};
