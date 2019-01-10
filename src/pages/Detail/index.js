import React , {Component} from 'react';
import Header from '../../components/header';
import MovieDetail from '../../components/movieList/MovieDetail';

class Detail extends Component {

  render(){
    const {movie} = this.props.location.state.movieInfo;
    return (
      <div>
        <Header/>
        <MovieDetail movieInfo={movie}/>
      </div>
    );}
}

export default Detail;