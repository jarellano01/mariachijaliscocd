import React, {Component} from 'react';
import Section from '../Section';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import Icon from 'react-fontawesome';
// import GoogleMapReact from 'google-map-react';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: 'mariachijaliscomd@gmail.com',
            phone: '+18183239392',
            displayPhone: '(818) 323-9392',
            instagram: 'https://www.instagram.com/mariachijaliscocd',
            youtube: 'https://www.youtube.com/user/duranserrano',
            facebook: 'https://www.facebook.com/MariachiJaliscoCD'
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
                    <h3>Email Us: <br/><a style={{wordBreak: "break-all"}} href={`mailto:${this.state.email}`}>{this.state.email}</a>
                    </h3>
                    <h3>Call Us:<br/> <a href={`tel:${this.state.phone}`}>{this.state.displayPhonev}</a></h3>
                    {/*<a href="https://goo.gl/maps/ma19WbboaJN2" target="_blank">*/}
                        <h3>Los Angeles / San Fernando Valley</h3>
                    {/*</a>*/}
                </Col>
                <Col xs={12} style={{fontSize: '50px'}} className="SocialBar text-center">
                    <span className="col-xs-3"/>
                    <a href={this.state.facebook} target="_blank"><Icon className="col-xs-2"
                                                                                               name="facebook"/></a>
                    <a href={this.state.instagram} target="_blank"><Icon className="col-xs-2" name="instagram" /></a>
                    <a href={this.state.youtube} target="_blank"><Icon className="col-xs-2" name="youtube"/></a>
                </Col>
            </Section>
        )
    }
}

export default Contact;