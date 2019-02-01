import React from "react";
import { Redirect } from "react-router-dom";
import "../custom.scss";

class ProductThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {},
      selected: false
    };

    this.turnToProductDetails = this.turnToProductDetails.bind(this);
  }

  convertTime(time) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(time);
    // returns the month in the specified date according to local time,
    // as a zero-based value (where zero indicates the first month of the year)
    const month = monthNames[date.getMonth()];
    const theDate = date.getDate();
    const year = date.getFullYear();

    return `${month} ${theDate}, ${year}`;
  }

  turnToProductDetails(item) {
    // https://reactjs.org/docs/state-and-lifecycle.html
    // this.setState is Asynchronous
    this.setState({ selectedItem: item }, () => {
      this.changePage();
    });
  }

  changePage() {
    this.setState({ selected: true });
  }

  render() {
    if (this.state.selected) {
      console.log("redirect to  product detail");
      console.log("item??", this.state.selectedItem);
      return (
        <Redirect
          to={{
            pathname: "/productdetails",
            state: { product: this.state.selectedItem }
          }}
        />
      );
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.props.items.map((item, index) => {
            return (
              <div
                key={index}
                className="col text-center"
                onClick={() => this.turnToProductDetails(item)}
              >
                <img src={item.media[0].sizes[4].url} />
                <div className="align-bottom">
                  <div>{item.title}</div>
                  <div>$ {item.price}</div>
                  <div>{this.convertTime(item.created_at)}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div>im thumbnail</div>
      </div>
    );
  }
}

export default ProductThumbnail;
