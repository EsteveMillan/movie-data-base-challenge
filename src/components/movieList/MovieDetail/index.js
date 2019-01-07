import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MovieDetail  extends Component{


  render(){
    const {movieInfo} = this.props;
    console.log( movieInfo );
    return(
      <div>
        <h2>{movieInfo.title}</h2>
        <img src={movieInfo.poster_path}></img>
        <div>{movieInfo.overview}</div>   
      </div>);
  }
}