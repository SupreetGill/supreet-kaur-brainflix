import React, { Component } from 'react';
import Photo from '../../assets/images/photo.jpeg'
import './Comment.scss';

class Comment extends Component {
    render() {
        const {comments} = this.props;
        let date = new Date(comments.timestamp).toLocaleDateString();
        // console.log(date)
        // to reassign name of object key comment:c
        return(
            <div>
                <div className = "Comment">
                    <img  className = "Comment__image" src={Photo} alt=""/>
                    <div className = "Comment__body">
                        <div className = "Comment__author-info">
                            <span className ="Comment__name">{comments.name}</span>
                            <span className = "Comment__date">{date}</span>
                        </div>
                        <p className ="Comment__text">{comments.comment}</p>
                    </div>
                </div>
            </div>
        );
       
    }
}

export default Comment;