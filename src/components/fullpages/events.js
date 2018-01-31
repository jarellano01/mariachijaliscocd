import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Section from '../Section';
import {Link} from 'react-router-dom';

class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true
        }
    }

    componentDidMount(){
        document.getElementsByTagName("BODY")[0].className = 'modal-open';
        setTimeout(()=>{
            this.setState({hidden: false})
        }, 1)

    }

    componentWillUnmount(){
        document.getElementsByTagName("BODY")[0].className = '';
    }


    render(){
        let {hidden} = this.state;
        return(
            <Section className={`full-page ${hidden ? null: 'unhide'}`} id="event">
                <Col xs={12} md={8} mdPush={2}>
                    <img src="/flyers/pop-up-5-13.jpeg" className="img-responsive flyer" alt=""/>
                </Col>
                <Link to="/">
                    <div className="show-events">
                        Close
                    </div>
                </Link>
            </Section>
        )
    }
}
export default Events;