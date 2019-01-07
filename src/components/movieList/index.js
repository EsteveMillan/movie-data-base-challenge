import React, {Component} from 'react';
import MovieItem from './MovieItem';

export default class Movielist extends Component {

  render(){

    const { movies } = this.props;
    return(
      <div >

        {movies.results.map( (movie)=> {
          return <MovieItem  key={movie.id} movie={movie}/>;
        })}
        
      </div>
    );

  }  
}