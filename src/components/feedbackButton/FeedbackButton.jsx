import React, { Component } from 'react';

export default class FeedbackButton extends Component {
  render() {
    const { name, handleClick } = this.props;
    return (
      <button onClick={handleClick} name={name}>
        {name}
      </button>
    );
  }
}
