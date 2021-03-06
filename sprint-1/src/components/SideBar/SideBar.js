
import React from 'react';
import SingleVideo from'../SingleVideo/SingleVideo';
import './SideBar.scss';


function SideBar({filteredVideosArray}) {

    return (
        <aside className = "Aside-section">
            <h2 className = "Aside-section__heading">NEXT VIDEO</h2>
            <SingleVideo filteredvideos = {filteredVideosArray} />
        </aside>
    );
}

export default SideBar;



