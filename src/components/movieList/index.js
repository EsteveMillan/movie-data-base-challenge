import React, {Component} from 'react';
import Pagination from './Pagination';
import MovieItem from './MovieItem';

export default class Movielist extends Component {

  render(){
    const { movies } = this.props;   
    return(
      <div>
        <Pagination/>
        {movies.results.map( (movie)=> {
          return <MovieItem  key={movie.id} movie={movie}/>;
        })}    
      </div>
    );
  }  
}