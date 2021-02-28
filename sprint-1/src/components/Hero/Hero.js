import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {
    
    render() {
    //  i dont need to pass the entire videoInfo object here
        const {videoInfo,isSelected} = this.props;
       
        return (
            <section className = "Hero" >
                <video  className = "Hero__video-img" controls poster = {isSelected.image} src="">
                    <source/>
                </video>

            </section>
        );
    }
}

export default Hero;