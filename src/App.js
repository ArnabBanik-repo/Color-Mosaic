import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";
class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ColorBoxes />
        </div>
      </div>
    );
  }
}
export default App;
