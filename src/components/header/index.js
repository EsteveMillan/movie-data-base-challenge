import React, {Component} from 'react';
import Navbar from './Navbar';
export default class Header extends Component {

  render(){   
    return(
      <div id="header">
        <div id="page-title"><h1>Movies DB</h1></div>
        <Navbar/>
      </div>
    );
  }  
}