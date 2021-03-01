
import React from 'react';
import './SingleVideo.scss';



function SingleVideo({filteredvideos,pickedVideo}) {
    return (
        <>
            { filteredvideos.map(v =>{
                return(
                    <div key = {v.id} className = "Video">
                        <img className = "Video__img" src= {v.image} alt="" onClick = {()=>{pickedVideo(v.id)}}/>
                        <div className = "Video__info">
                            <p className = "Video__para">{v.title}</p>
                            <p className ="Video__author" >{v.channel}</p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
    
}

export default SingleVideo;




            
           