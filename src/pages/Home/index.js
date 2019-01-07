import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Movielist from '../../components/movieList';
import ApiCall from '../../services/api';

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      movies: null;
    }
  }

  loadData = async () => {
    const movie = await ApiCall.nowPlaying();
    this.setState({movies});
  }

  componentDidMount(){
    this.loadData()
  }

  render(){
    return(
      <div>
       { this.state.movies===null ? <div>Loading...</div> : <Movielist movies={this.state.movies}/>}
      </div>);
  }}
  