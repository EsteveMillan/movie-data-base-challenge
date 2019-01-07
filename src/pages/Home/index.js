import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Movielist from '../../components/movieList';
import ApiCall from '../../services/api';

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      movies: null
    };
  }

  loadData = async () => {
    const movies = await ApiCall.nowPlaying();
    this.setState({movies});
  }

  componentDidMount(){
    this.loadData();
  }

  render(){
    const {movies} = this.state;
    return(
      <div>
        { movies===null ? <div>Loading...</div> : <Movielist movies={movies}/>}
      </div>);
  }}
  