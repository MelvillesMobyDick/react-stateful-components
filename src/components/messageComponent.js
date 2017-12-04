import React from 'react';

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      clickCount: 0,
      sender: 'Abraham Lincoln'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({ clickCount: newClickCount });
  }

  render() {
    let message = this.state.message
    let clickCount = this.state.clickCount
    let sender = this.state.sender

    return(
      <div>
        <h1>Component Message: {message}</h1>
        <h1 onClick={this.handleClick}>Component Click Count: {clickCount}</h1>
        <h1>Component Sender: {sender}</h1>
      </div>
    );
  }
};

export default MessageComponent;
