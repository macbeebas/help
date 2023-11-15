// import React from 'react';

// function Feedback({ title, text, number, isLog = false }) {
//   // const { title, text, number, islog } = props;
//   console.log(isLog);

//   const ternary = isLog ? 'Wyloguj' : 'Zaloguj';

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{text}</p>
//       <p>number</p>
//       <p>{number}</p>
//       <h1>dwadawdawda {ternary}</h1>
//       {<h1>dwadawdawda {ternary}</h1>}
//       {isLog && <button>{ternary}</button>}
//       {isLog} && <button></button>
//       {!isLog && <button>{ternary}</button>}
//     </div>
//   );
// }

// export default Feedback;
import React, { Component } from 'react';
import FeedbackButton from '../feedbackButton/FeedbackButton';

export default class Feedback extends Component {
  render() {
    const { title, children, handleClick } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <FeedbackButton name="Good" handleClick={handleClick} />
        <FeedbackButton name="Bad" handleClick={handleClick} />
        <FeedbackButton name="Neutral" handleClick={handleClick} />
        <div>{children}</div>
      </div>
    );
  }
}
