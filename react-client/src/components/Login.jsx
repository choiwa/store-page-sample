import React from "react";

const Login = props => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-auto loginPadding">
        please log in to enter the site
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div className="col-md-auto inputPadding">
        Please enter your name: <input type="text" name="name" />
      </div>
    </div>
    <div />
    {/* <List items={this.state.items} /> */}
    {/* <Listing /> */}
  </div>
);

export default Login;
