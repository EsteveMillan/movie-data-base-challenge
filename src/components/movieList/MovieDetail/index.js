import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class MovieDetail  extends Component{


  render(){
    const {movieInfo} = this.props;

    console.log(movieInfo);
    return(
      <div className="movie-detail-wrap">
        <div className="movie-detail">
          <div className="movie-detail-poster">
            <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}></img>
          </div>

          <div className="movie-detail-info">
            <h2>{movieInfo.title}</h2>
            <p className="release-date">{movieInfo.release_date}</p>
            <p className="rating">{`Rating: ${movieInfo.vote_average}/10 (${movieInfo.vote_count} votes)`}</p>
            <p className="movie-detail-overview">{movieInfo.overview}</p> 
            <Link to='/'> Back </Link>
          </div> 
        </div>
      </div> );
  }
}