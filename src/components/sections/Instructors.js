import React, {Component} from 'react';
import {Col, Modal, Row} from 'react-bootstrap';
import Section from '../Section';
import GridItem from '../GridItem';
import nl2br from 'react-newline-to-break';
import {instructors} from '../data/instructor';
import {Image} from 'cloudinary-react'

class Instructors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: {},
            modalOpen: false
        }
    }

    componentWillMount() {
        this.setState({
            instructors: instructors
        })
    }

    select = (instructor) => {
        this.setState({
            selected: instructor,
            modalOpen: true
        })
    };
    close = () => {
        this.setState({modalOpen: false});
    };

    renderGrid = () => {
        let {instructors} = this.props;
        if(!instructors){
            return (
                <div>Loading ...</div>
            )
        }
        return instructors.map((instructor, index) => {
            return (
                <GridItem key={index} image={instructor.image} onClick={()=> this.select(instructor)} title={instructor.nickname} />
            )
        })
    };

    render() {
        let {selected} = this.state;
        return (
            <Section id="instructors">
                <Col xs={12}>
                    <h1 className="title">Our Instructors</h1>
                </Col>
                <Col xs={12}>
                    <Row>
                        {this.renderGrid()}
                    </Row>
                </Col>
                <Modal show={this.state.modalOpen} onHide={this.close} bsSize="large">
                    <Modal.Header closeButton>
                        <Col xs={12} className="text-center">
                            <h3>{selected.nickname}</h3>
                            <span>{`${selected.classes}`}</span><br/>
                            <span>{`${selected.classTimes}`}</span>
                        </Col>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="show-grid">
                            <Col xs={12} sm={4}>
                                <div className="col-square">
                                    <Image cloudName="jarellano01" publicId={selected.image} className="img-responsive" width="300" crop="scale" secure={true} />
                                </div>
                            </Col>
                            <Col xs={12} sm={8}>
                                <p>
                                    {nl2br(selected.description)}
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Section>
        )
    }
}

export default Instructors;