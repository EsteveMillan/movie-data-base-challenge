import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MovieIitem  extends Component{
  render(){
    const {movie} = this.props;
    return(
      <div className="movie-item">
        <div className="movie-item-image" >
          <Link to={{
            pathname: `/movie/${movie.id}`,
            state: { movieInfo: {movie} }
          }}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}></img>
          </Link> 
        </div>
        <h3>{movie.title}</h3>
        <Link className="movie-item-more"to={{
          pathname: `/movie/${movie.id}`,
          state: { movieInfo: {movie} }
        }}>
        More +
        </Link> 
      </div>);
  }
}