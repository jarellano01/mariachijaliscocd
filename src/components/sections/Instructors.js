import React, {Component} from 'react';
import {Col, Modal, Row} from 'react-bootstrap';
import Section from '../Section';
import GridItem from '../GridItem';
import nl2br from 'react-newline-to-break';
import firebase from 'firebase';


let config = {
    apiKey: "AIzaSyBATKdoLzQG5G1MVgCe74MwJ5z40tSDk-A",
    authDomain: "test-852cb.firebaseapp.com",
    databaseURL: "https://test-852cb.firebaseio.com",
    projectId: "test-852cb",
    storageBucket: "test-852cb.appspot.com",
    messagingSenderId: "809092705125"
};
firebase.initializeApp(config);
let dbRef = firebase.database().ref("data/instructors");

class Instructors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: {},
            modalOpen: false
        }
    }

    componentWillMount() {
        dbRef.on('value', (data) => {
            this.setState({
                instructors: data.val()
            })
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
        let {instructors} = this.state;
        if(!instructors){
            return (
                <div>Loading ...</div>
            )
        }
        return instructors.map((instructor, index) => {
            return (
                <GridItem key={index} image={`/images/instructors/${instructor.image}`} onClick={()=> this.select(instructor)} title={instructor.nickname} />
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
                                    <img className="img-responsive" src={`/images/instructors/${selected.image}`}
                                         alt=""/>
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