import React, { Component } from 'react';
import SingleVideo from'../SingleVideo/SingleVideo';
import './SideBar.scss';


class SideBar extends Component {

    render() {
        const {filteredVideosArray,pickedVideo}  = this.props;
        return (
            <aside className = "Aside-section">
                <h2 className = "Aside-section__heading">NEXT VIDEO</h2>
                <SingleVideo filteredvideos = {filteredVideosArray} pickedVideo = {pickedVideo}/>
            </aside>
        );
    }
}

export default SideBar;