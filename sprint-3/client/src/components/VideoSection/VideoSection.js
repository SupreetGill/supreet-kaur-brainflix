
import React from 'react';
import Views from '../../assets/images/Icon-views.svg';
import Likes from '../../assets/images/Icon-likes.svg';
import Form from '../../components/Form/Form';
import Comment from '../Comment/Comment';
import './VideoSection.scss';



function VideoSection({isSelected,addComment,deleteComment}) {
    
    const commentsArray = isSelected.comments;

    return (
        <div className = "Highlights__right">
                 <h1 className ="Highlights__title" >{isSelected.title}</h1>
                 <div className = "Highlights__video-info">

                     <div className = "Highlights__author">
                         <span className ="Highlights__author-name" >{`By ${isSelected.channel}`}</span>
                         <span className = "Highlights__author-date">12/18/2018</span>
                     </div>

                     <div className = "Highlights__views-likes-box">
                         <div className = "Highlights__popularity Highlights__popularity--margin"  >
                             <img className ="Highlights__icon" src= {Views} alt=""/>
                             <span className = "Highlights__number">{isSelected.views}</span>
                         </div>

                         <div className = "Highlights__popularity">
                             <img className = "Highlights__icon"src= {Likes} alt=""/>
                             <span className = "Highlights__number">{isSelected.likes}</span>
                         </div>
                     </div>

                 </div>
                 <p className = "Highlights__para">{isSelected.description}</p>
                 <h2 className = "Highlights__comment-count">{isSelected.comments.length} Comments</h2>
                 <div className = "Highlights__comment-section" >
  
                <Form addComment = {addComment} selectedVideoId = {isSelected.id}/>
                {
                commentsArray.map( commentObj => <Comment key = {commentObj.id} commentObj = {commentObj} selectedVideoId = {isSelected.id} deleteComment = {deleteComment}/>)     
                } 
                 </div>
            </div>
                    
    );
}

export default VideoSection;


