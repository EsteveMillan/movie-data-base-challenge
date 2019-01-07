import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class MovieIitem  extends Component{
  render(){
    const {movie} = this.props;
    return(
      <div>
        {movie.title}
        <Link to={{
          pathname: `/movie/${movie.id}`,
          state: { movieInfo: {movie} }
        }}>
        Movie Detail
        </Link> 
      </div>);
  }
}