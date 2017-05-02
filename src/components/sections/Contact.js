import React, {Component} from 'react';
import Section from '../Section';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import Icon from 'react-fontawesome';
import "./SocialBar.css";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    sendMessage = (e) => {
        e.preventDefault();
        let {firstName, lastName, email, message} = this.state;
        axios.post('https://api:key-4c858e04e34749540dcd9e03363f8555@api.mailgun.net/v3/sandbox493d387755e14587952b44294fd30879.mailgun.org/messages', {
            params: {
                to: 'Crystal Duran <crystalartsdanceacademy@gmail.com>',
                from: 'Mailgun Sandbox <postmaster@sandbox493d387755e14587952b44294fd30879.mailgun.org>',
                text: `${firstName} ${lastName} - ${email}: ${message}`,
                subject: 'New Message from Crystal Arts'
            },
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <Section id="contact">
                <Col xs={12}>
                    <h1 className="title">Contact Us</h1>
                </Col>
                <Col className="text-center">
                    <h3></h3>
                    <h3>Email Us: <a href="mailto:crystalartsdancestudio@gmail.com">crystalartsdancestudio@gmail.com</a></h3>
                    <h3>Call Us: <a href="tel:+18186252693">(818) 625-2693</a></h3>
                </Col>
                <Col xs={12} style={{fontSize: '50px'}} className="SocialBar text-center">
                    <span className="col-xs-2"/>
                    <a href=""><Icon className="col-xs-2" name="facebook" /></a>
                    <a href=""><Icon className="col-xs-2" name="twitter" /></a>
                    <a href=""><Icon className="col-xs-2" name="instagram" /></a>
                    <a href=""><Icon className="col-xs-2" name="envelope-o" /></a>
                </Col>
                {/*<Col xs={12}>*/}
                    {/*<Row>*/}
                        {/*<form>*/}
                            {/*<FormGroup className="col-sm-6" bsSize="large">*/}
                                {/*<ControlLabel>First Name</ControlLabel>*/}
                                {/*<FormControl*/}
                                    {/*id="formControlsText"*/}
                                    {/*type="text"*/}
                                    {/*name="firstName"*/}
                                    {/*value={firstName}*/}
                                    {/*onChange={this.handleInputChange}*/}
                                {/*/>*/}
                            {/*</FormGroup>*/}

                            {/*<FormGroup className="col-sm-6" bsSize="large">*/}
                                {/*<ControlLabel>Last Name</ControlLabel>*/}
                                {/*<FormControl*/}
                                    {/*id="formControlsText"*/}
                                    {/*type="text"*/}
                                    {/*name="lastName"*/}
                                    {/*value={lastName}*/}
                                    {/*onChange={this.handleInputChange}*/}
                                {/*/>*/}
                            {/*</FormGroup>*/}
                            {/*<FormGroup className="col-sm-12" bsSize="large">*/}
                                {/*<ControlLabel>Email</ControlLabel>*/}
                                {/*<FormControl*/}
                                    {/*id="formControlsText"*/}
                                    {/*type="email"*/}
                                    {/*name="email"*/}
                                    {/*value={email}*/}
                                    {/*onChange={this.handleInputChange}*/}
                                {/*/>*/}
                            {/*</FormGroup>*/}
                            {/*<FormGroup controlId="formControlsTextarea" className="col-sm-12" bsSize="large">*/}
                                {/*<ControlLabel>Message</ControlLabel>*/}
                                {/*<FormControl*/}
                                    {/*componentClass="textarea"*/}
                                    {/*placeholder="Want to learn more, book a reservation or "*/}
                                    {/*rows="4"*/}
                                    {/*name="message"*/}
                                    {/*value={message}*/}
                                    {/*onChange={this.handleInputChange}*/}
                                {/*/>*/}
                            {/*</FormGroup>*/}
                            {/*<FormGroup className="col-sm-12">*/}
                                {/*<Button type="submit" className="pull-right" bsSize="large" onClick={this.sendMessage}>*/}
                                    {/*Send*/}
                                {/*</Button>*/}
                            {/*</FormGroup>*/}
                        {/*</form>*/}
                    {/*</Row>*/}
                {/*</Col>*/}
            </Section>
        )
    }
}

export default Contact;