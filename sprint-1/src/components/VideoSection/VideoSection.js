import React, { Component } from 'react';

import Comment from '../Comment/Comment';
import Views from '../../assets/images/Icon-views.svg';
import Likes from '../../assets/images/Icon-likes.svg';
import Form from '../../components/Form/Form';
import './VideoSection.scss';


class VideoSection extends Component {

    
    render() {
        
        const {videoFullInfo,isSelected} = this.props;
        const commentsArray = isSelected.comments;
        console.log(isSelected)
        console.log(commentsArray)
        return (
            <div className = "Highlights__right">
                <h1 className ="Highlights__title" >{isSelected.title}</h1>
                <div className = "Highlights__video-info">

                    <div className = "Highlights__author">
                        <span className ="Highlights__author-name" >{isSelected.channel}</span>
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

      {/* rendering <form/> and <comment/> components */}
                   <Form />
                {/* <Comment comments = {commentsArray}/> */}
                  {
                    commentsArray.map( c => <Comment key = {c.id} comments = {c} />)
                  } 
                   

                </div>
            </div>
                    
        );
    }
}

export default VideoSection;