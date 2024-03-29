
import React, { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import SideBar from '../SideBar/SideBar';
import Hero from '../Hero/Hero';
import axios from 'axios';
import './Main.scss';



class Main extends Component {
  
    state = {
        videos:null,
        selected: null     
   }




//### POST `/videos/:id/comment       
addComment = (videoId, commentBody)=>{
  axios.post(`https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`,commentBody)
  .then((res=>{
    axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`)
    .then((res=>{
      const selectedVideo = res.data;
      this.setState({
        selected :selectedVideo
      })

    }))
  }))
}

//DELETE `/videos/:videoId/comments/:commentId`

deleteComment = (videoId,commentId)=>{
  axios.delete(`https://project-2-api.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`)
  .then((res=>{
      axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`)
      .then((res=>{
        const newSelectedVideo = res.data;
        this.setState({
          selected :newSelectedVideo
        })
  
      }))
  }))
}

 componentDidMount(){
 
   axios.get("https://project-2-api.herokuapp.com/videos?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8")
   .then(res=>{
     const videosArray = res.data;
     this.setState({
       videos :videosArray
     })

    const videoId = res.data[0].id;
    const selectedId = this.props.match.params.videoId
    let id ='';
    if(!selectedId){
      id= videoId
    }else{
      id = selectedId
    }

     axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`)
     .then(res=>{
       const SelectedVideo = res.data;
       this.setState({
         selected : SelectedVideo
       })
     })
     
   })
  
 }


componentDidUpdate(prevProps){
    
    // console.log(currVideoId)
    // console.log(prevProps.match.params.videoId)
    const currVideoId = this.props.match.params.videoId;
    if(prevProps.match.params.videoId !== currVideoId ){

  

    const defaultId = this.state.videos[0].id;

    let id ='';

    if(!currVideoId){
      id= defaultId
    }else{
      id = currVideoId
    }

        axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=dbb79613-2994-442c-8777-27d0e4e1d2c8`)
        .then(res=>{
           const videoSelected =res.data ;
            this.setState({
                selected : videoSelected
            })
        })
    }



}

    render() {
      const {videos,selected} = this.state;
      if(this.state.videos===null || this.state.selected === null){
        return <p className = "main-loading">Loading...</p>
      }
      const filteredArr = videos.filter(v => v.id !== selected.id);
        return (
             <>
                <Hero isSelected = {selected}/>
                <section className = "Highlights">
                    <div className ="Highlights__main" >
                        <VideoSection isSelected = {selected}  addComment = {this.addComment} deleteComment = {this.deleteComment}/>
                        <SideBar filteredVideosArray = {filteredArr} isSelected = {selected} />        
                    </div> 
                </section>
             </>
        );
    }
}

export default Main;


