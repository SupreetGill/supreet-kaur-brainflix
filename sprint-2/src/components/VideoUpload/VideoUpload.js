import React, { Component } from 'react';
import cycle from '../../assets/images/Upload.jpg';
import './VideoUpload.scss';
import {Link, Redirect} from 'react-router-dom';

class VideoUpload extends Component {

   handleClick=()=>{
       alert("video uploaded")
      
   }

    render() {
        return (
            <section className = "upload"> 
                <h1 className ="upload__heading" >Upload Video</h1>  
                <form className = "upload__form">       
                    <div className = "upload__form-div">
                        <label className = "upload__label" >VIDEO THUMBNAIL</label>
                        <img className = "upload__thumbnail" src = {cycle} alt = 'cycle' />
                    </div>
                    <div className="upload__flex">
                        <div className ="upload__form-div" >
                                <label className = "upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                                <input  className = "upload__input" type="text" placeholder = "Add a title to your video" id = "title" name = "title"  />
                        </div>
                        <div className ="upload__form-div upload__form-div--margin">
                                <label className = "upload__label " htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                                <textarea className = "upload__input upload__input--height" type="textarea"  cols="30" rows="8"  name="description" id="description" placeholder = "Add a description of your video"/>
                        </div>
                    </div>  
                </form> 
                <div className ="upload__form-div upload__form-div--flex">
                        <Link to = '/' className = "upload__btn" onClick = { this.handleClick}>PUBLISH</Link>
                        <a className = "upload__cancel-link">CANCEL</a>
                </div>    
            </section>
        );
    }
}

export default VideoUpload;

//<Route path = '/:videoUpload' 