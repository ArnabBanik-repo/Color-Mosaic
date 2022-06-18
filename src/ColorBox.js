import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  state = {
    bg_color: this.props.colors[Math.floor(Math.random() * 8)],
  };
  changeColor = (event) => {
    this.setState({
      bg_color: this.props.colors[Math.floor(Math.random() * 8)],
    });
  };
  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.bg_color + "" }}
        onClick={this.changeColor}
      ></div>
    );
  }
}
export default ColorBox;
