// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  handleClick(event) {
    let arr = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(arr);
  }

  render() {
    return <button onClick={this.handleClick.bind(this)} />;
  }
}

export default CoordinatesButton;
