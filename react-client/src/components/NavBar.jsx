import React from 'react';
import { NavLink } from 'react-router-dom';
import '../custom.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink exact to="/">
          home
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
