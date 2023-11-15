import './App.css';
import Feedback from './components/feedback/Feedback';
// import Feedback from './components/feedback/Feedback';

// function App() {

//   return (
//     <div className="App">
//       <Feedback />
//       {/* <Feedback title="Test" text={`text ${zmienna}`} number={123} isLog={false} /> */}
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import FeedbackStatistics from './components/feedbackStatistics/FeedbackStatistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    procent: 0,
    isLog: true,
  };

  handleClick = e => {
    const buttonName = e.target.name;
    switch (buttonName) {
      case 'Good':
        console.log('Good +1');
        this.setState((state, props) => ({
          good: state.good + 1,
          total: state.total + 1,
        }));
        break;
      case 'Bad':
        console.log('Bad +1');
        this.setState((state, props) => ({
          bad: state.bad + 1,
          total: state.total + 1,
        }));
        break;
      default:
        console.log('Neutral +1');
        this.setState((state, props) => ({
          neutral: state.neutral + 1,
          total: state.total + 1,
        }));
    }
    this.setState((state, props) => ({
      procent: Math.round((state.good * 100) / state.total),
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      procent: 0,
    }));
  };

  componentDidMount() {
    console.log('zostałem zamontowany do DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    const newState = this.state;
    if (prevState !== newState) {
      console.log('zmienił mi się stan');
    }
  }

  render() {
    const { good, bad, neutral, total, procent, isLog } = this.state;

    return (
      <div>
        <Feedback title="Feedback" handleClick={this.handleClick}>
          <FeedbackStatistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            procent={procent}
          />
        </Feedback>
        {isLog && <button onClick={this.handleReset}>Resetuj</button>}
      </div>
    );
  }
}
