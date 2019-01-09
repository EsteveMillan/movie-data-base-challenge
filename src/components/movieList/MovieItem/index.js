import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MovieIitem  extends Component{
  render(){
    const {movie} = this.props;
    return(
      <div>
        <h3>{movie.title}</h3>
        <Link to={{
          pathname: `/movie/${movie.id}`,
          state: { movieInfo: {movie} }
        }}>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}></img>
        </Link> 
        <Link to={{
          pathname: `/movie/${movie.id}`,
          state: { movieInfo: {movie} }
        }}>
        Movie Detail
        </Link> 
      </div>);
  }
}