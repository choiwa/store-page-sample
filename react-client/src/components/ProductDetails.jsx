import React from "react";
import "../custom.scss";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state.product);
  }

  render() {
    const item = this.props.location.state.product;
    const price = item.price;
    const currency = item.currency_symbol;
    const title = item.title;
    const photos = item.media;
    const gender = item.category_data[0].display_str;
    const size = item.category_data[1].display_str;
    const stock = item.stock;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {photos.map((photo, index) => {
              return <img key={index} src={photo.sizes[4].url} alt="" />;
            })}
          </div>
          <div className="col description">
            <h2>{title}</h2>
            <div>{gender}</div>
            <div>{size}</div>
            <div>Stock: {stock}</div>
            <div className="font-weight-bold">
              {currency} {price}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
