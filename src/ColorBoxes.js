import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxes.css";
class ColorBoxes extends Component {
  static defaultProps = {
    colors: [
      "#197DE1",
      "#0569CD",
      "#D8D868",
      "#FF6B93",
      "#D23E66",
      "#FAFAFA",
      "#12A47B",
      "#121EA3",
      "#FFFF8B",
      "#CDCD59",
      "#5ACCCC",
    ],
    boxes: Math.floor(10 + Math.random() * 30),
  };

  render() {
    return (
      <div className="ColorBoxes">
        {Array(this.props.boxes)
          .fill(1)
          .map((input, i) => (
            <ColorBox colors={this.props.colors} />
          ))}
      </div>
    );
  }
}
export default ColorBoxes;
