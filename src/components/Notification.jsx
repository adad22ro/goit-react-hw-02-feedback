import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <div className="notification">
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
