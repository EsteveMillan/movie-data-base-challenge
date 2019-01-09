import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Explore from './pages/Explore';

export default class Routes extends Component{
  render(){
    return (
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/explore" component={Explore}></Route>
        </Switch>
      </Router>);
  }
}