import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from'./components/Main/Main';
import VideoUpload from './components/VideoUpload/VideoUpload';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';


class App extends Component {
  

  render() {
  
      return (
        <div className = "App">
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route exact path = '/' render = {(routeProps)=> <Main  {...routeProps} />} />
                <Route exact path = '/videoUpload'  render = {(routeProps)=> <VideoUpload {...routeProps} />}/>
                <Route exact path = '/:videoId'  render = {(routeProps)=> <Main  {...routeProps}/>} />               
              </Switch>
            </BrowserRouter>
        </div>
      );
  }
}

export default App;









