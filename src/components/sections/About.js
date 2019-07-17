import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';
import nl2br from 'react-newline-to-break'

const description = `
Mariachi Jalisco is a professional musical ensemble formed by young and talented musicians ready to make your next event one of a kind! We have a wide variety of music included in our set lists. Ranging from traditional rancheras and sones to modern Latin hits and even the all time favorite “Baby Shark” and Disney’s “Un Poco Loco”. With our wide variety of song choices we’ll be sure to please your guests and make your event an unforgettable experience.

You can find us performing at Los Tres Hermanos Restaurant in San Fernando every Friday and Saturday night. We are also available for hire for any type of events before and after our show times at Los Tres Hermanos.

If you are hiring Mariachi Jalisco for concerts and show events please be sure to ask about our Grupo de Gala (a large group that consists 8-13 musicians). We also have event packages available with fun and bright folklorico dancers and a professional sound system. Please be sure to choose Mariachi Jalisco for your next event. We’ll be sure to bring a fun, cultural and professional experience to your next special gathering.
`
class About extends Component {
    render(){
        return(
            <Section id="about" className='relative'>


                <Col xs={12} md={8} mdPush={4}>
                    <h1 className="title">Our Story</h1>
                    <p>{nl2br(description)}</p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center vertical-center">
                    <img src="/images/about_photo.jpg" style={{width: '100%'}} alt=""/>
                </Col>
            </Section>
        )
    }
}
export default About;