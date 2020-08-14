import React from "react";
import FlashMessage from "react-flash-message";
import { Component } from "react";

class Message extends Component {
  render(props) {
    const { showMessage, messageClass, duration, message } = this.props;
    return (
      <div>
        {showMessage && (
          <FlashMessage duration={duration}>
            <div className={messageClass}>
              <p>{message}</p>
            </div>
          </FlashMessage>
        )}
      </div>
    );
  }
}

export default Message;
