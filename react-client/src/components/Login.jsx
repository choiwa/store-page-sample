import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ProductThumbnail from "./ProductThumbnail.jsx";

const redirectToProducts = () => {
  return (
    <BrowserRouter>
      <Route path="/productlistings" component={ProductThumbnail} />
      <Route exact path="/" render={() => <Redirect to="/productlistings" />} />
    </BrowserRouter>
  );
};

const Login = props => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-auto loginPadding">
        please log in to enter the site
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div className="col-md-auto inputPadding">
        Please enter your name:{" "}
        <input type="text" name="name" onKeyDown={redirectToProducts} />
      </div>
    </div>
    <div />
    {/* <List items={this.state.items} /> */}
    {/* <Listing /> */}
  </div>
);

export default Login;
