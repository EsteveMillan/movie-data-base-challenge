import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import MovieDetail from '../../components/movieList/MovieDetail';

class Detail extends Component {

  render(){
    const {movie} = this.props.location.state.movieInfo;
    return (
      <div>
        <Header/>
        <Link to='/'> llevame a home </Link>
        <MovieDetail movieInfo={movie}/>
      </div>
    );}
}

export default Detail;