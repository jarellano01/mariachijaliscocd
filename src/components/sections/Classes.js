import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import './Classes.css';
import Section from '../Section';
import moment from 'moment';
import axios from 'axios';
import domtoimage from 'dom-to-image';

class WeekCol extends Component {
    renderEvents = () => {
        let {events} = this.props;
        return events.map((event, index) => {
            return (
                <div key={index} className="event">
                    {event.time} <br/>
                    {event.description}
                </div>
            )
        })

    };

    render() {

        return (
            <div className="week-col">
                <div className="header">{this.props.day}</div>
                {this.renderEvents()}
            </div>
        )
    }
}

class Classes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weekEvents: {
                "Sunday": [
                    {
                        time: '8:00am - 9:00am',
                        description: 'Authentic Persian Dance w/Naz'
                    },
                    {
                        time: '8:00am - 9:00am',
                        description: 'Authentic Persian Dance w/Naz'
                    }
                ],
                "Monday": [],
                "Tuesday": [],
                "Wednesday": [],
                "Thursday": [],
                "Friday": [],
                "Saturday": [],

            }
        }
    }

    getEvents = () => {
        axios.get('https://www.googleapis.com/calendar/v3/calendars/crystalartsdanceacademy@gmail.com/events?key=AIzaSyD2qbpCK4gJfuYDlE8t9aM6n2i1GSrDeEE', {
            params: {
                maxResults: 2500,
                singleEvents: true,
                timeMin: moment().startOf('week').format(),
                timeMax: moment().endOf('week').format(),
                orderBy: 'startTime'
            }

        })
            .then((response) =>{
                let weekEvents = {};
                response.data.items.map((event) => {
                    let day = moment(event.start.dateTime).format('dddd');

                    if(!weekEvents[day]) weekEvents[day] = [];

                    return weekEvents[day].push({
                        time: `${moment(event.start.dateTime).format('h:mm a')} - ${moment(event.end.dateTime).format('h:mm a')}`,
                        description: event.summary
                    });
                });
                this.setState({
                   weekEvents
                });
                console.log(weekEvents);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getEvents();
    }

    renderWeekCal = () => {
        return (
            <Col xs={12} md={12} className="text-center" id="calendar">
                <div className="week-container">
                    <WeekCol events={this.state.weekEvents.Sunday} day="Sunday"/>
                    <WeekCol events={this.state.weekEvents.Monday} day="Monday"/>
                    <WeekCol events={this.state.weekEvents.Tuesday} day="Tuesday"/>
                    <WeekCol events={this.state.weekEvents.Wednesday} day="Wednesday"/>
                    <WeekCol events={this.state.weekEvents.Thursday} day="Thursday"/>
                    <WeekCol events={this.state.weekEvents.Friday} day="Friday"/>
                    <WeekCol events={this.state.weekEvents.Saturday} day="Saturday"/>
                </div>
            </Col>
        )
    };


    render() {
        return (
            <Section id="schedule">
                <Col xs={12}>
                    <h1 className="title">Schedule</h1>
                </Col>
                {this.renderWeekCal()}
            </Section>
        )
    }
}

export default Classes;