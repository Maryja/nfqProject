import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import components
import Orders from './components/public/Orders';
import Home from './components/public/Home';
import Notfound from './components/layout/Notfound';
import Header from './components/layout/Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/orders' component={Orders}/>
          <Route component={Notfound}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
