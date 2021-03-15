
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



//inc video likes
incLikes = (videoId)=>{
axios
  .put(`http://localhost:8080/videos/${videoId}/likes`)
  .then(res=>{
    this.setState({
      selected: res.data
    })
  })
}


//### POST `/videos/:id/comment       
addComment = (videoId, commentBody)=>{
  axios.post(`http://localhost:8080/videos/${videoId}/comments`,commentBody)
  .then((res=>{
    axios.get(`http://localhost:8080/videos/${videoId}`)
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
  axios.delete(`http://localhost:8080/videos/${videoId}/comments/${commentId}`)
  .then((res=>{
      axios.get(`http://localhost:8080/videos/${videoId}`)
      .then((res=>{
        const newSelectedVideo = res.data;
        this.setState({
          selected :newSelectedVideo
        })
  
      }))
  }))
}

 componentDidMount(){
 
   axios.get('http://localhost:8080/videos')
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

     axios.get(`http://localhost:8080/videos/${id}`)
     .then(res=>{
       const SelectedVideo = res.data;
       this.setState({
         selected : SelectedVideo
       })
     })
     
   })
  
 }


componentDidUpdate(prevProps){
    const currVideoId = this.props.match.params.videoId;
    if(prevProps.match.params.videoId !== currVideoId ){

    const defaultId = this.state.videos[0].id;

    let id ='';

    if(!currVideoId){
      id= defaultId
    }else{
      id = currVideoId
    }

        axios.get(`http://localhost:8080/videos/${id}`)
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
                        <VideoSection incLikes = {this.incLikes} isSelected = {selected}  addComment = {this.addComment} deleteComment = {this.deleteComment}/>
                        <SideBar filteredVideosArray = {filteredArr} isSelected = {selected} />        
                    </div> 
                </section>
             </>
        );
    }
}

export default Main;


