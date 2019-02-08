import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import ProductThumbnail from './components/ProductThumbnail.jsx';
import ProductDetails from './components/ProductDetails.jsx';
// https://facebook.github.io/create-react-app/docs/adding-bootstrap
import './custom.scss';
import NavBar from './components/NavBar.jsx';

const data = require('../../test_data.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendItems = this.sendItems.bind(this);
    this.state = {
      items: [],
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
          <NavBar />
          <Route exact path="/" component={Login} />
          <Route exact path="/navbar" component={NavBar} />
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

ReactDOM.render(<App />, document.getElementById('app'));
