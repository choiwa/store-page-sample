import React from "react";
import ReactDOM from "react-dom";
const data = require("../../../test_data.json");

class Listing extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data.data
    };
  }

  componentDidMount() {
    this.state.list.map(item => {
      console.log(item.title);
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default Listing;
