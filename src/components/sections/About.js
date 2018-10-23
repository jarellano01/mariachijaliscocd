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
                      Mariachi Jalisco Description
                    </p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center">
                    <img src="/images/crystal-pose-tony.jpg" style={{width: '80%'}} alt=""/>
                </Col>
            </Section>
        )
    }
}
export default About;