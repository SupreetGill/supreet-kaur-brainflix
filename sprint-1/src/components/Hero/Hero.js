
import React from 'react';
import './Hero.scss';

function Hero({isSelected}) {
    return (
        <section className = "Hero" >
            <video  className = "Hero__video-img" controls poster = {isSelected.image} src="">
                <source/>
            </video>
        </section>
    );
}

export default Hero;


