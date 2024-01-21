import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback-options-container">
        {options.map(option => (
          <button
            key={option}
            className="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
