import React, { Component } from 'react';
import './Landing.css';
import scrollToElement from 'scroll-to-element';

class Landing extends Component {
    render() {
        return (
            <div className="landing-container" id="home">
                <div className="info">
                    <img src="/images/logo.png" className="logo img-responsive" alt="" />
                </div>
                <a className="btn btn-default learn-more" onClick={() => scrollToElement('#about', {
                    offset: -50,
                    ease: 'inOutSine',
                    duration: 1500
                })}>Learn More</a>
            </div>
        )
    }
}

export default Landing;
