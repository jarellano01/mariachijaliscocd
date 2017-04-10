import React, {Component} from 'react';
import {Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import Section from '../Section';

class Subscribe extends Component {
    render() {
        return (
            <Section id="schedule" style={{backgroundColor:'rgba(238, 171, 255, 0.62)'}}>
                <Col xs={12}>
                    <h1 className="title">Subscribe</h1>
                    <p className="text-center">Get Informed of upcoming events</p>
                </Col>
                <Col>
                    <div id="mc_embed_signup">
                        <form
                            action="//crystalartsdance.us12.list-manage.com/subscribe/post?u=a89b1068413fe1dd3ffdf693b&amp;id=4eb1d1fa2b"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                            className="validate">


                            <FormGroup className="col-md-4" bsSize="large">
                                <FormControl
                                    id="mce-EMAIL"
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Email"
                                    required
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4" bsSize="large">
                                <FormControl
                                    id="mce-FNAME"
                                    type="text"
                                    name="FNAME"
                                    placeholder="First Name"
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4" bsSize="large">
                                <FormControl
                                    id="mce-LNAME"
                                    type="text"
                                    name="LNAME"
                                    placeholder="Last Name"
                                />
                            </FormGroup>
                            <input type="hidden" name="b_a89b1068413fe1dd3ffdf693b_4eb1d1fa2b" value=""/>
                            <FormGroup className="col-sm-12">
                                <Button type="submit" className="pull-right" id="mc-embedded-subscribe" bsSize="large" value="Subscribe">
                                    Send
                                </Button>
                            </FormGroup>

                        </form>
                    </div>

                </Col>
                <Col xs={12}>
                    <p className="text-center">WE RESPECT YOUR PRIVACY</p>
                </Col>
            </Section>
        )
    }
}

export default Subscribe;