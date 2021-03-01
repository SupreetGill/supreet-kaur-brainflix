
import React from 'react';
import Photo from '../../assets/images/photo.jpeg'
import './Comment.scss';



function Comment({commentObj}) {
    
    let date = new Date(commentObj.timestamp).toLocaleDateString();
    return (
        <div>
            <div className = "Comment">
                <img  className = "Comment__image" src={Photo} alt=""/>
                <div className = "Comment__body">
                    <div className = "Comment__author-info">
                        <span className ="Comment__name">{commentObj.name}</span>
                        <span className = "Comment__date">{date}</span>
                    </div>
                    <p className ="Comment__text">{commentObj.comment}</p>
                </div>
            </div>
        </div>   
    );
}

export default Comment;

