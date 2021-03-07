
import React, { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection';
import SideBar from '../SideBar/SideBar';
import './Main.scss';
import Hero from '../Hero/Hero';
import axios from 'axios';





class Main extends Component {
    
 
    state = {
        videos:null,
        selected: null,
        
        }


   isDataLoadedById = false;
        
addComment = (videoId, dataBody)=>{
 

  // axios.post(url[, data[, config]])

//### POST `/videos/:id/comment
  axios.post(`https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`,dataBody)
  .then((res=>{
    // const updatedId = res.data
    // console.log(updatedId)

  //  const videoIdUpdated = this.props.match.params.videoId;
  //  console.log(videoConcerned)
    axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
    .then((res=>{
      const newSelected = res.data;
      this.setState({
        selected :newSelected
      })

    }))
  }))
}

//DELETE `/videos/:videoId/comments/:commentId`

deleteComment = (videoId,commentId)=>{
  axios.delete(`https://project-2-api.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
  .then((res=>{
    // const videoIdUpdated = this.props.match.params.videoId;
    //  console.log(videoConcerned)
      axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
      .then((res=>{
        const newSelected = res.data;
        this.setState({
          selected :newSelected
        })
  
      }))
  }))
}



 componentDidMount(){
 
   axios.get("https://project-2-api.herokuapp.com/videos?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2")
   .then(res=>{
    //  console.log(res.data)
    //  console.log(res.data[0].id)
     const videosArray = res.data;
     this.setState({
       videos :videosArray
     })
    //  console.log(res.data[0].id)
     const videoId = res.data[0].id;
    //  console.log("lets c🎺")
     axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
     .then(res=>{
      //  console.log(res.data)
       const SelectedVideo = res.data;
      
       this.setState({
         selected : SelectedVideo
       })
     })
     
   })
  //  const videoId = res[0].id;
  
 }




componentDidUpdate(prevProps){
   
    const currVideoId = this.props.match.params.videoId;
    // console.log(currVideoId);
    
    if(prevProps.match.params.videoId !== currVideoId && currVideoId !== undefined){
        this.isDataLoadedById = true;

        axios.get(`https://project-2-api.herokuapp.com/videos/${currVideoId}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
        .then(res=>{
           const video =res.data ;
            this.setState({
                selected : video
            })
            console.log(11)
        })
    }

    if((currVideoId === undefined || currVideoId == '') && this.isDataLoadedById === true){
      this.isDataLoadedById = false;
      console.log('another if statement');

      const id = this.state.videos[0].id;
      axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=8c856934-9efb-4dad-8731-6b31f98a09a2`)
        .then(res=>{
           const singleData =res.data ;
            this.setState({
                selected : singleData
            })
        })
    }
    
}



    render() {
    // console.log(this.props.location)
    const {videos,selected} = this.state;
    // console.log(videos)

    if(this.state.videos===null || this.state.selected === null){
    return <p>Loading...</p>
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


