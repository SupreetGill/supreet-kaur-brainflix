import React, { Component } from 'react';
import './SingleVideo.scss';

class SingleVideo extends Component {


    // videoSelected = (id)=> {
    //     const copyied = this.state.videoDetails;
    //     // console.log(copyied)
    //     const pickedVideo = copyied.filter(v=>{
    //       return v.id === id
    //     })
    //   this.setState({
    //     selected :pickedVideo
    //   })
    //  }


    render() {
        const {filteredvideos,pickedVideo} = this.props;
        console.log(pickedVideo)
        return (  
            <React.Fragment>
                {
                    filteredvideos.map(v =>{
                        return(
                            <div key = {v.id} className = "Video">
                                <img className = "Video__img" src= {v.image} alt="" onClick = {()=>{pickedVideo(v.id)}}/>
                                <div className = "Video__info">
                                    <p className = "Video__para">{v.title}</p>
                                    <p className ="Video__author" >{v.channel}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default SingleVideo;


            
           