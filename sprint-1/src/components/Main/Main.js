// import React, { Component } from 'react';
import React from 'react';
import VideoSection from '../VideoSection/VideoSection';
import SideBar from '../SideBar/SideBar';
import './Main.scss';

function Main({videoInfo,videosArr,isSelected ,pickedVideo}) {
    return (
        <section className = "Highlights">
            <div className ="Highlights__main" >
                <VideoSection isSelected = {isSelected} />
                <SideBar filteredVideosArray = {videosArr} isSelected = {isSelected} pickedVideo = {pickedVideo}/>        
            </div> 
        </section>
    );
}

export default Main;



