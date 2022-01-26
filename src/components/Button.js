import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type, children } = this.props;
    return (
      <button type={ type === 'button' ? 'button' : 'submit' }>{children}</button>
    );
  }
}

export default Button;
