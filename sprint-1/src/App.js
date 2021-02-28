// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from'./components/Main/Main';
import Data from './Data/video-details.json';
import DataSide from './Data/videos.json';

import React, { Component } from 'react';

class App extends Component {
  state = {
    videoDetails : Data,
    videos:DataSide,
    selected: Data[0]
  }


//  videoSelected = (id)=> {
//   //  console.log("CHECK", id);
//     let copyied = [...this.state.videoDetails];
//     copyied = copyied.filter(v => v.id === id );
//     this.setState({
//       selected : copyied[0]
//     });
//  }
 videoSelected = (id)=> {
    const selectedVideoObj = this.state.videoDetails.filter(v => v.id === id );
    
    this.setState({
      selected :selectedVideoObj[0]
    });
 }



  render() { 
    const videosArrCopy = [...this.state.videos];
    const filteredArr = videosArrCopy.filter(v => v.id !== this.state.selected.id);

    return (
      <div className = "App">
         <Header/>
         <Hero videoInfo = {this.state.videoDetails} isSelected = {this.state.selected}/>
         <Main videoInfo = {this.state.videoDetails} videosArr = {filteredArr} isSelected = {this.state.selected} pickedVideo = {this.videoSelected}/>
      </div>
    );
  }
}

export default App;


