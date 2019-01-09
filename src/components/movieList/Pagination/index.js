import React, { Component } from 'react';

export default class Pagination extends Component {
  

  render() {

    return (
      <div id="page-controls">
        <button id="pre" >PREVIOUS</button>
        <button id="next"> NEXT</button>
        <div id="view-favs"></div>
        <div id="remove-favs"></div>
      </div>
    );
  }
}
