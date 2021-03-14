import React, { Component } from 'react';
import cycle from '../../assets/images/Upload.jpg';
import './VideoUpload.scss';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

// const formRef = React.createRef();

class VideoUpload extends Component {

    state = {
       title : '',
       description:'',
       redirect: false
    }

handleChange = (e)=>{
    e.preventDefault();
    this.setState({
        [e.target.name]:e.target.value
    })
}


handleSubmit = (e)=>{
    e.preventDefault();
  const newVideo = {
        title: this.state.title,
        description: this.state.description
    }
    axios
    .post('http://localhost:8080/videos',newVideo)
    .then(res=>{
        console.log(res.data);
        this.setState({redirect: !this.state.redirect});
    })

}

    render() {
        const { redirect } = this.state;
        
        if(redirect){
            return <Redirect to='/' />;
        }

        return (
            <section className = "upload"> 
                <h1 className ="upload__heading" >Upload Video</h1>  

                <form  onSubmit = {this.handleSubmit} className = "upload__form">       
                <div className = "upload-controller">
                    <div className = "upload__form-div">
                        <label className = "upload__label" >VIDEO THUMBNAIL</label>
                        <img className = "upload__thumbnail" src = {cycle} alt = 'cycle' />
                    </div>
                    <div className="upload__flex">
                        <div className ="upload__form-div" >
                                <label className = "upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                                <input  
                                    className = "upload__input" 
                                    type="text" 
                                    placeholder = "Add a title to your video" 
                                    id = "title" 
                                    name = "title" 
                                    value = {this.state.title} 
                                    onChange = {this.handleChange}/>
                        </div>
                        <div className ="upload__form-div upload__form-div--margin">
                                <label className = "upload__label " htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                                <textarea 
                                    className = "upload__input upload__input--height" 
                                    type="textarea"  cols="30" rows="8"  
                                    name="description" 
                                    value = {this.state.description} 
                                    id="description" 
                                    placeholder = "Add a description of your video"
                                    onChange = {this.handleChange}/>
                        </div>
                    </div>  
                </div>
                <div className ="upload__form-div upload__form-div--flex">
                     {/* <Link to = '/' className = "upload__btn" >PUBLISH</Link> */}
                     <button type = "submit" className = "upload__btn" >PUBLISH</button>
                     <a href = "#"className = "upload__cancel-link">CANCEL</a>
                    </div>  
                </form> 

                 
            </section>
        );
    }
}

export default VideoUpload;

