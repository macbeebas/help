import React, { Component } from 'react';

export default class FeedbackStatistics extends Component {
  render() {
    const { good, bad, neutral, total, procent } = this.props;
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Bad: {bad}</li>
          <li>Neutral: {neutral}</li>
          <li>Total: {total}</li>
          <li>Procent: {procent}%</li>
        </ul>
      </div>
    );
  }
}
