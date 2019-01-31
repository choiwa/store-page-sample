import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Listing from "./components/List.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Route } from "react-router-dom";
// https://facebook.github.io/create-react-app/docs/adding-bootstrap
import "./custom.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/items",
      success: data => {
        this.setState({
          items: data
        });
      },
      error: err => {
        console.log("err", err);
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
