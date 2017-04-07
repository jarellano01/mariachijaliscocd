import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';

class Rentals extends Component {
    render(){
        return(
            <Section id="about">

                <Col xs={12} md={8} mdPush={4}>
                    <h1 className="title">24 Hour Rentals</h1>
                    <p>
                        ***CrystalArts Dance Academy has a 24 hour cancellation/change policy.  If you cancel or reschedule less then 24 hours before your booking is scheduled to begin, you will be charged for the full booking.  This policy also applies to "same day" bookings.  If you are booking a room for the same day or less then 24 hours in advance, that booking will be considered a confirmed booking and will not be able to be changed or canceled without payment.
                    </p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center">
                    <img src="/images/studiopic.jpeg" style={{width: '100%'}} alt=""/>
                </Col>
            </Section>
        )
    }
}
export default Rentals;