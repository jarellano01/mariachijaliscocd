import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';

class About extends Component {
    render(){


        return(
            <Section id="about">

                <Col xs={12} md={8} mdPush={4}>
                    <h1 className="title">Our Story</h1>
                    <p>
                        CrystalArts Dance Academy is where creativity and diversity exists! Our mission is to
                        produce well trained dancers in both social and stage levels. Our goal is to provide a
                        platform for everyone who is developing a new hobby, who already has the desire to learn and
                        CRYSTALLIZE their arts to show his/hers talent on stage.
                    </p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center">
                    <img src="/images/crystal-pose-tony.jpg" style={width: 80%} alt=""/>
                </Col>
            </Section>
        )
    }
}

export default About;