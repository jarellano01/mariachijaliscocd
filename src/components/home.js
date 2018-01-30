import React, {Component} from 'react';

import NavbarCustom from './NavbarCustom';
import Background from './Background';
import Landing from './sections/Landing';
import Subscribe from './sections/Subscribe';

import About from './sections/About';
import Instructors from './sections/Instructors';
import Contact from './sections/Contact';
import Videos from './sections/Videos';
import Rentals from './sections/Rentals';
import Classes from './sections/Classes';
import {withFirebase} from '../firebase'

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Background/>
                <NavbarCustom/>
                <Landing />
                <About/>
                <Instructors instructors={this.props.instructors}/>
                <Classes/>
                <Videos/>
                <Rentals/>
                <Contact/>
                <Subscribe />
            </div>
        );
    }
}

export default withFirebase(App);
