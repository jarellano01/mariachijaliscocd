import React, {Component} from 'react';
import {Col,Carousel} from 'react-bootstrap';
import Section from '../Section';

class Rentals extends Component {
    render(){
        return(
            <Section id="rentals">

                <Col xs={12} md={6} mdPush={6}>
                    <h1 className="title">24 Hour Rentals</h1>
                    <p>
                        ***CrystalArts Dance Academy has a 24 hour cancellation/change policy.  If you cancel or reschedule less then 24 hours before your booking is scheduled to begin, you will be charged for the full booking.  This policy also applies to "same day" bookings.  If you are booking a room for the same day or less then 24 hours in advance, that booking will be considered a confirmed booking and will not be able to be changed or canceled without payment.
                    </p>
                </Col>
                <Col xs={12} md={6} mdPull={6} className="text-center">
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/images/studiopic.jpeg"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/images/studiopic.jpeg"/>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Section>
        )
    }
}
export default Rentals;