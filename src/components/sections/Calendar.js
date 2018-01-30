import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';
import axios from 'axios';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props){
        super(props);

        this.state = {
            events : []
        }
    }
    componentDidMount () {
        this.getEvents((events) => {
            this.setState({events})
        })
    }

    getEvents = (cb) => {
        axios.get('https://www.googleapis.com/calendar/v3/calendars/crystalartsdanceacademy@gmail.com/events?timeMax=2017-06-11T21%3A00%3A00-07%3A00&timeMin=2017-03-11T21%3A00%3A00-07%3A00&singleEvents=true&maxResults=2500&key=AIzaSyD2qbpCK4gJfuYDlE8t9aM6n2i1GSrDeEE')
            .then(function (response) {
                let calendarData = response.data.items.map((event)=>{
                    return {
                        start: moment(event.start.dateTime).toDate(),
                        end: moment(event.end.dateTime).toDate(),
                        title: event.summary
                    }

                });
                cb(calendarData);
            })
            .catch(function (error) {
                console.log(error);
            });
    } ;

    renderCalender = () => {
      return (
          <BigCalendar
              events={this.state.events}
              style={{height: '600px'}}

              step={60}


          />
      )
    };

    render(){
        return(
            <Section id="calendar">

                <Col xs={12} md={12} className="text-center">
                    {this.renderCalender()}
                </Col>
            </Section>
        )
    }
}
export default Calendar;