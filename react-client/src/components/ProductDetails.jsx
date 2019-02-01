import React from "react";
import "../custom.scss";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state.product);
  }

  render() {
    return <div>{this.props.location.state.product.price}</div>;
  }
}

export default ProductDetails;
