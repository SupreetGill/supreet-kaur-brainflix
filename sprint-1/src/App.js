
import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
import Main from'./components/Main/Main';

import './App.scss';
import React, { Component } from 'react';
import VideoUpload from './components/VideoUpload/VideoUpload';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import axios from 'axios';



// import React, { Component } from 'react';

class App extends Component {


  render() {
  

      return (
        <div className = "App">
     
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route exact path = '/' render = {(routeProps)=> <Main  {...routeProps} />} />
                <Route exact path = '/videoUpload'  render = {(routeProps)=> <VideoUpload {...routeProps} />}/>
                <Route  path = '/:videoId'  render = {(routeProps)=> <Main  {...routeProps}/>} />
               
              </Switch>
            </BrowserRouter>
        </div>
      );
  }
}

export default App;

{/* <div className = "App">
//          <Header/>
//          {/* <Hero isSelected = {this.state.selected}/> */}
//          <Main videoInfo = {this.state.videoDetails} videosArr = {filteredArr} isSelected = {this.state.selected} pickedVideo = {this.videoSelected}/>
//       </div> */}

// class App extends Component {
//   state = {
//     videoDetails : Data,
//     videos:DataSide,
//     selected: Data[0]
//   }
 


//  videoSelected = (id)=> {
//     const selectedVideoObj = this.state.videoDetails.filter(v => v.id === id );
    
//     this.setState({
//       selected :selectedVideoObj[0]
//     });
//  }


//   render() { 
//     const videosArrCopy = [...this.state.videos];
//     const filteredArr = videosArrCopy.filter(v => v.id !== this.state.selected.id);

//     return (
//       <div className = "App">
//          <Header/>
//          {/* <Hero isSelected = {this.state.selected}/> */}
//          <Main videoInfo = {this.state.videoDetails} videosArr = {filteredArr} isSelected = {this.state.selected} pickedVideo = {this.videoSelected}/>
//       </div>
//     );
//   }
// }

// export default App;





// To get videos - mock API
// https://project-2-api.herokuapp.com/videos?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2 

//returns an array of video Objects for display in Side bar

//====================//

// to get detailed object of a single video


// eg -> https://project-2-api.herokuapp.com/videos/1akljruuvhzt?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2 


// - `:id` must be swapped out with the id of a video as found in the list of videos
// - Returns a detailed object of a single video
//     -  Details include the list of comments for that video
// - Example response body


//===============================================//

//POST `/videos/:id/comments`
// - `:id` must be swapped out with the numeric id of a video as found in the list of videos
// - Creates a new comment for a specific video

//   https://project-2-api.herokuapp.com/videos/1akljruuvhzt/?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2 

//===================================================//
// DELETE `/videos/:videoId/comments/:commentId`
// - Deletes the given comment and returns it in the response body
// - `:videoId` must be swapped out with the numeric id of a video as found in the list of videos
// - `:commentId` must be swapped out with the numeric id of a comment as found in the list of comments for the given video

//  eg ->  https://project-2-api.herokuapp.com/videos/1akljruuvhzt/comments/8bedb0a0-6299-4984-a679-29c86d9894d1?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2