import React from "react";
import { Redirect } from "react-router-dom";
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
      console.log("the value typed:", e.target.value);
      this.setState({ toProductListings: true });
      // FFIX
      console.log(this.state.toProductListings);
    }
  }

  render() {
    if (this.state.toProductListings) {
      console.log("in to render to redirect");
      // Redirect needs to change state to trigger
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
      </div>
    );
  }
}

export default Login;
