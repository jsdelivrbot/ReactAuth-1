import React, {Component} from 'react';

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React Auth</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
