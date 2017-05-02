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
        console.log('It worked');
    }


    render(){
        let {hidden} = this.state;
        return(
            <Section className={`full-page ${hidden ? null: 'unhide'}`} id="event">
                <Col xs={12} md={8} mdPush={4}>
                    <h1 className="title">Our Story</h1>
                    <Link to="/">Back Home</Link>
                    <p>
                        CrystalArts Dance Academy is where creativity and diversity exists! Our mission is to
                        produce well trained dancers in both social and stage levels. Our goal is to provide a
                        platform for everyone who is developing a new hobby, who already has the desire to learn and
                        CRYSTALLIZE their arts to show his/hers talent on stage.
                    </p>
                </Col>
                <Col xs={12} md={4} mdPull={8} className="text-center">
                    <img src="/images/crystal-pose-tony.jpg" style={{width: '80%'}} alt=""/>
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