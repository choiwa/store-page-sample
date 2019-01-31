import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import ProductThumbnail from "./ProductThumbnail.jsx";
import "../custom.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      toProductListings: false
    };

    this.redirectToListings = this.redirectToListings.bind(this);
  }

  redirectToListings(e) {
    if (e.key === "Enter") {
      // for database;
      console.log(e.target.value);
      this.setState({ toProductListings: true });
      console.log(this.state.toProductListings);
    }
  }

  render() {
    if (this.state.toProductListings) {
      console.log("here");
      return <Redirect to="/productlistings" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto loginPadding">
            please log in to enter the site
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto inputPadding">
            Please enter your name:{" "}
            <input
              type="text"
              name="name"
              onKeyDown={e => this.redirectToListings(e)}
            />
          </div>
        </div>
        <div />
        {/* <List items={this.state.items} /> */}
        {/* <Listing /> */}
      </div>
    );
  }
}

export default Login;
