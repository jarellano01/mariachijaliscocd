import React, {Component} from 'react';
import Section from '../Section';
import {Col, ControlLabel, FormControl, FormGroup, Row, Button} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <Col xs={12}>
                    <h1 className="title">Contact Us</h1>
                </Col>
                <Col xs={12}>
                    <Row>
                        <form>
                            <FormGroup className="col-sm-6" bsSize="large">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl
                                    id="formControlsText"
                                    type="text"
                                />
                            </FormGroup>

                            <FormGroup className="col-sm-6" bsSize="large">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl
                                    id="formControlsText"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup className="col-sm-12" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    id="formControlsText"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea" className="col-sm-12" bsSize="large">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl componentClass="textarea"
                                             placeholder="Tell us a little about your self and how we can help."
                                             rows="4"/>
                            </FormGroup>
                            <FormGroup className="col-sm-12" >
                                <Button type="submit" className="pull-right" bsSize="large">
                                    Send
                                </Button>
                            </FormGroup>
                        </form>
                    </Row>
                </Col>

            </Section>
        )
    }
}

export default Contact;