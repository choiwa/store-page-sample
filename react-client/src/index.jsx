import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
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
        {/* <List items={this.state.items} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
