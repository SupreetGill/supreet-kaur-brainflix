import React, { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import SideBar from '../SideBar/SideBar';
import './Main.scss';

class Main extends Component {
    render() {
        const {videoInfo,videosArr,isSelected ,pickedVideo} = this.props
        return (
            <section className = "Highlights">
               <div className ="Highlights__main" >
                  <VideoSection videoFullInfo = {videoInfo} isSelected = {isSelected} />
                  <SideBar filteredVideosArray = {videosArr} isSelected = {isSelected} pickedVideo = {pickedVideo}/>        
                </div> 
            </section>
        );
    }
}

export default Main;