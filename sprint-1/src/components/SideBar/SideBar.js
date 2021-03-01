
import React from 'react';
import SingleVideo from'../SingleVideo/SingleVideo';
import './SideBar.scss';


function SideBar({filteredVideosArray,pickedVideo}) {

    return (
        <aside className = "Aside-section">
            <h2 className = "Aside-section__heading">NEXT VIDEO</h2>
            <SingleVideo filteredvideos = {filteredVideosArray} pickedVideo = {pickedVideo}/>
        </aside>
    );
}

export default SideBar;



