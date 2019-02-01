import React from "react";
import ProductThumbnail from "./ProductThumbnail.jsx";
const data = require("../../../test_data.json");

class Listing extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data.data
    };
  }

  componentDidMount() {
    // this.state.list.map(item => {
    //   console.log(item.title);
    // });
  }

  render() {
    return (
      <div className="row">
        <ProductThumbnail items={this.state.list} />
      </div>
    );
  }
}

export default Listing;
