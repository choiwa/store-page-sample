import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import ProductThumbnail from "./components/ProductThumbnail.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { BrowserRouter, Route } from "react-router-dom";
// https://facebook.github.io/create-react-app/docs/adding-bootstrap
import "./custom.scss";
const data = require("../../test_data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: data.data });

    // console.log(this.state.items);
    // $.ajax({
    //   url: "/items",
    //   success: data => {
    //     this.setState({
    //       items: data
    //     });
    //   },
    //   error: err => {
    //     console.log("err", err);
    //   }
    // });
  }

  sendItems() {
    return this.state.items;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route
            path="/productlistings"
            render={() => <ProductThumbnail items={this.sendItems()} />}
          />
          <Route path="/productdetails" component={ProductDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
