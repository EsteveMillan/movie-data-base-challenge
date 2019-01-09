import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

  render(){   
    return(
      <div id="menu">
        <Link to="/"> Home </Link>
        <Link to="/explore"> Explore </Link>
      </div>
    );
  }  
}