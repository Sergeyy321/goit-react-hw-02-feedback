import React from 'react';

import { BtnGood, BtnNeutral, BtnBad, StatisticList } from './feedback.styled.jsx';
class Feedback extends React.Component {
  state = {
   good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePersentage: 0,
  };

  onBtnBadClick = () => {
    this.setState(ev => {
      return {
        bad: ev.feedback.bad + 1,
        
      };
    });
  };
  onBtnGoodClick = () => {
    this.setState(ev => {
      return {
        good: ev.good + 1,
        
      };
    });
  };
  onBtnNeutralClick = () => {
    this.setState(ev => {
      return {
        neutral: ev.feedback.neutral + 1,
        
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <BtnGood onClick={this.onBtnGoodClick} type="button">
          Good
        </BtnGood>
        <BtnNeutral onClick={this.onBtnNeutralClick} type="button">
          Neutral
        </BtnNeutral>
        <BtnBad onClick={this.onBtnBadClick} type="button">
          Bad
        </BtnBad>
        <h2>Statistics</h2>
        <div>There is no feedback</div>
        <StatisticList>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li>
            Total:
            <span></span>
          </li>
          <li>
            Positive feedback: <span></span>
          </li>
        </StatisticList>
      </div>
    );
  }
  
}


export default Feedback;