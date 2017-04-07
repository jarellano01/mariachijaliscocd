import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';
import InstructorGrid from '../InstructorGrid';

class Instructors extends Component {
    render(){
        return(
            <Section id="instructors">
                <Col xs={12}>
                    <h1 className="title">Our Instructors</h1>
                </Col>
                <Col xs={12}>
                    <InstructorGrid />
                </Col>

            </Section>
        )
    }
}

export default Instructors;