
import React from 'react';
import './SingleVideo.scss';
import {Link} from 'react-router-dom';

function SingleVideo({filteredvideos}) {
    return (
        <>
            { filteredvideos.map(v =>{
                return(
                    <Link key = {v.id} to = {`/${v.id}`}>
                    <div className = "Video">
                        <img className = "Video__img" src= {v.image} alt="" />
                        <div className = "Video__info">
                            <p className = "Video__para">{v.title}</p>
                            <p className ="Video__author" >{v.channel}</p>
                        </div>
                    </div>
                    </Link>
                    )
                })
            }
        </>
    );
    
}

export default SingleVideo;




            
           