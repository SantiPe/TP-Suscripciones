import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavBar extends Component {

  render() {

    return (
      <div className="NavBar">
<Navbar className="blue">
  <NavItem href="/" >Taller de diseño </NavItem>
  <NavItem href="/" className="brand-logo center"> Cuevana <i className="material-icons">play_arrow</i> </NavItem>
</Navbar>
      </div>   
    );
  }
}

export default NavBar;


