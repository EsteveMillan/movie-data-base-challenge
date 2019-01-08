import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import MovieDetail from '../../components/movieList/MovieDetail';

class Detail extends Component {

  render(){
    const {movie} = this.props.location.state.movieInfo;
    return (
      <div>
        <Link to='/'> llevame a home </Link>
        <MovieDetail movieInfo={movie}/>
      </div>
    );}
}

export default Detail;